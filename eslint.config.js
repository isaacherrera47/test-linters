module.exports = {
    files: ["**/*.js"],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    rules: {
      ...require('eslint-config-eslint/recommended').rules,
      'no-console': 'warn', // Warn on console.log statements
      'semi': ['error', 'always'], // Require semicolons
      'quotes': ['error', 'single'], // Require single quotes
      // Add other custom rules here
    },
  };