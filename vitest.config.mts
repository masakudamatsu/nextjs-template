import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(), // Enable path aliasing ("@" for "./src") based on tsconfig.json
    react(), // Transform React JSX syntax for testing React components
  ],
  test: {
    environment: "jsdom", // Simulate a browser environment if needed for some tests
    globals: true, // Use Jest-like globals (describe, test, expect)
    include: ["__tests__/vitest/**/*.{test,spec}.{ts,tsx}"],
    setupFiles: "./__tests__/vitest/setup.ts", // Load environment variables from .env.local
  },
});
