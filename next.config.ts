import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // If `nextjs-template` repo is cloned into a folder that also has a package-lock.json, Turbopack's lockfile-based workspace detection may pick the wrong root and fails to resolve modules.
    // (This only surfaces during Playwright tests (not normal npm run dev) because Playwright launches the dev server from outside the project directory.)
    // Pinning the root to this directory fixes it.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
