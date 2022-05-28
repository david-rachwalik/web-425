/**
 * Title: .eslint.js
 * Author: David Rachwalik
 * Date: 2022/05/28
 * Description: Configuration for JS & TS linting
 */

// https://eslint.org/docs/user-guide/configuring/configuration-files
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest", // Parsing of modern ECMAScript features
    sourceType: "module", // Enables the use of imports
  },
  // https://eslint.org/docs/rules
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "no-console": "off",
    "no-unused-vars": "off",
    "no-useless-constructor": "off",
    "no-restricted-syntax": "off",
    "no-underscore-dangle": "off",
    "no-alert": "off",
  },
  ignorePatterns: ["node_modules/", "wwwroot/", "dist/"],
};
