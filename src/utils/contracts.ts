/* ============================================================================
 📌 ADDRESS CONSTANTS
============================================================================ */

/**
 * Used to represent empty ownership or placeholder values.
 */
export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

/**
 * Placeholder address used by MamoArt to indicate a Cosmos NFT (Celestine Sloth).
 */
export const FAKE_SLOTH_ADDRESS = "0xce1e5713ce1e5713ce1e5713ce1e5713ce1e5713";

/* ============================================================================
 🎨 MAMOART CONTRACT
============================================================================ */

/**
 * Main grid-painting contract for the MamoArt canvas.
 */
export const MAMOART_CONTRACT: `0x${string}` = "0xE8c4B5f422B5B227A76Be53a1b82a8Df2263Fa8E";

/**
 * Minimal ABI to interact with the MamoArt grid and stat functions.
 */
export const mamoArtABI = [
  {
    inputs: [],
    name: "getAllGrids",
    outputs: [
      {
        components: [
          { internalType: "address", name: "nftAddress", type: "address" },
          { internalType: "uint256", name: "tokenId", type: "uint256" },
        ],
        internalType: "struct MOSMamoArt.Grid[]",
        name: "all",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPaints",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalUniqueUsers",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

/* ============================================================================
 🧱 EVM NFT COLLECTIONS (Eligible for Painting)
============================================================================ */

/**
 * EVM NFT contract addresses eligible for grid painting.
 */
export const MAMO_CONTRACT: `0x${string}` = "0xbE25A97896b9CE164a314C70520A4df55979a0c6";
export const MOOLITIA_CONTRACT: `0x${string}` = "0x981f578baBFbC70989207d7EbF0EFce084b854cd";
export const RAZOR_CONTRACT: `0x${string}` = "0x32e4d8f1c4AC038159206C5c2aA535482e4aE5Cd";
export const HYBRIDS_CONTRACT: `0x${string}` = "0xc21BF42D441ecD541f23450070717943A24b1D36";
export const HABITATS_CONTRACT: `0x${string}` = "0xEA30F63e08a0B01F8BCBE62037Ef810fBDB340Dc";

/**
 * All eligible EVM NFT collections for painting (ordered).
 */
export const ELIGIBLE_NFT_CONTRACTS: `0x${string}`[] = [
  MAMO_CONTRACT,
  MOOLITIA_CONTRACT,
  RAZOR_CONTRACT,
  HYBRIDS_CONTRACT,
  HABITATS_CONTRACT,
];

/**
 * Supply numbers (must align by index with ELIGIBLE_NFT_CONTRACTS).
 */
export const ELIGIBLE_NFT_SUPPLIES = [9999, 4999, 7124, 300, 15000];

/* ============================================================================
 🦥 COSMOS NFT COLLECTION (Celestine Sloths)
============================================================================ */

/**
 * Contract address for Celestine Sloths collection on Stargaze.
 */
export const SLOTHS_CONTRACT: string =
  "stars10n0m58ztlr9wvwkgjuek2m2k0dn5pgrhfw9eahg9p8e5qtvn964suc995j";

/**
 * Total number of tokens in the Celestine Sloths collection.
 */
export const SLOTH_SUPPLY = 2500;

/* ============================================================================
 🧾 MINIMAL ERC721 ABI
============================================================================ */

/**
 * Minimal ERC721 ABI for fetching metadata and ownership.
 * Used across all EVM NFT collections.
 */
export const erc721ABI = [
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];