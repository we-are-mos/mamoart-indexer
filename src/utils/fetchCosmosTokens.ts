import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://graphql.mainnet.stargaze-apis.com/graphql';

const query = gql`
  query($offset: Int) {
    tokens(
      collectionAddr: "stars10n0m58ztlr9wvwkgjuek2m2k0dn5pgrhfw9eahg9p8e5qtvn964suc995j"
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
}

const client = new GraphQLClient(endpoint);

export async function fetchCosmosTokens(offset: number = 0) {
  try {
    const res = await client.request<TokenResponse>(query, { offset });
    return res.tokens.tokens;
  } catch (err: any) {
    const shortMessage =
      err?.message?.slice(0, 300)?.replace(/\n/g, ' ') || 'Unknown error';
    console.error(`[Cosmos] Failed at offset ${offset}: ${shortMessage}...`);
    const defResponse: DefaultResponse[]  = [{ owner: {address: "0x0000000000000000000000000000000000000000"}, tokenId: offset.toString(), metadata: null}]
    return defResponse;
  }
}