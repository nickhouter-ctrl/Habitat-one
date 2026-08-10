// Vitest-configuratie voor de planner-unittests.
//
// Bewust in lib/planner/ geplaatst (niet in de repo-root): de planner is het
// enige geteste domein en dit bestand valt zo binnen het eigenaarschap van de
// planner-module. Draaien via `npm test`.

import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const repoRoot = fileURLToPath(new URL("../..", import.meta.url));

export default defineConfig({
  resolve: {
    // Zelfde alias als tsconfig.json ("@/*" → repo-root).
    alias: { "@": repoRoot },
  },
  test: {
    dir: repoRoot,
    include: ["lib/planner/**/*.test.{ts,tsx}"],
    environment: "node",
  },
});
