# Project Brief

## Overview
Building a [type of application] that will [main purpose].

## Core Features
- Feature 1
- Feature 2
- Feature 3

## Target Users
[Describe who will use your application]

## Technical Preferences (optional)
- Any specific technologies you want to use
- Any specific requirements or constraints

---

## Template Setup

This project was bootstrapped from [nextjs-template](https://github.com/masakudamatsu/nextjs-template). The toolchain is pre-configured — do not change the following unless intentional.

### Stack

- **Next.js 16** — App Router, TypeScript, path alias `@/*` → `./src/*`
- **Tailwind CSS v4** — CSS-only config via `src/app/globals.css`; no `tailwind.config.js`
- **Vitest** — unit/component tests in `__tests__/vitest/`; jsdom environment; React Testing Library
- **Playwright** — e2e + visual regression in `__tests__/e2e/`; runs against dev (port 3000) and production (port 3001) builds; Chromium, Firefox, WebKit
- **ESLint + Prettier** — flat config ESLint; Prettier pinned to an exact version (no `^`)
- **Context7 MCP** — live docs for Next.js, Tailwind CSS, Vitest, Playwright (via `.mcp.json`)

### Key File Locations

| File | Role |
|------|------|
| `src/app/layout.tsx` | Root layout — `<html>`, `<body>`, site-wide metadata (robots) |
| `src/app/page.tsx` | Home page — page-level metadata (`title`, `description`) |
| `src/app/globals.css` | Tailwind entry point — `@import 'tailwindcss'` + `@theme {}` custom tokens |
| `src/app/sitemap.ts` | Generates `/sitemap.xml`; add new pages to the `PAGES` array |
| `src/app/not-found.tsx` | Custom 404 page |
| `src/app/lib/metadata.json` | Shared title/description values (keeps page code and tests in sync) |

### Design Patterns

- **Metadata** — page-level `title`/`description` from `metadata.json`; site-wide `robots` from `layout.tsx` (disabled unless `APP_ENV=production`)
- **Tailwind custom colors** — `off-black` (`#111111`) and `off-white` (`#e8e8e8`) defined in `@theme`; use as `text-off-black`, `bg-off-white`, for example
- **Playwright dual servers** — production robots tests use `test.use({ baseURL: 'http://localhost:3001' })` to target port 3001

### npm Scripts

| Script | Use |
|--------|-----|
| `npm run dev` | Start dev server |
| `npm run unit` | Vitest watch mode (TDD) |
| `npm run e2e` | Playwright UI (TDD) |
| `npm test` | Playwright Chromium headless |
| `npm run reg` | Full regression — Vitest + all three browsers |
| `npm run lint` / `npm run format` | ESLint / Prettier |