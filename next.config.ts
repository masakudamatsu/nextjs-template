import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  // Next.js 16 writes a lock file to `.next/dev/lock` to detect duplicate dev server instances.
  // Playwright's production webServer (port 3001) runs alongside the default dev server (port 3000),
  // so they must use separate build directories to avoid lock file conflicts.
  // Setting NEXT_DIST_DIR=.next-prod for the production webServer keeps the two instances isolated.
  distDir: process.env.NEXT_DIST_DIR ?? '.next',
  turbopack: {
    // If `nextjs-template` repo is cloned into a folder that also has a package-lock.json, Turbopack's lockfile-based workspace detection may pick the wrong root and fails to resolve modules.
    // (This only surfaces during Playwright tests (not normal npm run dev) because Playwright launches the dev server from outside the project directory.)
    // Pinning the root to this directory fixes it.
    root: path.resolve(__dirname),
  },
}

export default nextConfig
