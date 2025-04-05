import { createPublicClient, http } from "viem";
import { forma } from "viem/chains";
import { erc721ABI, NULL_ADDRESS } from "./contracts";

// 🔹 Type representing a single ERC721 token and its current owner
type FormaToken = {
  owner: string;
  contract: `0x${string}`;
  tokenId: number;
};

// 🔗 Viem client configured for Forma chain
const client = createPublicClient({
  chain: forma,
  transport: http(),
});

/**
 * 🔍 Fetches the current owner of an ERC721 token on the Forma network.
 *
 * Attempts to call the `ownerOf(tokenId)` method from the ERC721 ABI.
 * If the call fails (e.g., token does not exist or contract error), returns NULL_ADDRESS.
 *
 * @param contract - ERC721 contract address
 * @param tokenId - Token ID to query ownership for
 * @returns A FormaToken object containing owner, contract, and tokenId
 */
export async function fetchFormaTokens(
  contract: `0x${string}`,
  tokenId: number
): Promise<FormaToken> {
  try {
    const owner = await client.readContract({
      address: contract,
      abi: erc721ABI,
      functionName: "ownerOf",
      args: [tokenId],
    });

    return {
      owner: owner as `0x${string}`,
      contract,
      tokenId,
    };
  } catch (err: any) {
    console.warn(
      `[!] Failed to fetch ${contract} #${tokenId} - using default owner`,
      err.message
    );

    return {
      owner: NULL_ADDRESS,
      contract,
      tokenId,
    };
  }
}