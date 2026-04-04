# Next.js App Template

An opinionated Next.js starter with testing and code quality tools pre-configured.

## What's included

- **Next.js 16** — App Router, TypeScript, `@/*` path alias
- **Tailwind CSS v4** — CSS-only config (no `tailwind.config.ts`), custom theme in `src/app/globals.css`
- **Vitest** — unit/component tests in `__tests__/vitest/`, jsdom environment, React Testing Library
- **Playwright** — e2e + visual regression tests in `__tests__/e2e/`, runs against both dev and production builds, three browsers (Chromium, Firefox, WebKit)
- **ESLint + Prettier** — flat config ESLint with Next.js rules; Prettier pinned to an exact version (no `^`)
- **Context7 MCP server** — live documentation for Next.js, Tailwind CSS, Vitest, and Playwright (via `.mcp.json`)

## Getting started

Fork this repo on GitHub, then:

```bash
git clone <your-fork-url>
cd nextjs-template
npm install
npm run setup
npm run dev
```

`npm run setup` replaces the template's `CLAUDE.md` and `memory-bank/` with blank starters for your project. Run it once right after cloning.

## Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start dev server |
| `build` | Production build |
| `start` | Serve production build |
| `unit` | Run Vitest unit tests |
| `test` | Run Playwright tests (Chromium, headless) |
| `e2e` | Open Playwright UI |
| `debug` | Run Playwright in debug mode |
| `reg` | Run all tests (Vitest + Playwright) |
| `update` | Re-run last failed Playwright tests and update snapshots |
| `lint` | Run ESLint |
| `format` | Run Prettier (write) |

## Editor setup

Install the **Prettier** extension and enable **format on save**.

Prettier is pinned to an exact version (no `^`). To upgrade it, run:

```bash
npm install --save-exact prettier@latest
```

as recommended by the [Prettier docs](https://prettier.io/docs/install).

## Environment variables

Running the `setup` script should have copied `.env.local.example` to `.env.local`:

- `APP_ENV` — controls robots/indexing. Set to `"production"` to allow search engine indexing; any other value (`"local"`, `"staging"`) disables indexing.
- `SITE_URL` — canonical URL of your site, used for sitemap generation. Set to your domain in production.
