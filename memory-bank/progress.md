# Progress

## What Works

- Project structure created
- Memory Bank initialized
- Next.js scaffolded (App Router, TypeScript)
- Vitest installed and configured
- Playwright installed and configured
- MCP servers configured (Next.js, Tailwind CSS, Vitest, Playwright docs via Context7)
- ESLint installed and configured (flat config)
- Prettier installed and configured (exact-pinned)
- Metadata and robots implemented (`page.tsx`, `layout.tsx`) with Playwright tests
- Sitemap (`sitemap.ts`) and 404 page (`not-found.tsx`) implemented with Playwright e2e tests
- Tailwind CSS v4 installed and configured; default body/html styles set
- README.md written (Getting Started, Agentic Coding, Scripts, Environment Variables)
- `npm run setup` script added — updates `package.json`, copies `.env.local.example`, resets memory bank, removes itself
- Semantic Release configured (dry-run mode)
- Published as public GitHub template repository (`github.com/masakudamatsu/nextjs-template`); "Template repository" enabled
- MIT `LICENSE` added
- GitHub Actions upgraded to Node.js 24 (`actions/checkout@v6`, `actions/setup-node@v6`, `cycjimmy/semantic-release-action@v6`)

## What's Left to Build

- Husky pre-push hook (`npm run lint && npm run reg`)
- Activate Semantic Release (`dry_run: false`)

## Current Status

Template published and publicly available.

## Known Issues

(None yet)
