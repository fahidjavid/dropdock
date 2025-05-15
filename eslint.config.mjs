import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-config-prettier";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      semi: ["error"],
    },
  }),
  prettier,
];

export default eslintConfig;
