// Vitest-configuratie voor de unittests onder lib/.
//
// Bewust in lib/planner/ geplaatst (niet in de repo-root): de planner is het
// zwaartepunt van de tests en dit bestand valt zo binnen het eigenaarschap van
// de planner-module. Draaien via `npm test`.

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
    // Alles onder lib/ — naast de planner ook gedeelde helpers (lib/__tests__).
    include: ["lib/**/*.test.{ts,tsx}"],
    environment: "node",
  },
});
