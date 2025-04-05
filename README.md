# 🔎 MamoArt Indexer

![Bun](https://img.shields.io/badge/Runtime-Bun-blueviolet)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-informational)
![License](https://img.shields.io/badge/License-Custom-lightgrey)

**MamoArt Indexer** is a high-performance backend service that indexes NFT ownership and painting activity across chains like **Forma (EVM)** and **Stargaze (Cosmos)**.  
It feeds the core database of the MamoArt platform, powering real-time on-chain visual updates.

---

## 🚀 Features

- 🖼️ **Multi-chain NFT Indexing**  
  Indexes 40,000+ NFTs across EVM (Forma) and Cosmos (Stargaze).

- 🎨 **1,500 Grid Paint Tracking**  
  Tracks painting events tied to NFT metadata with retry + validation support.

- 📡 **Live Blockchain Watchers**  
  Real-time listeners for `Transfer` and `Painted` events with `viem`.

- 🧱 **PostgreSQL + Prisma ORM**  
  Clean schema management with typesafety and reliability.

- 🧪 **Resilient Processing**  
  Uses `p-limit` and `Promise.allSettled` for safe batch DB/RPC handling.

---

## 📦 Tech Stack

- **Bun** Runtime
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Viem** (EVM RPC)
- **GraphQL Request** (Stargaze)
- **Hosted on Render**

---

## 🛠️ Setup

1. **Clone the repo:**

```bash
git clone https://github.com/we-are-mos/mamoart-indexer.git
cd mamoart-indexer
```

2. **Install dependencies:**

```bash
bun install
```

3. **Add your `.env` file:**

```env
DATABASE_URL=your_render_postgres_url_here
PORT=selected_port
```

4. **Generate Prisma Client:**

```bash
bunx prisma generate
```

5. **Push DB schema (only needed if not deployed yet):**

```bash
bunx prisma db push
```

---

## ⚙️ Running the Indexer

Start the full service with:

```bash
bun start
```

This runs `src/index.ts`, which:

- Syncs initial data from all chains
- Starts event watchers
- Exposes the Express API

---

## 🔧 Run Specific Indexers

If you want to run modules individually:

```bash
bun run src/bootstrap/initOwnedNFTs.ts     # EVM NFT ownership
bun run src/bootstrap/initCosmosNFTs.ts    # Stargaze ownership
bun run src/bootstrap/initPaintGrids.ts    # Paint grid status
```

---

## 🐳 Docker (Optional)

> Dockerfile is already included in the project.

Build and run:

```bash
docker build -t mamoart-indexer .
docker run -p 3000:3000 mamoart-indexer
```

---

## 🔒 License

This project is licensed under a [custom license](./LICENSE).  
It is **source-available** for transparency and educational purposes only.

---

## 🌐 Hosting

- **Backend:** Hosted on Render  
- **Database:** Render PostgreSQL (external connection)

---

## 🙋 FAQ

**Q: Is this production ready?**  
Yes. It's already used in production to keep [MamoArt](https://art.mammothos.xyz) in sync with the blockchain.

**Q: Can I fork and use it?**  
No. This code is source-available but **not open-source**. Check the LICENSE file for details.

---

## 📬 Contact

Have questions, ideas, or feedback?  
Reach out at **dev@mammothos.xyz** or open an issue on GitHub.
