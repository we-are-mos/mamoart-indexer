import { createPublicClient, http } from 'viem';
import { forma } from 'viem/chains';
import { ELIGIBLE_NFT_CONTRACTS, SLOTHS_CONTRACT } from '../utils/contracts';
import { updateOwnedNFT } from '../db';
import { fetchCosmosTokens } from '../utils/fetchCosmosTokens';
import pLimit from 'p-limit';

// --- ABI for standard ERC721 Transfer event ---
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

// --- Viem public client for EVM events ---
const publicClient = createPublicClient({
  chain: forma,
  transport: http(),
});

/**
 * 👁️ Watches all EVM NFT contracts (from ELIGIBLE_NFT_CONTRACTS)
 * Listens to 'Transfer' events and updates DB with new owner data.
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
 * 🔁 Polls Celestine Sloths collection on Stargaze (Cosmos)
 * Every 180 seconds, fetches latest owner data and updates DB.
 */
export function startWatchingCosmosNFTs() {
  async function syncAllCosmosNFTs() {
    const totalSupply = 2500;
    const batchSize = 100;
    const batchGroupSize = 5;
    const stepSize = batchSize * batchGroupSize;
    const limit = pLimit(10); // Max 10 concurrent DB writes


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

  // Run once on start
  syncAllCosmosNFTs();

  // Repeat every 180 seconds
  setInterval(syncAllCosmosNFTs, 180_000);

  console.log('🟢 Started polling Celestine Sloths every 180 seconds.');
}