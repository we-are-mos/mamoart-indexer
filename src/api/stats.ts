import { MAMOART_CONTRACT, mamoArtABI } from '../utils/contracts';
import { createPublicClient, http } from 'viem';
import { forma } from 'viem/chains';

/**
 * 🌐 Blockchain Client
 * Initializes a Viem public client for interacting with the Forma L2 network.
 * Used for querying on-chain data from the MamoArt contract.
 */
const client = createPublicClient({
  chain: forma,
  transport: http(),
});

/**
 * 📊 getMamoStats
 *
 * Retrieves global statistics directly from the MamoArt smart contract.
 *
 * - `totalPaints`: Total number of grid paint actions submitted on-chain.
 * - `totalUniqueUsers`: Total number of unique wallet addresses that have painted.
 *
 * This function performs two parallel read operations using `Promise.all` for efficiency.
 *
 * @returns An object containing total paint count and total unique users.
 *          Returns default fallback values `{ totalPaints: 0, totalUniqueUsers: 0 }`
 *          if the contract read fails (e.g., due to RPC error or network issue).
 */
export async function getMamoStats() {
  try {
    const [paintCount, uniqueUsers] = await Promise.all([
      client.readContract({
        address: MAMOART_CONTRACT,
        abi: mamoArtABI,
        functionName: 'totalPaints',
      }),
      client.readContract({
        address: MAMOART_CONTRACT,
        abi: mamoArtABI,
        functionName: 'totalUniqueUsers',
      }),
    ]);

    return {
      totalPaints: Number(paintCount),
      totalUniqueUsers: Number(uniqueUsers),
    };
  } catch (err: any) {
    console.warn('[getMamoStats] Failed to fetch stats from MamoArt contract:', err.message);
    return {
      totalPaints: 0,
      totalUniqueUsers: 0,
    };
  }
}