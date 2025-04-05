import { createPublicClient, http } from 'viem';
import { forma } from 'viem/chains';
import {
  erc721ABI,
  FAKE_SLOTH_ADDRESS,
  MAMOART_CONTRACT,
  NULL_ADDRESS,
  SLOTHS_CONTRACT
} from '../utils/contracts';
import { updatePaintGrids } from '../services/db';
import { fetchAndParseMetadata } from '../utils/fetchMetadata';
import { fetchCosmosTokenMetadata } from '../utils/fetchCosmosTokenMetadata';
import pLimit from 'p-limit';

/* ------------------------------------------------------------------
 🎨 ABI: Painted(gridId, nftAddress, tokenId)
 Emitted by the MamoArt contract when a grid is painted.
------------------------------------------------------------------- */
const paintedABI = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'gridId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'nftAddress', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'Painted',
    type: 'event',
  },
];

// Viem public client for interacting with Forma chain
const publicClient = createPublicClient({
  chain: forma,
  transport: http(),
});

// Throttles concurrent event handling (max 5 at a time)
const limit = pLimit(5);

// Retry settings for reliability
const RETRY_COUNT = 3;

/**
 * 🟣 Watches the MamoArt contract for 'Painted' events
 *
 * For each emitted event:
 * - Extracts NFT info and grid ID
 * - Determines if the NFT is Cosmos or EVM
 * - Fetches metadata accordingly
 * - Updates the grid state in the database
 * - Retries on failure (up to RETRY_COUNT)
 */
export function startWatchingMamoArtGrid() {
  publicClient.watchContractEvent({
    address: MAMOART_CONTRACT,
    abi: paintedABI,
    eventName: 'Painted',
    onLogs: async (logs) => {
      for (const rawLog of logs) {
        // Apply concurrency limit
        limit(async () => {
          const log = rawLog as any;

          for (let attempt = 1; attempt <= RETRY_COUNT; attempt++) {
            try {
              /* ---------------------------------------
                 🔍 1. Get painter address from tx sender
              ---------------------------------------- */
              let tx;
              try {
                if (log.transactionHash) {
                  tx = await publicClient.getTransaction({
                    hash: log.transactionHash,
                  });
                }
              } catch (err: any) {
                console.warn(`[!] [Attempt ${attempt}] Failed to fetch transaction:`, err.message);
              }

              /* ---------------------------------------
                 🧠 2. Decide metadata source (Cosmos or EVM)
              ---------------------------------------- */
              let nftAddress = log.args.nftAddress.toLowerCase();
              let metadata = 'unknown';

              // Cosmos NFT (fake placeholder used on-chain)
              if (nftAddress === FAKE_SLOTH_ADDRESS) {
                try {
                  nftAddress = SLOTHS_CONTRACT;
                  const cosmosMeta = await fetchCosmosTokenMetadata(Number(log.args.tokenId));
                  if (cosmosMeta) metadata = JSON.stringify(cosmosMeta);
                } catch (err: any) {
                  console.warn(`[!] [Attempt ${attempt}] Failed to fetch Cosmos metadata:`, err.message);
                }

              // EVM NFT
              } else {
                try {
                  const tokenURI = await publicClient.readContract({
                    address: log.args.nftAddress,
                    abi: erc721ABI,
                    functionName: 'tokenURI',
                    args: [log.args.tokenId],
                  }) as string;

                  const parsed = await fetchAndParseMetadata(tokenURI);
                  if (parsed) metadata = JSON.stringify(parsed);
                } catch (err: any) {
                  console.warn(`[!] [Attempt ${attempt}] Failed to fetch EVM metadata:`, err.message);
                }
              }

              /* ---------------------------------------
                 💾 3. Save event result to the database
              ---------------------------------------- */
              await updatePaintGrids({
                ...log,
                args: {
                  gridId: log.args.gridId,
                  nftAddress,
                  tokenId: log.args.tokenId
                },
                painter: tx?.from?.toLowerCase() ?? NULL_ADDRESS,
                txHash: log.transactionHash ?? `init-${log.args.gridId}`,
                block: Number(log.blockNumber) ?? 0,
                metadata,
              });

              console.log(`[✔] Painted grid ${log.args.gridId} updated (attempt ${attempt})`);
              break; // Exit retry loop after success

            } catch (err: any) {
              console.warn(`[X] [Attempt ${attempt}] Failed to update painted grid ${log.args.gridId}`, err.message);

              if (attempt === RETRY_COUNT) {
                console.error(`[‼] Giving up on grid ${log.args.gridId} after ${RETRY_COUNT} attempts`);
              } else {
                await new Promise((res) => setTimeout(res, 500 * attempt)); // Exponential backoff
              }
            }
          }
        });
      }
    },
  });

  console.log('🟢 Started watching Painted events on MamoArt');
}