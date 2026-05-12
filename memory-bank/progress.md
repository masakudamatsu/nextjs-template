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
- Husky pre-push hook added (`.husky/pre-push`): runs `npm run lint` then `npm run reg` before every push
- Semantic Release activated (`dry_run: false`); `setup.js` restores `dry_run: true` on fork
- Husky pre-commit hook added (`.husky/pre-commit`): runs `npx lint-staged` to auto-format staged files with Prettier; `lint-staged` dev dependency added
- Setup script now injects a TDD section into `systemPatterns.md` on fork
- CSS fix: `@layer utilities` inside `@layer base` replaced with top-level `@utility text-size-adjust-none`

## What's Left to Build

(None — template is feature-complete)

## Current Status

Template published, publicly available, and fully operational.

## Known Issues

(None yet)
