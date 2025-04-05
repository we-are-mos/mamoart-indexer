import { createPublicClient, http } from 'viem';
import { forma } from 'viem/chains';
import { ELIGIBLE_NFT_CONTRACTS, SLOTH_SUPPLY, SLOTHS_CONTRACT } from '../utils/contracts';
import { updateOwnedNFT } from '../services/db';
import { fetchCosmosTokens } from '../utils/fetchCosmosTokens';
import pLimit from 'p-limit';

/* ------------------------------------------------------------------
 🧩 ABI for ERC721 Transfer Event
 Used to monitor ownership changes on EVM-compatible NFT collections.
------------------------------------------------------------------- */
const transferABI = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
];

// Public viem client for listening to EVM events
const publicClient = createPublicClient({
  chain: forma,
  transport: http(),
});

/**
 * 🔍 Watches EVM-based NFT collections (from `ELIGIBLE_NFT_CONTRACTS`)
 *
 * Subscribes to 'Transfer' events and triggers DB updates for ownership.
 * Handles each contract independently and logs any failed updates.
 */
export function startWatchingOnNFTCollections() {
  for (const contract of ELIGIBLE_NFT_CONTRACTS) {
    publicClient.watchContractEvent({
      address: contract,
      abi: transferABI,
      eventName: 'Transfer',
      onLogs: async (logs) => {
        for (const rawLog of logs) {
          const log = rawLog as any;

          try {
            await updateOwnedNFT(log);
          } catch (err: any) {
            console.warn(`[!] Failed to update ownership for token ${log.args.tokenId} in ${contract}`, err.message);
          }
        }
      },
    });

    console.log(`🟢 Started watching Transfer events on: ${contract}`);
  }
}

/**
 * 🔁 Polls Cosmos-based Celestine Sloths NFTs for updated ownership
 *
 * Because Stargaze (Cosmos) doesn’t support real-time event listening like EVM,
 * this function manually fetches owner data for Sloths every 180 seconds.
 *
 * - Uses GraphQL to query batches of Sloth tokens.
 * - Uses `p-limit` to throttle concurrent DB writes.
 * - Gracefully handles partial failures in data or DB.
 */
export function startWatchingCosmosNFTs() {
  async function syncAllCosmosNFTs() {
    const totalSupply = SLOTH_SUPPLY;
    const batchSize = 100;
    const batchGroupSize = 5;
    const stepSize = batchSize * batchGroupSize;
    const limit = pLimit(10);

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
        console.warn(`[Cosmos] Batch fetch failed at offset ${offset}:`, err.message);
        continue;
      }

      const flatTokens = results.flat();

      await Promise.all(
        flatTokens.map(token =>
          limit(() =>
            updateOwnedNFT({
              address: SLOTHS_CONTRACT,
              args: {
                to: token.owner.address.toLowerCase(),
                tokenId: Number(token.tokenId),
              },
            }).catch(err =>
              console.warn(`[!] Failed to upsert Cosmos NFT ${token.tokenId}`, err.message)
            )
          )
        )
      );
    }

    console.log(`🔁 Synced ${totalSupply} Celestine Sloths at ${new Date().toLocaleTimeString()}`);
  }

  // Initial run
  syncAllCosmosNFTs();

  // Re-run every 3 minutes
  setInterval(syncAllCosmosNFTs, 180_000);

  console.log('🟢 Started polling Celestine Sloths every 180 seconds.');
}