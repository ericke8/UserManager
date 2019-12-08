module.exports = {
  globals: {
    Promise: true,
  },
  env: {
    node: true,
    es6: true,
    commonjs: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "camelcase": "error",
    "dot-notation": "error",
    "indent": ["error", 2],
    "max-len": ["error", 100],
    "no-console": "error",
    "no-const-assign": "error",
    "no-extra-parens": "error",
    "no-var": "error",
    "no-unused-vars": ["error", { varsIgnorePattern: "^_" }],
    "prefer-const": "error",
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "strict": ["error", "never"],
  },
};
