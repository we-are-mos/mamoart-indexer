import { decodeBase64 } from "./decodeBase64";

/**
 * 🎯 Fetches and parses NFT metadata from a tokenURI.
 *
 * Handles two types of tokenURIs:
 * 1. Base64-encoded inline JSON (starts with "data:application/json;base64,")
 * 2. HTTP(S) URLs pointing to JSON metadata
 *
 * @param tokenURI - The tokenURI string from the NFT contract
 * @returns Parsed metadata as a JSON object
 */
export async function fetchAndParseMetadata(tokenURI: string): Promise<any> {
  try {
    // Base64-encoded JSON case
    if (tokenURI.startsWith("data:application/json;base64,")) {
      const base64 = tokenURI.split(",")[1];
      const jsonStr = decodeBase64(base64);
      return JSON.parse(jsonStr);
    }

    // Regular HTTP(S) fetch case
    const res = await fetch(tokenURI);
    if (!res.ok) throw new Error("Metadata fetch failed");

    return await res.json();
  } catch (error) {
    console.warn(`Failed to fetch or parse metadata from: ${tokenURI}`);
    return null; // Fallback for error cases
  }
}