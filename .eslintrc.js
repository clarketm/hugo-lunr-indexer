module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },

  extends: ["eslint:recommended"],

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },

  rules: {
    "jsx-a11y/href-no-hash": "off",
    "no-cond-assign": "off",
    "no-case-declarations": "off",
    "no-constant-condition": "off",
    "default-case": "off",
    "no-unused-vars": "warn",
    "no-console": "warn",
    "no-debugger": "warn",
    indent: "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["warn", "double"]
  }
};
