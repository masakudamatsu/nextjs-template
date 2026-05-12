# Active Context

## Current Work Focus

Template maintenance — the initial setup is complete and the template is publicly available.

## Recent Changes

- Activated Semantic Release (`dry_run: false` in `release.yml`); `setup.js` now restores `dry_run: true` on fork so forked repos start in test mode
- Added Husky pre-commit hook (`.husky/pre-commit`): runs `npx lint-staged` to auto-format staged files with Prettier before every commit; added `lint-staged` dev dependency with config in `package.json`
- Setup script (`npm run setup`) now appends a TDD section to `systemPatterns.md` on fork (step 7); section covers Red/Green/Refactor phases, test type selection, and scope
- Fixed `globals.css`: replaced deprecated `@layer utilities` (nested inside `@layer base`) with top-level `@utility text-size-adjust-none {…}` — Tailwind v4 uses native cascade layers and no longer supports the `@layer utilities` pattern

## Next Steps

(None — template is feature-complete and live)

## Active Decisions

- Prettier pinned with `--save-exact` (no `^`); upgrade with `npm install --save-dev --save-exact prettier@latest`
- Playwright visual regression snapshots skipped on CI (OS-specific); pre-push hook is the safety net
