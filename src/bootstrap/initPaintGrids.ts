import { createPublicClient, http } from 'viem';
import { forma } from 'viem/chains';
import { MAMOART_CONTRACT, erc721ABI, mamoArtABI } from '../utils/contracts';
import { fetchAndParseMetadata } from '../utils/fetchMetadata';
import { upsertPaintGrid } from '../db';
import { fetchCosmosTokenMetadata } from '../utils/fetchCosmosTokenMetadata';
import pLimit from 'p-limit';

const client = createPublicClient({
  chain: forma,
  transport: http(),
});

/**
 * Initializes all 1500 MamoArt paint grids into the database.
 * - Handles empty grids with placeholder values.
 * - Fetches metadata for filled grids (ERC721 or Cosmos).
 * - Uses p-limit to throttle DB writes safely.
 */
export async function initPaintGrids() {
  console.log('\n🎨 Fetching all MamoArt grids...');

  let grids: { nftAddress: `0x${string}`; tokenId: bigint }[] = [];

  try {
    grids = await client.readContract({
      address: MAMOART_CONTRACT,
      abi: mamoArtABI,
      functionName: 'getAllGrids',
    }) as typeof grids;
  } catch (err: any) {
    console.error('[X] Failed to fetch grids from contract:', err.message);
    return;
  }

  const BATCH_SIZE = 500;
  const total = grids.length;
  const limit = pLimit(10);
  let processed = 0;

  for (let i = 0; i < total; i += BATCH_SIZE) {
    const batch = grids.slice(i, i + BATCH_SIZE);

    await Promise.all(
      batch.map((grid, index) =>
        limit(async () => {
          const gridId = i + index;
          const address = grid.nftAddress.toLowerCase();

          if (address === '0x0000000000000000000000000000000000000000') {
            return upsertPaintGrid(gridId, {
              nftAddress: address,
              tokenId: 0,
              metadata: 'Unknown',
              painter: 'Unknown',
              block: 0,
              txHash: `init-${gridId}`,
            }).catch(err => console.error(`[X] Failed to insert empty grid ${gridId}`, err.message));
          }

          let metadata = 'Unknown';

          try {
            if (address === '0x00000000000000000000000000000ce1e5713e') {
              const cosmosMetadata = await fetchCosmosTokenMetadata(Number(grid.tokenId));
              if (cosmosMetadata) metadata = JSON.stringify(cosmosMetadata);
            } else {
              const tokenURI = await client.readContract({
                address: grid.nftAddress,
                abi: erc721ABI,
                functionName: 'tokenURI',
                args: [grid.tokenId],
              }) as string;

              const parsed = await fetchAndParseMetadata(tokenURI);
              if (parsed) metadata = JSON.stringify(parsed);
            }
          } catch (err: any) {
            console.warn(`[!] Metadata fetch failed for grid ${gridId}`, err.message);
          }

          return upsertPaintGrid(gridId, {
            nftAddress: address,
            tokenId: Number(grid.tokenId),
            metadata,
            painter: 'Unknown',
            block: 0,
            txHash: `init-${gridId}`,
          }).catch(err =>
            console.error(`[X] Failed to insert grid ${gridId}`, err.message)
          );
        })
      )
    );

    processed += batch.length;
    const percent = Math.round((processed / total) * 100);
    console.log(`[⏳] Synced ${processed}/${total} grids (%${percent})`);
  }

  console.log('\n✅ Finished initializing paint grids.');
}