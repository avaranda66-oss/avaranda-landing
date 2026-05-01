import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    rules: {
      "@next/next/no-page-custom-font": "off",
    },
  },
  {
    ignores: [".next/**", "node_modules/**", "public/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
