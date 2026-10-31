# SWAPY API

> **Implementation status: NestJS starter scaffold.** This service does not yet implement SWAPY marketplace features. Its current root endpoint returns `Hello World!`; product behavior and API scope remain gated by the [product blueprint](../../SWAPY-PRODUCT-BLUEPRINT.md) and its open decisions.

## Current setup

This app uses NestJS and TypeScript. From this directory:

```bash
npm ci
npm run start:dev
```

The development server listens on the configured `PORT` or port `3000`. The current controller exposes `GET /` and returns the starter response from `src/app.service.ts`. The web app also defaults to port `3000`, so set the API `PORT` to a different value when running both locally.

## Available scripts

| Command | Purpose |
|---|---|
| `npm run start:dev` | Run the API in watch mode |
| `npm run build` | Compile the API |
| `npm run lint` | Lint `src/` and `test/` |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |

## Product development gate

Do not add marketplace endpoints, transaction rules, payment handling, authentication, or location-specific behavior based only on the concept notes. First record an approved MVP decision and its supporting evidence. Follow the [Strategy Validation Plan](../../SWAPY-STRATEGY-VALIDATION-PLAN.md) and keep implementation aligned with the [current product blueprint](../../SWAPY-PRODUCT-BLUEPRINT.md).
