# Swapy

Marketplace web app — Next.js frontend, NestJS API, PostgreSQL + PostGIS.

## Prerequisites

- Node.js 26 (see `.nvmrc`) and npm 11+
- Docker Desktop

## First-time setup

```bash
docker compose up -d
npm install
npm run db:migrate
```

Create your local env files:

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
```

`apps/api/.env` must match the credentials in `compose.yaml` (`POSTGRES_PASSWORD`).

## Run

```bash
npm run dev
```

- Web: http://localhost:3000
- API: http://localhost:3001/api
- Health: http://localhost:3001/api/health

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start API + web together |
| `npm run dev:api` / `npm run dev:web` | Start one app |
| `npm run build` | Build both apps |
| `npm run lint` | Lint both apps |
| `npm test` | API unit tests |
| `npm run db:generate` | Generate a migration from `schema.ts` |
| `npm run db:migrate` | Apply pending migrations |
| `npm run db:studio` | Open Drizzle Studio |
| `npm run db:check` | Check migration consistency |

## Structure

```
apps/web                  Next.js app (App Router, Tailwind)
apps/api                  NestJS REST API
  src/db/schema.ts        Drizzle schema (source of truth)
  drizzle/                Generated SQL migrations
docker/postgres/init/     DB init scripts (PostGIS extension)
docs/                     Product and platform documentation
compose.yaml              PostGIS database
```

## Database

Postgres 17 + PostGIS runs in Docker with the named volume `swapy-pgdata`.

Change the schema in `apps/api/src/db/schema.ts`, then:

```bash
npm run db:generate
npm run db:migrate
```

Reset the database completely:

```bash
docker compose down -v
docker compose up -d
npm run db:migrate
```

Never commit `.env` files.