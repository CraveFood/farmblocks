module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier" // Turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  plugins: [
    "react",
    "prettier" // Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
  ],
  rules: {
    "prettier/prettier": "error" // Prettier rules must throw errors
  }
};
