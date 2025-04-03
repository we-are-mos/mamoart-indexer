import { createPublicClient, http } from 'viem';
import { forma } from 'viem/chains';
import { erc721ABI, MAMOART_CONTRACT } from '../utils/contracts';
import { updatePaintGrids } from '../db';
import { fetchAndParseMetadata } from '../utils/fetchMetadata';
import { fetchCosmosTokenMetadata } from '../utils/fetchCosmosTokenMetadata';

// ABI for the Painted event emitted by the MamoArt contract
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

// Viem client
const publicClient = createPublicClient({
  chain: forma,
  transport: http(),
});

/**
 * Starts watching for Painted events on the MamoArt contract.
 * For each event:
 * - Extracts gridId, nftAddress, and tokenId
 * - Determines if NFT is Cosmos or EVM
 * - Fetches metadata accordingly
 * - Updates the PaintGrids table in DB
 */
export function startWatchingMamoArtGrid() {
  publicClient.watchContractEvent({
    address: MAMOART_CONTRACT,
    abi: paintedABI,
    eventName: 'Painted',
    onLogs: async (logs) => {
      for (const rawLog of logs) {
        const log = rawLog as any;

        // --- Fetch painter (transaction sender)
        let tx;
        try {
          if (log.transactionHash) {
            tx = await publicClient.getTransaction({ hash: log.transactionHash });
          }
        } catch (err: any) {
          console.warn('[!] Failed to fetch transaction:', err.message);
        }

        // --- Decide which metadata fetcher to use
        let metadata = 'Unknown';

        // Cosmos NFT (fake address used as identifier)
        if (log.args.nftAddress.toLowerCase() === '0x00000000000000000000000000000ce1e5713e') {
          try {
            const cosmosMeta = await fetchCosmosTokenMetadata(Number(log.args.tokenId));
            if (cosmosMeta) {
              metadata = JSON.stringify(cosmosMeta);
            }
          } catch (err: any) {
            console.warn(`[!] Failed to fetch Cosmos metadata for token ${log.args.tokenId}:`, err.message);
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
            if (parsed) {
              metadata = JSON.stringify(parsed);
            }
          } catch (err: any) {
            console.warn(`[!] Metadata fetch failed for EVM token ${log.args.tokenId}:`, err.message);
          }
        }

        // --- Save to DB
        try {
          await updatePaintGrids({
            ...log,
            painter: tx?.from ?? 'Unknown',
            txHash: log.transactionHash ?? 'Unknown',
            block: log.blockNumber ?? 0,
            metadata,
          });

          console.log(`[✔] Painted grid ${log.args.gridId} updated`);
        } catch (err: any) {
          console.warn(`[!] Failed to update painted grid ${log.args.gridId}`, err.message);
        }
      }
    },
  });

  console.log('🟢 Started watching Painted events on MamoArt');
}