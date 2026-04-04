# System Patterns

## Architecture

Next.js App Router — file-system routing under `app/`, server and client components colocated.

## Key Technical Decisions

- **App Router over Pages Router** — modern Next.js default; supports React Server Components
- **Vitest over Jest** — faster, native ESM support, compatible with Vite-based tooling
- **Tailwind CSS** — utility-first styling; no CSS Modules or styled-components in the base template

## Design Patterns

### Metadata

- **Page-level metadata** (`title`, `description`) — export a `metadata` const from `src/app/page.tsx` (and future page files). Values are sourced from `src/app/lib/metadata.json` so they stay in sync with Playwright tests.
- **Site-wide metadata** (`robots`) — export a `metadata` const from `src/app/layout.tsx`. Robots defaults to `{ index: false, follow: false }` in all non-production environments; `undefined` (allow indexing) when `APP_ENV=production`.
- This separation follows Google's recommendation: each page has its own title/description, while robots is a global setting.
- **Sitemap** — `src/app/sitemap.ts` generates `/sitemap.xml`. Pages are listed in a `PAGES = ['/']` array (path strings with leading slash); add e.g. `'/about'` to include new pages. URL construction uses `siteUrl` directly for `'/'` to avoid a trailing slash; other pages append the path. `SITE_URL` env var is the base (`http://localhost:3000` in `.env.local`; `http://localhost:3001` injected by Playwright for the production server).
- **404 page** — `src/app/not-found.tsx` renders for any unmatched route. Contains an `<h1>`, a description paragraph, and a `<Link href="/">Return Home</Link>`.

### CSS / Tailwind

- **Entry point** — `src/app/globals.css` imported in `src/app/layout.tsx`. Contains `@import 'tailwindcss'` and any `@theme` overrides.
- **Custom theme colors** — defined with CSS variables in `@theme {}` block in `globals.css`. Current tokens: `off-black` (`#111111`), `off-white` (`#e8e8e8`). Use these via Tailwind classes (`text-off-black`, `bg-off-white`, etc.).
- **Default layout styles** — `<html>` has `antialiased motion-safe:scroll-smooth scroll-pt-header text-size-adjust-none`; `<body>` has `bg-off-white min-h-screen text-off-black` (off-white background covering the full viewport height, off-black text).
- **CSS Resets** (`globals.css` `@layer base`) — applied globally:
  - *Text wrapping*: `address`, `figcaption`, `p` get `overflow-wrap: break-word` + `text-wrap: pretty` (avoids orphans). `h1`–`h6` get `overflow-wrap: break-word` + `text-wrap: balance` (avoids sparse last lines in headings).
  - *iPhone landscape text-size*: `.text-size-adjust-none` utility (all three vendor-prefix variants) is defined and applied to `<html>` in `layout.tsx`, preventing auto text-size enlargement when iPhone rotates to landscape.
- **Smooth scroll** — `motion-safe:scroll-smooth` on `<html>` (`layout.tsx`). Respects `prefers-reduced-motion`. Helps users maintain spatial memory when navigating via anchor links.
- **Scroll padding for sticky header** — `--header-height: 0` on `:root`; exposed as `--spacing-header` in `@theme` → Tailwind class `scroll-pt-header` applied to `<html>`. When adding a sticky/fixed header, update `--header-height` to the header's actual height so anchor-linked sections aren't hidden beneath it.
- **No `tailwind.config.js`** — Tailwind v4 uses CSS-only config; all customization lives in `globals.css`.
- **PostCSS** — `postcss.config.mjs` uses `@tailwindcss/postcss` plugin (the v4 integration; not the old `tailwindcss` plugin).

## Component Relationships

(To be defined as the template develops)
