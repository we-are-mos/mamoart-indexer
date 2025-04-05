import { ELIGIBLE_NFT_CONTRACTS, ELIGIBLE_NFT_SUPPLIES, NULL_ADDRESS, SLOTH_SUPPLY, SLOTHS_CONTRACT } from '../utils/contracts';
import { upsertOwnedNFT } from '../services/db';
import { fetchFormaTokens } from '../utils/fetchFormaTokens';
import { fetchCosmosTokens } from '../utils/fetchCosmosTokens';
import pLimit from 'p-limit';

type FormaToken = {
  owner: string;
  contract: `0x${string}`;
  tokenId: number;
};

/**
 * 🧩 initOwnedNFTs
 *
 * Initializes EVM-based NFT ownership data for all whitelisted NFT collections on Forma.
 *
 * - Iterates over all tokenIds for each collection based on predefined supply.
 * - Fetches current owner via `fetchFormaTokens`.
 * - Handles fetch failures gracefully by assigning `NULL_ADDRESS` as fallback.
 * - Uses `p-limit` to safely throttle concurrent writes to the database.
 *
 * Logs progress at 25%, 50%, and 75% milestones for transparency.
 */
export async function initOwnedNFTs() {
  const BATCH_SIZE = 1000;
  const limit = pLimit(10); // Prevent overload on DB

  for (let i = 0; i < ELIGIBLE_NFT_CONTRACTS.length; i++) {
    const contract = ELIGIBLE_NFT_CONTRACTS[i];
    const total = ELIGIBLE_NFT_SUPPLIES[i];

    console.log(`\n🔍 Indexing contract: ${contract} with total ${total}`);
    const totalBatches: number[] = [];

    // Pre-calculate batch boundaries
    for (let index = BATCH_SIZE; index <= total; index += BATCH_SIZE) {
      totalBatches.push(index);
    }
    if (total % BATCH_SIZE !== 0) totalBatches.push(total);

    // Process each batch
    for (let index = 0; index < totalBatches.length; index++) {
      const start = index === 0 ? 1 : totalBatches[index - 1] + 1;
      const end = totalBatches[index];

      // Prepare fetch tasks for this batch
      const fetchTasks = [];
      for (let tokenId = start; tokenId <= end; tokenId++) {
        fetchTasks.push(fetchFormaTokens(contract, tokenId));
      }

      // Resolve all fetches and fallback on failures
      const settled = await Promise.allSettled(fetchTasks);
      const results: FormaToken[] = [];

      for (let i = 0; i < settled.length; i++) {
        const result = settled[i];
        const tokenId = start + i;
        if (result.status === 'fulfilled') {
          results.push(result.value);
        } else {
          results.push({
            contract,
            tokenId,
            owner: NULL_ADDRESS,
          });
        }
      }

      // Upsert all ownerships with concurrency limit
      await Promise.all(
        results.map(result =>
          limit(() =>
            upsertOwnedNFT(contract, result.tokenId, result.owner).catch(err =>
              console.error(`[X] Failed to upsert ${contract} #${result.tokenId}`, err.message)
            )
          )
        )
      );

      // Log progress at key intervals
      const progress = (end / total) * 100;
      if (progress >= 25 && progress < 25 + (BATCH_SIZE / total) * 100) {
        console.log(`[⏳] ${contract}: %25 complete`);
      } else if (progress >= 50 && progress < 50 + (BATCH_SIZE / total) * 100) {
        console.log(`[⏳] ${contract}: %50 complete`);
      } else if (progress >= 75 && progress < 75 + (BATCH_SIZE / total) * 100) {
        console.log(`[⏳] ${contract}: %75 complete`);
      }
    }

    console.log(`✅ Completed: ${contract}`);
  }

  console.log('\n🎉 All contracts indexed successfully.');
}

/**
 * 🧬 initCosmosNFTs
 *
 * Initializes NFT ownership data for the Celestine Sloths collection on Stargaze (Cosmos).
 *
 * - Fetches data in batches using Stargaze GraphQL API.
 * - Handles batch group failures gracefully.
 * - Uses `p-limit` to control database write concurrency.
 * - Normalizes missing/invalid owner fields to `NULL_ADDRESS`.
 *
 * Provides real-time progress feedback to track sync status.
 */
export async function initCosmosNFTs() {
  const totalSupply = SLOTH_SUPPLY;
  const batchSize = 100;
  const batchGroupSize = 5;
  const stepSize = batchSize * batchGroupSize;

  const limit = pLimit(10);
  let fetched = 0;

  console.log(`\n🔍 Indexing contract: ${SLOTHS_CONTRACT} with total ${totalSupply}`);

  for (let offset = 0; offset < totalSupply; offset += stepSize) {
    const tasks: Promise<any[]>[] = [];

    for (let i = 0; i < batchGroupSize; i++) {
      const currentOffset = offset + i * batchSize;
      if (currentOffset >= totalSupply) break;
      tasks.push(fetchCosmosTokens(currentOffset));
    }

    let results: any[][] = [];
    try {
      results = await Promise.all(tasks);
    } catch (err: any) {
      console.error(`[Cosmos Init] Batch fetch failed at offset ${offset}:`, err.message);
      continue;
    }

    const flatTokens = results.flat();

    // Insert/update all fetched token ownerships
    await Promise.all(
      flatTokens.map(token =>
        limit(() => {
          const tokenId = Number(token.tokenId);
          const owner = token.owner?.address?.toLowerCase() || NULL_ADDRESS;
          return upsertOwnedNFT(SLOTHS_CONTRACT, tokenId, owner).catch(err =>
            console.error(`[X] Failed to upsert Sloth #${tokenId}`, err.message)
          );
        })
      )
    );

    fetched += flatTokens.length;
    const percent = Math.round((fetched / totalSupply) * 100);
    console.log(`[⏳] Synced ${fetched}/${totalSupply} Sloths (%${percent})`);
  }

  console.log('\n✅ Finished initializing Celestine Sloths ownership.');
}