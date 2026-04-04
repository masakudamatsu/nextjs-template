# Tech Context

## Technologies

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Vitest
- Playwright
- ESLint
- Prettier
- Semantic Release

## Development Setup

### Next.js

- `src/app/layout.tsx` — root layout with `<html lang="en">` and `<body>`
- `src/app/page.tsx` — home page
- `tsconfig.json` — `moduleResolution: "bundler"`, path alias `@/*` → `./src/*`
- Scripts: `dev`, `build`, `start`

### Vitest

Config: `vitest.config.mts`. Test files live in `__tests__/vitest/` with `*.{test,spec}.{ts,tsx}` naming.

Key decisions:

- `vite-tsconfig-paths` plugin resolves the `@/*` alias from `tsconfig.json`
- `@vitejs/plugin-react` plugin is required to transform JSX/TSX in test files
- `environment: "jsdom"` simulates a browser environment for React component tests
- `globals: true` enables Jest-like globals (`describe`, `test`, `expect`) without explicit imports
- `moduleResolution` in `tsconfig.json` must be `"bundler"` (not `"node"`) for `@vitejs/plugin-react` types to resolve
- `__tests__/vitest/setup.ts` loads `.env.local` via dotenv before each test file

### Playwright

Config: `playwright.config.ts`. Test files live in `__tests__/e2e/` with `*.spec.{ts,tsx}` naming.

Key decisions:

- All three browsers enabled: Chromium (default for local dev), Firefox, WebKit
- `webServer` is an array of two servers: port 3000 (default env) and port 3001 (`APP_ENV=production`, `NEXT_DIST_DIR=.next-prod`). The production server uses a separate `distDir` to avoid Next.js 16's single-instance lock file conflict (`.next/dev/lock`).
- The production robots test uses `test.use({ baseURL: 'http://localhost:3001' })` inside a `test.describe` block to target the production server.
- `reuseExistingServer: !process.env.CI` reuses running servers locally
- `next.config.ts` sets `turbopack.root` to pin the project root — without it, Turbopack may detect the parent directory's `package-lock.json` as the workspace root and fails to resolve modules (if the repository is cloned into another Node.js project folder)
- `next.config.ts` sets `distDir: process.env.NEXT_DIST_DIR ?? '.next'` to support the two-server Playwright setup; `.next-prod/` is gitignored
- `expect.toHaveScreenshot.stylePath` points to `__tests__/e2e/utils/screenshot.css`, which hides `#devtools-indicator` in all screenshots
- Visual regression thresholds (`maxDiffPixels`, `maxDiffPixelRatio`) are left at the strict defaults (0); relax per test when needed
- `ignoreSnapshots: !!process.env.CI` skips `toHaveScreenshot()` comparisons on CI — snapshots are OS-specific (`-darwin`/`-linux`) so macOS baselines would fail on Linux CI runners; the pre-push hook (`npm run reg`) is the safety net instead
- `npm run update` (`playwright test --last-failed --update-snapshots`) regenerates baselines only for previously-failed tests

### Tailwind CSS

Tailwind v4 — no `tailwind.config.js`; all config is CSS-based.

Key decisions:

- `@tailwindcss/postcss` (not the old `tailwindcss` PostCSS plugin) handles processing; configured in `postcss.config.mjs`
- `src/app/globals.css` is the single CSS entry point: `@import 'tailwindcss'` + `@theme {}` block for custom design tokens
- Installed as dev dependencies (build-time only); no explicit `postcss` package needed — Next.js provides it internally
- Custom colors (`off-black`, `off-white`) defined as CSS custom properties under `@theme` and consumed via utility classes

### ESLint

Config: `eslint.config.mjs` (flat config format, required by Next.js 16+).

Key decisions:

- `eslint-config-next/core-web-vitals` — Next.js + React + React Hooks rules; upgrades CWV-impacting rules from warnings to errors
- `eslint-config-next/typescript` — adds `typescript-eslint/recommended` rules
- `eslint-config-prettier/flat` — disables ESLint formatting rules that conflict with Prettier (must be last)
- `globalIgnores` excludes `.next/`, `out/`, `build/`, `next-env.d.ts`
- `next lint` was removed in Next.js 16; use `npm run lint` (`eslint .`) instead

### Prettier

Config: `.prettierrc` (`semi: false`, `singleQuote: true`, `trailingComma: "all"`). Ignore file: `.prettierignore`.

Key decisions:

- Pinned with `--save-exact` (no `^`) per Prettier's recommendation, to prevent formatting churn across versions
- To upgrade: `npm install --save-dev --save-exact prettier@latest`
- Run on save via editor Prettier extension (format-on-save); no pre-commit hook needed since unsaved files can't be committed
- `npm run format:check` is the CI gate for non-VS Code contributors

### npm scripts

| Script                    | Command                                            | When to use                                     |
| ------------------------- | -------------------------------------------------- | ----------------------------------------------- |
| `npm t`                   | `playwright test --project=chromium`               | Quick headless e2e check (Chromium only)        |
| `npm run e2e`             | `playwright test --ui`                             | TDD / writing e2e tests                         |
| `npm run unit`            | `vitest`                                           | TDD / writing unit tests (watch mode)           |
| `npm run debug`           | `playwright test --debug`                          | Diagnose a failing e2e test                     |
| `npm run firefox`         | `playwright test --project=firefox`                | Target Firefox specifically                     |
| `npm run safari`          | `playwright test --project=webkit`                 | Target WebKit/Safari specifically               |
| `npm run update`          | `playwright test --last-failed --update-snapshots` | Update snapshots after intentional UI changes   |
| `npm run reg`             | → `test:regression`                                | Pre-push full regression suite (all 3 browsers) |
| `npm run test:regression` | `vitest run && playwright test`                    | CI / pre-push                                   |
| `npm run lint`            | `eslint .`                                         | Check for code quality issues                   |
| `npm run format`          | `prettier . --write`                               | Auto-format all files                           |
| `npm run format:check`    | `prettier . --check`                               | CI formatting gate                              |

## Technical Constraints

(To be defined)

## Dependencies

Dev dependencies:

- `tailwindcss`, `@tailwindcss/postcss`
- `vitest`, `@vitejs/plugin-react`, `jsdom`, `@testing-library/react`, `@testing-library/dom`, `@testing-library/user-event`, `vite-tsconfig-paths`, `dotenv`
- `@playwright/test`
- `eslint`, `eslint-config-next`, `eslint-config-prettier`
- `prettier` (exact-pinned)

### Semantic Release

Config: `.releaserc` (JSON). Plugins: `commit-analyzer`, `release-notes-generator`, `github`, `git`.

CI: `.github/workflows/release.yml` — runs on push to `main` via `cycjimmy/semantic-release-action@v4`.

Key decisions:

- Branches: `main` only (configured in `.releaserc`)
- `dry_run: true` set in the workflow action's `with` block — test mode; set to `false` when ready to publish real releases
- `@semantic-release/git` commits back `package.json` with the bumped version and `[skip ci]` to avoid re-triggering the workflow

## MCP Servers

- Context7
