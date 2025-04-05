// utils/fetchCosmosTokens.ts

import { GraphQLClient, gql } from 'graphql-request';
import { NULL_ADDRESS, SLOTHS_CONTRACT } from './contracts';

const endpoint = 'https://graphql.mainnet.stargaze-apis.com/graphql';
const client = new GraphQLClient(endpoint);

// 🔍 GraphQL query to fetch 100 Cosmos NFTs (Celestine Sloths) with metadata and owner
const query = gql`
  query($offset: Int, $collectionAddr: String!) {
    tokens(
      collectionAddr: $collectionAddr
      limit: 100
      offset: $offset
    ) {
      tokens {
        owner {
          address
        }
        id
        tokenId
        metadata
      }
    }
  }
`;

type TokenResponse = {
  tokens: {
    tokens: {
      owner: { address: string };
      id: string;
      tokenId: string;
      metadata: any;
    }[];
  };
};

type DefaultResponse = {
  owner: { address: string };
  tokenId: string;
  metadata: any;
};

/**
 * 🔄 Fetches a batch of 100 Cosmos NFTs (Sloths) from Stargaze GraphQL API.
 *
 * Uses pagination via the `offset` parameter.
 * On failure, returns a single dummy object with NULL_ADDRESS to ensure resilience.
 *
 * @param offset - Pagination offset (default: 0)
 * @returns An array of Sloth NFTs with owner and metadata
 */
export async function fetchCosmosTokens(offset: number = 0): Promise<DefaultResponse[]> {
  try {
    const res = await client.request<TokenResponse>(query, {
      offset,
      collectionAddr: SLOTHS_CONTRACT,
    });

    return res.tokens.tokens;
  } catch (err: any) {
    const shortMessage =
      err?.message?.slice(0, 300)?.replace(/\n/g, ' ') || 'Unknown error';
    console.error(`[Cosmos] Failed at offset ${offset}: ${shortMessage}...`);

    // Fallback with dummy response to prevent crash
    const defResponse: DefaultResponse[] = [
      {
        owner: { address: NULL_ADDRESS },
        tokenId: offset.toString(),
        metadata: null,
      },
    ];

    return defResponse;
  }
}