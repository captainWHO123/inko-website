import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const config = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "next-env.d.ts",
      ".playwright-browsers/**",
      ".npm-cache/**",
      ".npm-cache-preview/**",
      ".review-shots/**",
    ],
  },
];

export default config;
