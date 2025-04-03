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
} from './db';
import { startWatchingMamoArtGrid } from './listeners/paintGrid';
import { startWatchingCosmosNFTs, startWatchingOnNFTCollections } from './listeners/ownedNFTs';
import { initCosmosNFTs, initOwnedNFTs } from './bootstrap/initOwnedNFTs';
import { initPaintGrids } from './bootstrap/initPaintGrids';
import { getMamoStats } from './api/stats';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Parse ALLOWED_ORIGINS from .env
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map(origin => origin.trim())
  .filter(Boolean);

// Set strict CORS policy
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) {
      // Enable only if explicitly allowed
      if (allowedOrigins.includes('postman')) {
        return callback(null, true);
      }
      return callback(new Error('CORS: Origin missing and not allowed'));
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS: Not allowed by origin policy'));
    }
  }
}));

/**
 * Main startup sequence
 * - Runs initial indexing
 * - Starts real-time listeners
 * - Registers all API routes
 */
async function start() {
  console.log('🔄 Performing initial sync...');

  // Initial data sync from chain
  await initOwnedNFTs();
  await initCosmosNFTs();
  await initPaintGrids();

  console.log('✅ Initialization complete. Starting event watchers...');

  // Start watchers
  startWatchingOnNFTCollections();
  startWatchingMamoArtGrid();
  startWatchingCosmosNFTs();

  /* --------------------
     📡 API ROUTES
  --------------------- */

  // 🔹 Return all painted grids
  app.get('/api/grids', async (_req, res) => {
    const data = await getAllPaintGrids();
    res.json(data);
    return;
  });

  // 🔹 Return one specific grid by ID
  app.get('/api/grid/:gridId', async (req, res) => {
    const id = parseInt(req.params.gridId);
    if (isNaN(id)) {
      res.status(400).json({ error: 'Invalid gridId' });
      return;
    }

    const grid = await getPaintGrid(id);
    res.json(grid);
    return;
  });

  // 🔹 Return all NFTs owned by a wallet
  app.get('/api/owned-by/:address', async (req, res) => {
    const address = req.params.address?.toLowerCase();
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
      res.status(400).json({ error: 'Invalid address' });
      return;
    }

    const data = await getOwnedNFTsByAddress(address);
    res.json(data);
    return;
  });

  // 🔹 Return a specific NFT's owner
  app.get('/api/owned/:contract/:tokenId', async (req, res) => {
    const { contract, tokenId } = req.params;
    const id = parseInt(tokenId);
    if (!/^0x[a-fA-F0-9]{40}$/.test(contract) || isNaN(id)) {
      res.status(400).json({ error: 'Invalid input' });
      return;
    }

    const nft = await getOwnedNFT(contract.toLowerCase(), id);
    res.json(nft);
    return;
  });

  // 🔹 Return total paints and unique users
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
    return;
  });

  // 🔹 Return the last 10 painted grids
  app.get('/api/last-painted', async (_req, res) => {
    const recent = await getLastPaintedGrids();
    res.json(recent);
    return;
  });

  // 🔹 Return all grids painted by an address
  app.get('/api/painted-by/:address', async (req, res) => {
    const address = req.params.address?.toLowerCase();
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
      res.status(400).json({ error: 'Invalid address' });
      return;
    }

    const painted = await getGridsPaintedBy(address);
    res.json(painted);
    return;
  });

  // 🔹 Return the grid a specific NFT is painted on
  app.get('/api/grids/with-nft/:contract/:tokenId', async (req, res) => {
    const { contract, tokenId } = req.params;

    if (!/^0x[a-fA-F0-9]{40}$/.test(contract) || isNaN(Number(tokenId))) {
      res.status(400).json({ error: 'Invalid input' });
      return;
    }

    const grid = await getGridByNFT(contract, Number(tokenId));
    res.json(grid || null);
    return;
  });

  // 🔹 Return a full snapshot of the current grid state
  app.get('/api/snapshot', async (_req, res) => {
    const snapshot = await getGridSnapshot();
    res.json(snapshot);
    return;
  });
}

// 🚀 Start listening
app.listen(port, () => {
  console.log(`🟢 Server running at http://localhost:${port}`);
});

start();