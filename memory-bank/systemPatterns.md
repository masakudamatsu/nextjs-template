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

## Component Relationships

(To be defined as the template develops)
