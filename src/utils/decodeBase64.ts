/**
 * 🧩 Decodes a base64-encoded string into UTF-8 text.
 * 
 * This is mainly used for decoding base64-encoded JSON metadata
 * from data URIs (e.g., tokenURI = "data:application/json;base64,...").
 *
 * @param base64 - The base64-encoded string
 * @returns The decoded UTF-8 string
 */
export function decodeBase64(base64: string): string {
  return Buffer.from(base64, "base64").toString("utf-8");
}