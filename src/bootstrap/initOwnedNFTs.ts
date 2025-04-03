import { ELIGIBLE_NFT_CONTRACTS, SLOTHS_CONTRACT } from '../utils/contracts';
import { upsertOwnedNFT } from '../db';
import { fetchFormaTokens } from '../utils/fetchFormaTokens';
import { fetchCosmosTokens } from '../utils/fetchCosmosTokens';
import pLimit from 'p-limit';

type FormaToken = {
  owner: string;
  contract: `0x${string}`;
  tokenId: number;
};

// Must match the order of ELIGIBLE_NFT_CONTRACTS exactly
const SUPPLIES = [9999, 4999, 7124, 300, 15000];

/**
 * Initializes ownership data for all eligible NFT collections
 * - Fetches ownership in batches
 * - Handles partial failures gracefully
 * - Inserts/updates data in DB with p-limit
 */
export async function initOwnedNFTs() {
  const BATCH_SIZE = 1000;
  const limit = pLimit(10); // Limit concurrent DB writes to 10

  for (let i = 0; i < ELIGIBLE_NFT_CONTRACTS.length; i++) {
    const contract = ELIGIBLE_NFT_CONTRACTS[i];
    const total = SUPPLIES[i];

    console.log(`\n🔍 Indexing contract: ${contract} with total ${total}`);
    const totalBatches: number[] = [];

    for (let index = BATCH_SIZE; index <= total; index += BATCH_SIZE) {
      totalBatches.push(index);
    }
    if (total % BATCH_SIZE !== 0) {
      totalBatches.push(total);
    }

    for (let index = 0; index < totalBatches.length; index++) {
      const start = index === 0 ? 1 : totalBatches[index - 1] + 1;
      const end = totalBatches[index];

      const fetchTasks = [];
      for (let tokenId = start; tokenId <= end; tokenId++) {
        fetchTasks.push(fetchFormaTokens(contract, tokenId));
      }

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
            owner: '0x0000000000000000000000000000000000000000',
          });
        }
      }

      await Promise.all(
        results.map(result =>
          limit(() =>
            upsertOwnedNFT(contract, result.tokenId, result.owner).catch(err =>
              console.error(`[X] Failed to upsert ${contract} #${result.tokenId}`, err.message)
            )
          )
        )
      );

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
 * Initializes ownership for all Celestine Sloth NFTs on Stargaze (Cosmos)
 * - Fetches 2500 tokens in batches of 5×100
 * - Uses p-limit to throttle DB writes
 * - Resilient to partial API or DB failures
 */
export async function initCosmosNFTs() {
  const totalSupply = 2500;
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

    await Promise.all(
      flatTokens.map(token =>
        limit(() => {
          const tokenId = Number(token.tokenId);
          const owner = token.owner?.address?.toLowerCase() || '0x0000000000000000000000000000000000000000';
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
