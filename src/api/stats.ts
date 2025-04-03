import { MAMOART_CONTRACT, mamoArtABI } from '../utils/contracts';
import { createPublicClient, http } from 'viem';
import { forma } from 'viem/chains';

// Create a public viem client to interact with the blockchain
const client = createPublicClient({
  chain: forma,
  transport: http(),
});

/**
 * Fetches global statistics from the MamoArt smart contract.
 * Includes:
 * - totalPaints: Number of paint actions
 * - totalUniqueUsers: Number of unique addresses that painted
 * Returns default values (0) if any error occurs.
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
    console.warn('[!] Failed to fetch stats from MamoArt contract', err.message);
    return {
      totalPaints: 0,
      totalUniqueUsers: 0,
    };
  }
}