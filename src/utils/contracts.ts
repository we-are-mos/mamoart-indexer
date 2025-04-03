// 🧱 NFT Contract Addresses
const MAMO_CONTRACT: `0x${string}` = "0xbE25A97896b9CE164a314C70520A4df55979a0c6";
const MOOLITIA_CONTRACT: `0x${string}` = "0x981f578baBFbC70989207d7EbF0EFce084b854cd";
const RAZOR_CONTRACT: `0x${string}` = "0x32e4d8f1c4AC038159206C5c2aA535482e4aE5Cd";
const HYBRIDS_CONTRACT: `0x${string}` = "0xc21BF42D441ecD541f23450070717943A24b1D36";
const HABITATS_CONTRACT: `0x${string}` = "0xEA30F63e08a0B01F8BCBE62037Ef810fBDB340Dc";
export const SLOTHS_CONTRACT: string = "stars10n0m58ztlr9wvwkgjuek2m2k0dn5pgrhfw9eahg9p8e5qtvn964suc995j";

// 🔗 All eligible collections for painting
export const ELIGIBLE_NFT_CONTRACTS: `0x${string}`[] = [
  MAMO_CONTRACT,
  MOOLITIA_CONTRACT,
  RAZOR_CONTRACT,
  HYBRIDS_CONTRACT,
  HABITATS_CONTRACT
];

// 🎨 MamoArt Contract Address
export const MAMOART_CONTRACT: `0x${string}` = "0xE8c4B5f422B5B227A76Be53a1b82a8Df2263Fa8E";

// 📜 Minimal ERC721 ABI for fetching metadata
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

// 🖼️ MamoArt ABI for grid and stats interaction
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