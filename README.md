# Next.js App Template

An opinionated Next.js starter with testing and code quality tools pre-configured.

## What's included

- **Next.js 16** — App Router, TypeScript, `@/*` path alias
- **Tailwind CSS v4** — CSS-only config (no `tailwind.config.ts`), custom theme in `src/app/globals.css`:
  - Colors: `off-black` (`#111111`), `off-white` (`#e8e8e8`); `<body>` defaults to `bg-off-white text-off-black min-h-screen`
  - CSS reset: `text-wrap: pretty` on paragraphs, `text-wrap: balance` on headings, `overflow-wrap: break-word` on both
  - `<html>`: `antialiased`, `motion-safe:scroll-smooth`, `scroll-pt-header` (tied to `--header-height` CSS var), `text-size-adjust-none`
- **Vitest** — unit/component tests in `__tests__/vitest/`, jsdom environment, React Testing Library
- **Playwright** — e2e + visual regression tests in `__tests__/e2e/`, runs against both dev and production builds, three browsers (Chromium, Firefox, WebKit)
- **ESLint + Prettier** — flat config ESLint with Next.js rules; Prettier pinned to an exact version (no `^`)
- **Context7 MCP server** — live documentation for Next.js, Tailwind CSS, Vitest, and Playwright (via `.mcp.json`)

## Getting started

### Step 1: Initialize the repo
Fork this repo on GitHub, then:

```bash
git clone <your-fork-url>
cd nextjs-template
npm install
npm run setup
npm run dev
```

`npm run setup` prompts for your app's name, description, and author, updates `package.json` (including removing the `setup` script itself), replaces the template's `CLAUDE.md`, and resets the memory bank with a blank starter for your project. Run it once right after cloning.

### Step 2: Agentic coding

After running `npm run setup`, open `memory-bank/projectbrief.md` and fill in your project's name, goals, and requirements. Then ask your AI agent to **initialize the memory bank** — it will generate the remaining files (`productContext.md`, `activeContext.md`, `progress.md`) from your brief, leaving `systemPatterns.md` and `techContext.md` intact (they describe the inherited toolchain).

`npm run setup` creates a `CLAUDE.md` with memory bank instructions for Claude Code. If you use a different AI agent, rename it to match that tool's convention:

| Agent | File |
|-------|------|
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursorrules` |
| Windsurf | `.windsurfrules` |
| GitHub Copilot | `.github/copilot-instructions.md` |
| OpenAI agents | `AGENTS.md` |
| Cline | `.clinerules` |

### Step 3: Editor setup

Install the **Prettier** extension and enable **format on save**.

Prettier is pinned to an exact version (no `^`). To upgrade it, run:

```bash
npm install --save-exact prettier@latest
```

as recommended by the [Prettier docs](https://prettier.io/docs/install).

## Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start dev server |
| `build` | Production build |
| `start` | Serve production build |
| `unit` | Run Vitest unit tests |
| `test` | Run Playwright tests (Chromium, headless) |
| `firefox` | Run Playwright tests (Firefox, headless) |
| `safari` | Run Playwright tests (WebKit, headless) |
| `e2e` | Open Playwright UI |
| `debug` | Run Playwright in debug mode |
| `reg` | Run all tests (Vitest + Playwright) |
| `update` | Re-run last failed Playwright tests and update snapshots |
| `lint` | Run ESLint |
| `format` | Run Prettier (write) |
| `format:check` | Check formatting without writing (CI gate) |

## Environment variables

Running the `setup` script should have copied `.env.local.example` to `.env.local`:

- `APP_ENV` — controls robots/indexing. Set to `"production"` to allow search engine indexing; any other value (`"local"`, `"staging"`) disables indexing.
- `SITE_URL` — canonical URL of your site, used for sitemap generation. Set to your domain in production.

## Visual regression testing

A sample test script is available in `__tests__/e2e/home.spec.ts`. Configuration is already included in `playwright.config.ts`.