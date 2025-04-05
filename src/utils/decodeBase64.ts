/**
 * 🧩 Decodes a base64-encoded string into a UTF-8 string.
 *
 * Commonly used to decode base64-encoded JSON metadata
 * embedded in tokenURIs (e.g., "data:application/json;base64,...").
 *
 * @param base64 - A base64-encoded string
 * @returns The decoded UTF-8 string
 */
export function decodeBase64(base64: string): string {
  return Buffer.from(base64, "base64").toString("utf-8");
}