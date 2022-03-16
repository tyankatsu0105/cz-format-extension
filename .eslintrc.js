/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "simple-import-sort",
    "typescript-sort-keys",
    "sort-keys-fix",
    "sort-destructure-keys",
    "@typescript-eslint",
  ],
  rules: {
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": "warn",
    /**
     * https://github.com/mthadley/eslint-plugin-sort-destructure-keys/blob/master/docs/rules/sort-destructure-keys.md
     */
    "sort-destructure-keys/sort-destructure-keys": [
      "warn",
      {
        caseSensitive: false,
      },
    ],
    "sort-keys-fix/sort-keys-fix": "warn",
    "typescript-sort-keys/interface": "warn",
    "typescript-sort-keys/string-enum": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
  },
};
module.exports = config;
