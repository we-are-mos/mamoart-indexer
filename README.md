# 🔎 MamoArt Indexer

![Bun](https://img.shields.io/badge/Runtime-Bun-blueviolet)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-informational)
![License](https://img.shields.io/badge/License-Custom-lightgrey)

MamoArt Indexer is a high-performance backend service that indexes NFT ownership and painting activity across supported chains like Forma (EVM) and Stargaze (Cosmos).  
It feeds the core database of the MamoArt platform, ensuring real-time accuracy for all on-chain visual updates.

---

## 🚀 Features

- 🖼️ **NFT Ownership Indexing**  
  Indexes 40,000+ NFTs from multiple EVM collections and Stargaze (Cosmos) into PostgreSQL.

- 🎨 **Paint Grid Tracking**  
  Tracks painting actions across 1,500 fixed grid cells, tied to NFT metadata.

- 📡 **Event Watchers**  
  Real-time `Transfer` and `Painted` event listeners to keep the database synced.

- 🧪 **Resilient Batch Processing**  
  Uses `Promise.allSettled` + `p-limit` for safe large-scale RPC and DB operations.

---

## 📦 Tech Stack

- **Node.js + Bun**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Viem** for EVM RPC
- **GraphQL** for Stargaze
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
ALLOWED_ORIGINS=https://yourfrontenddomain.xyz,https://optionallocalhostsupport:3000
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

## ⚙️ Usage

To run all initial indexing + event watchers:

```bash
bun run src/index.ts
```

Or if you're using the script from `package.json`, simply:

```bash
bun start
```

Or run specific parts manually:

```bash
bun run src/init/initOwnedNFTs.ts         # EVM NFTs
bun run src/init/initCosmosNFTs.ts        # Cosmos NFTs
bun run src/init/initPaintGrids.ts        # Paint Grid
```

---

## 🐳 Docker (optional)

You can deploy this project using Docker.

Ready-to-use files are already included in the repository:

- [`Dockerfile`](./Dockerfile)
- [`.dockerignore`](./.dockerignore)

Simply build and run:

```bash
docker build -t mamoart-indexer .
docker run -p 3000:3000 mamoart-indexer

---

## 🔒 License

This project is licensed under a [custom license](./LICENSE).  
It is **source-available** for transparency and educational purposes only.

---

## 🌐 Hosting

- **Backend:** Render
- **PostgreSQL:** Render PostgreSQL (external connection string required)

---

## 🙋 FAQ

**Q: Is this production ready?**  
Yes. It's already used in production to keep [MamoArt](https://art.mammothos.xyz) in sync.

**Q: Can I reuse this code for my own project?**  
No. This is a source-available repo, not open source. See the license section above.

---

## 📬 Contact

Want to report a bug or contribute ideas?  
Open an issue or reach out at dev@mammothos.xyz
