import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      ".next-hero/**",
      ".venv-cutout/**",
      ".tmp-screenshots/**",
      ".canva-review/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "gdpr-akademia-src.zip",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  prettier,
];

export default eslintConfig;
