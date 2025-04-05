import { createPublicClient, http } from 'viem';
import { forma } from 'viem/chains';
import { 
  FAKE_SLOTH_ADDRESS, 
  MAMOART_CONTRACT, 
  NULL_ADDRESS, 
  SLOTHS_CONTRACT, 
  erc721ABI, 
  mamoArtABI 
} from '../utils/contracts';

import { fetchAndParseMetadata } from '../utils/fetchMetadata';
import { upsertPaintGrid } from '../services/db';
import { fetchCosmosTokenMetadata } from '../utils/fetchCosmosTokenMetadata';
import { fetchFormaTokens } from '../utils/fetchFormaTokens';
import pLimit from 'p-limit';

// Initialize a viem client to interact with the Forma network
const client = createPublicClient({
  chain: forma,
  transport: http(),
});

/**
 * Initializes all MamoArt paint grids into the database.
 *
 * Key behaviors:
 * - Fetches all 1500 grid slots using `getAllGrids()` from the MamoArt contract.
 * - For empty slots (`NULL_ADDRESS`), inserts a placeholder entry.
 * - For filled slots:
 *   - Fetches ownership data using `fetchFormaTokens`.
 *   - Determines whether the NFT is EVM-based or a Cosmos sloth using `FAKE_SLOTH_ADDRESS`.
 *   - Fetches metadata accordingly (via IPFS/Base64 for EVM or GraphQL for Cosmos).
 * - Uses `p-limit` to control concurrency of DB writes (max 10 at a time).
 */
export async function initPaintGrids() {
  console.log('\n🎨 Fetching all MamoArt grids...');

  let grids: { nftAddress: `0x${string}`; tokenId: bigint }[] = [];

  // Step 1: Read all paint grid entries from contract
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
  const limit = pLimit(10); // Max 10 concurrent DB writes
  let processed = 0;

  // Step 2: Process all grids in batches
  for (let i = 0; i < total; i += BATCH_SIZE) {
    const batch = grids.slice(i, i + BATCH_SIZE);

    await Promise.all(
      batch.map((grid, index) =>
        limit(async () => {
          const gridId = i + index;
          let address = grid.nftAddress.toLowerCase();

          // Case: Empty grid
          if (address === NULL_ADDRESS) {
            return upsertPaintGrid(gridId, {
              nftAddress: address,
              tokenId: 0,
              metadata: 'unknown',
              painter: NULL_ADDRESS,
              block: 0,
              txHash: `init-${gridId}`,
            }).catch(err =>
              console.error(`[X] Failed to insert empty grid ${gridId}`, err.message)
            );
          }

          // Step 3: Fetch NFT ownership
          let painter = NULL_ADDRESS;
          if (address !== FAKE_SLOTH_ADDRESS) {
            try {
              const nftDetails = await fetchFormaTokens(grid.nftAddress, Number(grid.tokenId));
              painter = nftDetails.owner;
            } catch (err) {
              console.error(`[X] Failed to fetch Owner for ${grid.nftAddress} ${grid.tokenId}`);
            }
          }

          // Step 4: Fetch metadata
          let metadata = 'unknown';
          try {
            // Cosmos NFT (Celestine Sloth)
            if (address === FAKE_SLOTH_ADDRESS) {
              address = SLOTHS_CONTRACT.toLowerCase();
              const cosmosMetadata = await fetchCosmosTokenMetadata(Number(grid.tokenId));
              if (cosmosMetadata) metadata = JSON.stringify(cosmosMetadata);

            // EVM NFT
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

          // Step 5: Save to DB
          return upsertPaintGrid(gridId, {
            nftAddress: address,
            tokenId: Number(grid.tokenId),
            metadata,
            painter,
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