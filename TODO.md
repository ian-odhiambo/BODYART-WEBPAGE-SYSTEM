# Render Deployment Fix - TODO

## Status: 🚀 In Progress

### 1. [✅] Update root package.json
   - Add `install` script: `npm ci --prefix FRONTEND && npm ci --prefix BACKEND`
   - Add `postinstall`: `npm run build --prefix FRONTEND`
   - Update `start`: `npm run start --prefix BACKEND`

### 2. [✅] Create/update README.md with Render instructions

### 3. [ ] Commit & push changes

### 4. [ ] Render config
   - Service: Web Service
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add env vars (MONGO_URI, Redis if used)

### 5. [ ] Test deployment

**Next action:** Edit package.json
