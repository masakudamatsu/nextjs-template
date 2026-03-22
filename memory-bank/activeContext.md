# Active Context

## Current Work Focus

Initial project setup.

## Recent Changes

- Scaffolded Next.js with App Router and TypeScript
- Installed and configured Vitest
- Installed and configured Playwright
- Configured MCP servers (Next.js, Tailwind CSS, Vitest, Playwright docs via Context7)
- Installed and configured ESLint (flat config: `core-web-vitals` + `typescript` + `prettier`) and Prettier (exact-pinned)
- Added metadata and robots tests (Playwright); implemented metadata in `page.tsx` and `layout.tsx`
- Added `sitemap.ts` (generates `/sitemap.xml` via `SITE_URL` env var + `PAGES` array) and `not-found.tsx` (custom 404 page) with Playwright e2e tests

## Next Steps

- Install and configure Tailwind CSS
- Write README.md (including editor setup: install Prettier extension + format-on-save)
- Publish as a public GitHub repository
- Install Husky to enforce `npm run lint && npm run reg` as a pre-push hook (blocked until GitHub repo is set up)

## Active Decisions

- Prettier pinned with `--save-exact` (no `^`); upgrade with `npm install --save-dev --save-exact prettier@latest`
- Playwright visual regression snapshots skipped on CI (OS-specific); pre-push hook is the safety net
