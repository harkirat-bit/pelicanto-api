# Pelicanto API

Pelicanto is a transactional email API for product teams: send templated messages, track delivery, and receive webhooks when mail bounces or gets opened.

This repository contains the public API server (`src/`) and our customer-facing documentation (`docs/`). The docs are plain Markdown files that engineers edit alongside the code they describe.

## Running locally

```bash
npm install
cp .env.example .env
npm run dev
```

The server listens on `http://localhost:4100`. Set `PELICANTO_API_KEY` in `.env` to any value for local development.

## Repository layout

- `src/server.js` – Express app and middleware
- `src/routes/` – one file per resource (`messages`, `templates`, `webhooks`)
- `openapi.yaml` – the API contract, kept in sync with the routes
- `docs/` – customer documentation (Markdown)

## Documentation

Customer docs live in [`docs/`](docs/index.md). Edit the Markdown directly and open a pull request; the docs owner for each page is listed in `docs/OWNERS.md`.
