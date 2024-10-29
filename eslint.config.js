// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'warn', // Warn on console.log statements
      'semi': ['error', 'always'], // Require semicolons
      'quotes': ['error', 'single'], // Require single quotes
      // Add other custom rules here
    },
  }
];