import { createPublicClient, http } from "viem";
import { erc721ABI } from "./contracts";
import { forma } from "viem/chains";

type FormaToken = {
  owner: string;
  contract: `0x${string}`;
  tokenId: number;
}

export async function fetchFormaTokens(contract: `0x${string}`, tokenId: number): Promise<FormaToken> {
  let owner = '0x0000000000000000000000000000000000000000';
  
  const client = createPublicClient({
    chain: forma,
    transport: http(),
  });

  
  try {
    owner = await client.readContract({
      address: contract,
      abi: erc721ABI,
      functionName: 'ownerOf',
      args: [tokenId],
    }) as string;

    return {owner: owner, contract: contract, tokenId: tokenId};
  } catch (err: any) {
    console.warn(`[!] Failed to fetch ${contract} #${tokenId} - using default owner`, err.message);
    return {owner: owner, contract: contract, tokenId: tokenId};
  }
}