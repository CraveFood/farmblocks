module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    jest: true
  },
  extends: ["./.eslintrc.js"],
  rules: {
    "one-var": "off",
    "no-return-assign": "off",
    "func-names": "off",
    "prefer-destructuring": "off"
  }
};
