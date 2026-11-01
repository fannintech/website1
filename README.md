# Fannin Technologies Website

Concise managed IT website for Fannin Technologies. The frontend is a Vite + React single-page app. The backend is an Express API that stores contact form submissions in MongoDB.

## Important: IONOS Deploy Now

IONOS Deploy Now **does not run Node.js at runtime**. It builds the React app and deploys the static files.

| Piece | Where it runs |
| --- | --- |
| React frontend | IONOS Deploy Now (static `client/dist`) |
| Express API + MongoDB | A Node.js host (IONOS VPS / Cloud Server, or another Node host) plus MongoDB Atlas or a self-hosted MongoDB instance |

Do not expect the contact form API to run on Deploy Now itself.

## Local setup

### Requirements

- Node.js 20+
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

### 1. Install

```bash
npm run install:all
```

### 2. Environment files

Copy the examples:

```bash
cp .env.example .env
cp client/.env.example client/.env
```

Set at least:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/fannin-technologies
FRONTEND_URL=http://localhost:5173
```

Leave `CONTACT_EMAIL`, `CONTACT_PHONE`, and `CONTACT_ADDRESS` blank until they are verified.

### 3. Start the apps

In one terminal:

```bash
npm run dev:server
```

In another:

```bash
npm run dev:client
```

- Frontend: http://localhost:5173
- API health: http://localhost:5000/api/health

The Vite dev server proxies `/api` to the Express backend.

## MongoDB

Local:

```bash
# Windows with MongoDB installed as a service is enough.
# Or use Atlas and paste the connection string into MONGODB_URI.
```

Atlas:

1. Create a free cluster.
2. Add a database user.
3. Allow the backend host IP (or `0.0.0.0/0` only if you accept that risk).
4. Use the connection string as `MONGODB_URI`.

## Contact form

`POST /api/contact` accepts:

- name, company, email, subject, message (required)
- phone (optional)
- website (honeypot; must stay empty)

The API validates input, applies basic rate limiting, sanitizes fields, and stores a `Contact` document.

## GitHub + IONOS Deploy Now

1. Push this repository to GitHub.
2. In IONOS, create a Deploy Now project and connect the repo.
3. Use these build settings:
   - **Build command:** `npm run build`
   - **Dist folder:** `client/dist`
   - **Node:** 20
4. Add a production frontend env var for the live API:
   - `VITE_API_URL=https://your-api-host.example`
5. Deploy Now generates `.github/workflows/deploy-now.yaml` on first connect.
6. Host the Express server separately and set:
   - `MONGODB_URI`
   - `FRONTEND_URL` to the Deploy Now site URL
   - `PORT`

SPA routing: `client/public/.htaccess` is copied into the build so `/privacy` refreshes do not 404 on Apache.

## Brand

Official logo: `client/public/assets/fannin-technologies-logo-alt.png`

Colors taken from the logo:

- Navy: `#0b1b2b`
- Blue: `#1f6fe5`
- Gray: `#8b93a1`

Typography: Plus Jakarta Sans (headings) and Source Sans 3 (body).
