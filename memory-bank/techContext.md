# Tech Context

## Technologies

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Vitest
- Playwright

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
- `webServer` auto-starts `npm run dev` before tests; `reuseExistingServer: !process.env.CI` reuses a running server locally
- `next.config.ts` sets `turbopack.root` to pin the project root — without it, Turbopack may detect the parent directory's `package-lock.json` as the workspace root and fails to resolve modules (if the repository is cloned into another Node.js project folder)
- `expect.toHaveScreenshot.stylePath` points to `__tests__/e2e/utils/screenshot.css`, which hides `#devtools-indicator` in all screenshots
- Visual regression thresholds (`maxDiffPixels`, `maxDiffPixelRatio`) are left at the strict defaults (0); relax per test when needed
- `ignoreSnapshots: !!process.env.CI` skips `toHaveScreenshot()` comparisons on CI — snapshots are OS-specific (`-darwin`/`-linux`) so macOS baselines would fail on Linux CI runners; the pre-push hook (`npm run reg`) is the safety net instead
- `npm run update` (`playwright test --last-failed --update-snapshots`) regenerates baselines only for previously-failed tests

### npm scripts

| Script | Command | When to use |
|---|---|---|
| `npm t` | `playwright test --project=chromium` | Quick headless e2e check (Chromium only) |
| `npm run e2e` | `playwright test --ui` | TDD / writing e2e tests |
| `npm run unit` | `vitest` | TDD / writing unit tests (watch mode) |
| `npm run debug` | `playwright test --debug` | Diagnose a failing e2e test |
| `npm run firefox` | `playwright test --project=firefox` | Target Firefox specifically |
| `npm run safari` | `playwright test --project=webkit` | Target WebKit/Safari specifically |
| `npm run update` | `playwright test --last-failed --update-snapshots` | Update snapshots after intentional UI changes |
| `npm run reg` | → `test:regression` | Pre-push full regression suite (all 3 browsers) |
| `npm run test:regression` | `vitest run && playwright test` | CI / pre-push |

## Technical Constraints
(To be defined)

## Dependencies

Dev dependencies:
- `tailwindcss`, `@tailwindcss/postcss`
- `vitest`, `@vitejs/plugin-react`, `jsdom`, `@testing-library/react`, `@testing-library/dom`, `@testing-library/user-event`, `vite-tsconfig-paths`, `dotenv`
- `@playwright/test`

## MCP Servers

- Next.js docs
- Tailwind CSS docs
- Vitest docs
- Playwright docs
