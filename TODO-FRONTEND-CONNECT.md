# Frontend Backend Connect

**Goal:** Form submit → backend save.

**Steps:**
- [ ] 1. Enable CORS in BACKEND/src/server.js
- [ ] 2. Create FRONTEND/src/libs/axios.js (baseURL backend)
- [ ] 3. Fix BookingsForm.jsx: endpoint, typos (agreedToTerms), gender value space
- [ ] 4. Restart servers
- [ ] 5. Test form → backend log + DB

**Changes Explained:**
- CORS: Allows frontend request to backend (prevents browser block).
- axios.js: Reusable API client with backend URL.
- Endpoint: /book → /api/v1/tattoohub (your customers route).
- Typos: agreed → agreedToTerms everywhere.
- Gender: 'prefer-not-to-say' → 'prefer not to say' (schema enum).
