import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {
  getAllPaintGrids,
  getOwnedNFT,
  getOwnedNFTsByAddress,
  getPaintGrid,
  getLastPaintedGrids,
  getGridsPaintedBy,
  getGridByNFT,
  getGridSnapshot,
} from './services/db';
import { startWatchingMamoArtGrid } from './listeners/paintGrid';
import { startWatchingCosmosNFTs, startWatchingOnNFTCollections } from './listeners/ownedNFTs';
import { initCosmosNFTs, initOwnedNFTs } from './bootstrap/initOwnedNFTs';
import { initPaintGrids } from './bootstrap/initPaintGrids';
import { getMamoStats } from './api/stats';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

/**
 * 🔁 Application startup sequence
 *
 * 1. Initializes owned NFTs, Cosmos NFTs, and painted grid data.
 * 2. Starts watching contract events in real-time.
 * 3. Registers all API routes for frontend usage.
 */
async function start() {
  try {
    console.log('🔄 Performing initial sync...');
    
    // Initial bootstrapping from on-chain data
    await initOwnedNFTs();
    await initCosmosNFTs();
    await initPaintGrids();
    
    console.log('✅ Initialization complete. Starting event watchers...');

    // Begin listening to on-chain events for live updates
    startWatchingOnNFTCollections();
    startWatchingMamoArtGrid();
    startWatchingCosmosNFTs();

  } catch (err) {
    console.error('🔥 Startup failed:', err);
    process.exit(1); // Gracefully exit if initialization fails
  }

  /* -------------------------------
     📡 Public API Endpoints (REST)
  -------------------------------- */

  // Get all painted grid data
  app.get('/api/grids', async (_req, res) => {
    const data = await getAllPaintGrids();
    res.json(data);
  });

  // Get a single grid by grid ID
  app.get('/api/grid/:gridId', async (req, res) => {
    const id = parseInt(req.params.gridId);
    if (isNaN(id)) {
      res.status(400).json({ error: 'Invalid gridId' });
      return;
    }

    const grid = await getPaintGrid(id);
    res.json(grid);
  });

  // Get all NFTs owned by a given wallet address
  app.get('/api/owned-by/:address', async (req, res) => {
    const address = req.params.address?.toLowerCase();
    const data = await getOwnedNFTsByAddress(address);
    res.json(data);
  });

  // Get the owner of a specific NFT by contract + tokenId
  app.get('/api/owned/:contract/:tokenId', async (req, res) => {
    const { contract, tokenId } = req.params;
    const id = parseInt(tokenId);

    const nft = await getOwnedNFT(contract.toLowerCase(), id);
    res.json(nft);
  });

  // Get total paints + total unique users (stats)
  app.get('/api/stats', async (_req, res) => {
    try {
      const stats = await getMamoStats();
      res.json({
        totalPaints: Number(stats.totalPaints),
        totalUniqueUsers: Number(stats.totalUniqueUsers),
      });
    } catch (err) {
      console.error('Failed to fetch stats:', err);
      res.status(500).json({ error: 'Failed to fetch stats' });
    }
  });

  // Get the last 10 most recently painted grids
  app.get('/api/last-painted', async (_req, res) => {
    const recent = await getLastPaintedGrids();
    res.json(recent);
  });

  // Get all grids painted by a specific wallet
  app.get('/api/painted-by/:address', async (req, res) => {
    const address = req.params.address?.toLowerCase();
    const painted = await getGridsPaintedBy(address);
    res.json(painted);
  });

  // Get the grid a specific NFT is currently placed on
  app.get('/api/grids/with-nft/:contract/:tokenId', async (req, res) => {
    const { contract, tokenId } = req.params;
    const grid = await getGridByNFT(contract, Number(tokenId));
    res.json(grid || null);
  });

  // Get a full snapshot of the grid state with timestamp
  app.get('/api/snapshot', async (_req, res) => {
    const snapshot = await getGridSnapshot();
    res.json(snapshot);
  });
}

// 🚀 Launch the Express server
app.listen(port, () => {
  console.log(`🟢 Server running at http://localhost:${port}`);
});

// Kick off the app
start();