# Contributing to corridor-finder-web

The code of conduct, security policy, issue templates and the general contribution guide are shared across the organization (see the [`.github` repository](https://github.com/corridor-finder/.github)).

## Workflow

1. Comment on an open issue to be assigned. Do not start work on an unassigned issue.
2. Fork, branch from `main`, and keep the PR within the issue's scope.
3. Run `pnpm check` before pushing. It runs exactly what CI runs.
4. Open a PR that links the issue (`Closes #123`).

## Standards

- **Never fabricate.** If a value has no source, render "unavailable". Every displayed fact shows its source and freshness.
- **Tests required** for new behaviour (Vitest and Testing Library), plus docs when behaviour or configuration changes.
- **Accessibility:** interactive elements are keyboard-operable and labelled; do not rely on colour alone.
- **Config:** new environment variables go in `src/lib/env.ts` (validated), `.env.example` and the README table. `NEXT_PUBLIC_` values are public.
- No secrets in the repository.

## Tooling constraints

- Keep TypeScript on 6.x for now.
- pnpm 12 fails installs on unapproved dependency build scripts. If a new dependency triggers `ERR_PNPM_IGNORED_BUILDS`, decide deliberately and record it in `pnpm-workspace.yaml` (`allowBuilds`).
