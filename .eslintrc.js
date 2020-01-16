module.exports = {
  // root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    '@typescript-eslint',
    // "eslint-comments",
    // "jest",
    // "promise",
    // "unicorn",
  ],
  extends: [
    "airbnb-typescript/base",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:eslint-comments/recommended",
    // "plugin:jest/recommended",
    // "plugin:promise/recommended",
    // "plugin:unicorn/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    // "prettier/react",
  ],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "warn"
  }
};