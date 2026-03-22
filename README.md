# Kanaiza Tattoo Webpage System

## Fullstack Monorepo: React (Vite) Frontend + Express Backend

### Local Development
```bash
npm install  # Installs FRONTEND & BACKEND deps + builds frontend
npm start    # Starts backend (serves frontend dist/ + API)
```
- Frontend: `http://localhost:5173` (dev: cd FRONTEND && npm run dev)
- Backend/API: `http://localhost:5001/api/v1/tattoohub`

### Deploy to Render.com (Web Service)
1. Connect GitHub repo.
2. **Service Type:** Web Service
3. **Build Command:** `npm install`
4. **Start Command:** `npm start`
5. **Environment Variables:**
   - `MONGO_URI` (required: your MongoDB connection string)
   - `UPSTASH_REDIS_REST_URL` (optional, for rate limiting)
   - `UPSTASH_REDIS_REST_TOKEN` (optional)

**Deploy Flow:**
- `npm install` → FRONTEND/BACKEND deps + `vite build` (dist/)
- `npm start` → Backend serves dist/ + API routes

### Project Structure
```
├── FRONTEND/     # React + Vite + Tailwind
├── BACKEND/      # Express API + serves static dist/
└── package.json  # Monorepo scripts
```

### Troubleshooting
- Build fails? Ensure package-lock.json committed.
- Static assets? Served from `/src/assets` and dist/.


