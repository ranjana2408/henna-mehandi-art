/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      tsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: ["node_modules/", "dist/"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "no-console": "warn",
    "react/prop-types": "off", // Disable prop-types as we use TypeScript
    // "@typescript-eslint/no-explicit-any": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        // TypeScript specific rules
        "@typescript-eslint/no-unused-vars": ["error"],
      },
    },
  ],
};