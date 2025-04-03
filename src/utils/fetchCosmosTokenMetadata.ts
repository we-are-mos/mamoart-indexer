// utils/fetchCosmosToken.ts
import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://graphql.mainnet.stargaze-apis.com/graphql';
const client = new GraphQLClient(endpoint);

type TokenResponse = {
  tokens: {
    tokens: {
      metadata: any;
    }[];
  };
};

type DefaultResponse = {
  metadata: any;
}

export async function fetchCosmosTokenMetadata(tokenId: number) {
  const query = gql`
    query($offset: Int!) {
      tokens(
        collectionAddr: "stars10n0m58ztlr9wvwkgjuek2m2k0dn5pgrhfw9eahg9p8e5qtvn964suc995j"
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
    const data = await client.request<TokenResponse>(query, { offset: tokenId - 1 });
    return data.tokens?.tokens?.[0]?.metadata || null;
  } catch (err: any) {
    const shortMessage =
      err?.message?.slice(0, 300)?.replace(/\n/g, ' ') || 'Unknown error';
    console.error(`[X] GraphQL metadata fetch failed for Sloth #${tokenId}: ${shortMessage}...`);
    const defResponse: DefaultResponse[]  = [{ metadata: null }]
    return defResponse;
  }
}