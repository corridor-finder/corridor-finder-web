# Web architecture

```text
src/app/        Next.js App Router routes and layout
src/lib/        Framework-free helpers (env validation, API client later)
test/           Test setup
```

- All data comes from `corridor-finder-api`. The API client will be generated from its OpenAPI spec.
- Server and client code both read `NEXT_PUBLIC_API_URL` through `src/lib/env.ts`.
- Components render sourced facts with their source and age. Missing facts render as "unavailable".
- Product context and the full system diagram live in the [hub repository](https://github.com/corridor-finder/corridor-finder).
