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
