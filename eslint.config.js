module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
    ],
    rules: {
      'no-console': 'warn', // Warn on console.log statements
      'semi': ['error', 'always'], // Require semicolons
      'quotes': ['error', 'single'], // Require single quotes
      // Add other custom rules here
    },
  };