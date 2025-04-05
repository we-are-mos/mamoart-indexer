import { prisma } from '../../prisma/client';

/* ============================================================================
 🌐 EVENT TYPES
============================================================================ */

/**
 * Log emitted from an ERC721 Transfer event.
 */
export type TransferLog = {
  address: string;
  args: {
    to: string;
    tokenId: bigint | number;
  };
};

/**
 * Log emitted from a Painted(gridId, nftAddress, tokenId) event.
 */
export type PaintedLog = {
  address: `0x${string}`;
  args: {
    gridId: bigint | number;
    nftAddress: `0x${string}`;
    tokenId: bigint | number;
  };
  metadata: string;
  painter: string;
  txHash: `0x${string}`;
  block: number;
};

/* ============================================================================
 🔄 UPSERT OPERATIONS
============================================================================ */

/**
 * 🔁 Inserts or updates an owned NFT in the database.
 * Used during both initial sync and real-time updates.
 */
export async function upsertOwnedNFT(contract: string, tokenId: number, owner: string) {
  try {
    return await prisma.ownedNFT.upsert({
      where: {
        contract_tokenId: {
          contract: contract.toLowerCase(),
          tokenId,
        },
      },
      update: {
        owner: owner.toLowerCase(),
        updatedAt: new Date(),
      },
      create: {
        contract: contract.toLowerCase(),
        tokenId,
        owner: owner.toLowerCase(),
      },
    });
  } catch (err) {
    console.warn(`[upsertOwnedNFT] Failed for ${contract.toLowerCase()} #${tokenId}`, err);
    return null;
  }
}

/**
 * 🎨 Inserts or updates a painted grid in the database.
 * Called during initial grid indexing or real-time paint events.
 */
export async function upsertPaintGrid(
  gridId: number,
  data: {
    nftAddress: string;
    tokenId: number;
    metadata: string;
    painter: string;
    block: number;
    txHash: string;
  }
) {
  try {
    const normalizedData = {
      ...data,
      nftAddress: data.nftAddress.toLowerCase(),
      painter: data.painter.toLowerCase(),
      txHash: data.txHash.toLowerCase(),
    };

    return await prisma.paintGrids.upsert({
      where: { gridId },
      update: {
        ...normalizedData,
        paintedAt: new Date(),
      },
      create: {
        gridId,
        ...normalizedData,
      },
    });
  } catch (err) {
    console.warn(`[upsertPaintGrid] Failed for grid ${gridId}`, err);
    return null;
  }
}

/* ============================================================================
 🔁 REAL-TIME EVENT HANDLERS
============================================================================ */

/**
 * 📦 Handles ERC721 'Transfer' events by updating NFT ownership in DB.
 */
export async function updateOwnedNFT(event: TransferLog) {
  const contract = event.address.toLowerCase();
  const tokenId = Number(event.args.tokenId);
  const newOwner = event.args.to.toLowerCase();

  try {
    const current = await prisma.ownedNFT.findUnique({
      where: {
        contract_tokenId: {
          contract,
          tokenId,
        },
      },
      select: {
        owner: true,
      },
    });

    if (current?.owner === newOwner) return;

    await prisma.ownedNFT.upsert({
      where: {
        contract_tokenId: {
          contract,
          tokenId,
        },
      },
      update: {
        owner: newOwner,
        updatedAt: new Date(),
      },
      create: {
        contract,
        tokenId,
        owner: newOwner,
      },
    });

    console.log(`[✔] Updated owner for ${contract} token ${tokenId}`);
  } catch (err) {
    console.warn(`[updateOwnedNFT] Failed for ${contract} #${tokenId}`, err);
  }
}

/**
 * 🎯 Updates a grid when a new paint action is registered.
 * Triggered from the Painted event listener.
 */
export async function updatePaintGrids(event: PaintedLog) {
  try {
    await prisma.paintGrids.update({
      where: {
        gridId: Number(event.args.gridId),
      },
      data: {
        nftAddress: event.args.nftAddress.toLowerCase(),
        tokenId: Number(event.args.tokenId),
        metadata: event.metadata,
        painter: event.painter.toLowerCase(),
        block: event.block,
        txHash: event.txHash.toLowerCase(),
        paintedAt: new Date(),
      },
    });
  } catch (err) {
    console.warn(`[updatePaintGrids] Failed for grid ${event.args.gridId}`, err);
  }
}

/* ============================================================================
 📡 PUBLIC API HELPERS (for /api/ routes)
============================================================================ */

/**
 * 📄 Returns all paint grids, sorted by grid ID.
 */
export async function getAllPaintGrids() {
  return prisma.paintGrids.findMany({ orderBy: { gridId: 'asc' } });
}

/**
 * 🔍 Returns a single paint grid by its ID.
 */
export async function getPaintGrid(gridId: number) {
  return prisma.paintGrids.findUnique({ where: { gridId } });
}

/**
 * 🎯 Returns all NFTs owned by a wallet address.
 */
export async function getOwnedNFTsByAddress(address: string) {
  return prisma.ownedNFT.findMany({ where: { owner: address.toLowerCase() } });
}

/**
 * 🧾 Returns a specific NFT record by contract and token ID.
 */
export async function getOwnedNFT(contract: string, tokenId: number) {
  return prisma.ownedNFT.findUnique({
    where: {
      contract_tokenId: {
        contract: contract.toLowerCase(),
        tokenId,
      },
    },
  });
}

/**
 * 🕓 Returns the 10 most recently painted grids.
 */
export async function getLastPaintedGrids(limit = 10) {
  return prisma.paintGrids.findMany({
    orderBy: { paintedAt: 'desc' },
    take: limit,
  });
}

/**
 * 🎨 Returns all grids painted by a specific wallet.
 */
export async function getGridsPaintedBy(address: string) {
  return prisma.paintGrids.findMany({
    where: { painter: address.toLowerCase() },
    orderBy: { paintedAt: 'desc' },
  });
}

/**
 * 🔎 Returns the grid where a given NFT is currently painted.
 */
export async function getGridByNFT(contract: string, tokenId: number) {
  return prisma.paintGrids.findFirst({
    where: {
      nftAddress: contract.toLowerCase(),
      tokenId,
    },
  });
}

/**
 * 🧱 Returns a full snapshot of the paint grid system.
 * Includes timestamp and all grid data.
 */
export async function getGridSnapshot() {
  const grids = await prisma.paintGrids.findMany({
    orderBy: { gridId: 'asc' },
  });

  return {
    timestamp: new Date().toISOString(),
    totalGrids: grids.length,
    data: grids,
  };
}