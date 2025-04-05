import { decodeBase64 } from "./decodeBase64";

/**
 * 📦 Checks whether a given tokenURI is an inline base64-encoded JSON string.
 *
 * Used to differentiate between data URIs and remote metadata URLs.
 *
 * @param uri - The tokenURI to inspect
 * @returns True if the URI is base64-encoded metadata, false otherwise
 */
function isBase64URI(uri: string): boolean {
  return uri.startsWith("data:application/json;base64,");
}

/**
 * 🧠 Fetches and parses NFT metadata from a given tokenURI.
 *
 * Handles both:
 * 1. Base64-encoded inline metadata (commonly used for on-chain NFTs)
 * 2. External IPFS or HTTP(S) links pointing to JSON metadata
 *
 * Automatically replaces `ipfs://` URIs with a public gateway.
 *
 * @param tokenURI - The URI string from the NFT contract
 * @returns Parsed metadata object, or null if fetch/parse fails
 */
export async function fetchAndParseMetadata(
  tokenURI: string
): Promise<Record<string, any> | null> {
  try {
    // 🧾 Inline base64-encoded JSON metadata
    if (isBase64URI(tokenURI)) {
      const base64 = tokenURI.split(",")[1];
      const jsonStr = decodeBase64(base64);
      return JSON.parse(jsonStr);
    }

    // 🌐 External metadata URL (IPFS or HTTP)
    tokenURI = tokenURI.replace(/^ipfs:\/\//, "https://ipfs.io/ipfs/");
    const res = await fetch(tokenURI);

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    // 🧪 Attempt to parse as JSON
    try {
      return await res.json();
    } catch (jsonErr: any) {
      console.warn(`Invalid JSON from ${tokenURI}:`, jsonErr.message);
      return null;
    }
  } catch (error: any) {
    console.warn(`Failed to fetch/parse metadata from ${tokenURI}:`, error.message);
    return null;
  }
}