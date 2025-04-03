import { prisma } from '../prisma/client';

/* -------------------------------------
   🔁 Log Types (used in event handlers)
-------------------------------------- */
export type TransferLog = {
  address: string;
  args: {
    to: string;
    tokenId: bigint | number;
  };
};

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

/* -------------------------------------
   📥 Initialization Upserts
-------------------------------------- */

/**
 * Inserts or updates an NFT ownership record.
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
 * Inserts or updates a painted grid.
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

/* -------------------------------------
   🔄 Real-time Event Update Handlers
-------------------------------------- */

/**
 * Updates owner info when a Transfer event is emitted.
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
 * Updates a painted grid when a Painted event is emitted.
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

/* -------------------------------------
   🧩 API-Facing Queries
-------------------------------------- */

/**
 * Returns all paint grids (ordered by grid ID).
 */
export async function getAllPaintGrids() {
  return prisma.paintGrids.findMany({ orderBy: { gridId: 'asc' } });
}

/**
 * Returns a specific grid by its ID.
 */
export async function getPaintGrid(gridId: number) {
  return prisma.paintGrids.findUnique({ where: { gridId } });
}

/**
 * Returns all NFTs owned by a specific wallet address.
 */
export async function getOwnedNFTsByAddress(address: string) {
  return prisma.ownedNFT.findMany({ where: { owner: address.toLowerCase() } });
}

/**
 * Returns a specific owned NFT record.
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
 * Returns the most recently painted grids.
 */
export async function getLastPaintedGrids(limit = 10) {
  return prisma.paintGrids.findMany({
    orderBy: { paintedAt: 'desc' },
    take: limit,
  });
}

/**
 * Returns all grids painted by a specific wallet.
 */
export async function getGridsPaintedBy(address: string) {
  return prisma.paintGrids.findMany({
    where: { painter: address.toLowerCase() },
    orderBy: { paintedAt: 'desc' },
  });
}

/**
 * Returns the grid a specific NFT was placed on, if any.
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
 * Returns the full grid snapshot, including timestamp and all data.
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