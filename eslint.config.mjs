import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      "no-console": 0,
      "react/no-unescaped-entities": 0,
    },
  },
  globalIgnores([".next/**", ".contentlayer/**", "out/**", "build/**", "next-env.d.ts"]),
]);
