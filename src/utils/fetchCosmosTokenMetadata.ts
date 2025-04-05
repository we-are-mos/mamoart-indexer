// utils/fetchCosmosToken.ts

import { GraphQLClient, gql } from 'graphql-request';
import { SLOTHS_CONTRACT } from './contracts';

const endpoint = 'https://graphql.mainnet.stargaze-apis.com/graphql';
const client = new GraphQLClient(endpoint);

type TokenResponse = {
  tokens: {
    tokens: {
      metadata: any;
    }[];
  };
};

/**
 * 🔭 Fetches metadata for a specific Cosmos-based NFT (Celestine Sloth).
 *
 * Uses Stargaze's GraphQL API to retrieve metadata by token ID.
 * The API uses pagination, so we calculate offset = tokenId - 1.
 *
 * @param tokenId - The ID of the Sloth token (1-based index)
 * @returns The parsed metadata object, or null if not found or failed
 */
export async function fetchCosmosTokenMetadata(tokenId: number) {
  const query = gql`
    query($offset: Int!, $collectionAddr: String!) {
      tokens(
        collectionAddr: $collectionAddr
        limit: 1
        offset: $offset
      ) {
        tokens {
          metadata
        }
      }
    }
  `;

  try {
    const data = await client.request<TokenResponse>(query, {
      offset: tokenId - 1,
      collectionAddr: SLOTHS_CONTRACT,
    });

    return data.tokens?.tokens?.[0]?.metadata || null;
  } catch (err: any) {
    const shortMessage =
      err?.message?.slice(0, 300)?.replace(/\n/g, ' ') || 'Unknown error';
    console.error(
      `[X] GraphQL metadata fetch failed for Sloth #${tokenId}: ${shortMessage}...`
    );
    return null;
  }
}