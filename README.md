# corridor-finder-web

Web app for **Corridor Finder**: pick a sending and a receiving country and see which Stellar anchors, assets and payment rails connect them, with the source and age of every fact.

> Status: foundation only. The app builds, is tested and shows a landing page. Corridor search is being built as tracked issues. No corridor data is displayed yet.

**Hard rule:** the UI never invents data. Fees, limits, speed, routes and availability are shown only when the API returns them with a source and a date. Anything else renders as **unavailable**.

## Repositories

| Repo                                                                                      | Role                                        |
| ----------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`corridor-finder`](https://github.com/corridor-finder/corridor-finder)                   | Product, architecture, roadmap              |
| [`corridor-finder-registry`](https://github.com/corridor-finder/corridor-finder-registry) | Sourced anchor data and schema              |
| [`corridor-finder-api`](https://github.com/corridor-finder/corridor-finder-api)           | Verification, corridor resolution, REST API |
| **[`corridor-finder-web`](https://github.com/corridor-finder/corridor-finder-web)**       | This repo                                   |

The web app talks only to the API, never to anchors or the registry directly.

## Quick start

Requires Node 22 (`nvm use`) and pnpm (`corepack enable`).

```bash
pnpm install
pnpm dev          # http://localhost:3001
```

The dev server uses port **3001** so it can run beside the API, which defaults to 3000. To use the API, start it from its own repository (`pnpm start:dev`).

## Environment variables

| Variable              | Default                 | Purpose                           |
| --------------------- | ----------------------- | --------------------------------- |
| `NEXT_PUBLIC_API_URL` | `http://localhost:3000` | Base URL of `corridor-finder-api` |

Copy `.env.example` to `.env.local` to change it. Variables starting with `NEXT_PUBLIC_` are visible in the browser, so never put secrets in them. Values are validated at startup in `src/lib/env.ts`.

## Scripts

| Command                     | What it does                                                   |
| --------------------------- | -------------------------------------------------------------- |
| `pnpm check`                | Everything CI runs: lint, typecheck, format check, test, build |
| `pnpm test`                 | Vitest with Testing Library                                    |
| `pnpm lint` / `pnpm format` | ESLint / Prettier                                              |
| `pnpm build`                | Production build                                               |

## Stack

Next.js (App Router) · React · TypeScript 6 · Tailwind CSS 4 · Vitest · ESLint + Prettier · pnpm.
TypeScript is pinned to 6.x until the lint and test tooling supports 7.x.

## Known gaps

- The API does not enable CORS yet. Browser requests from this app to the API need that change first; it is tracked with the API endpoints work.
- No end-to-end tests yet; planned.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md). Licensed under [Apache-2.0](LICENSE).
