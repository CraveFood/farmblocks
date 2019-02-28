module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier" // Turns off all rules that are unnecessary or might conflict with Prettier.
  ],
  plugins: [
    "react",
    "babel",
    "prettier" // Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
  ],
  rules: {
    "prettier/prettier": "error", // Prettier rules must throw errors
    "no-unused-expressions": "off",
    "babel/no-unused-expressions": "error",
    "react/jsx-filename-extension": "off",
    "import/no-named-as-default-member": "off",
    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",
    "react/jsx-one-expression-per-line": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-wrap-multilines": "off",
    "react/button-has-type": "off",
    "react/no-array-index-key": "warn",
    "react/forbid-prop-types": "warn",
    "react/no-did-update-set-state": "warn",
    "consistent-return": ["error", { treatUndefinedAsUnspecified: true }],
    "react/sort-comp": [
      "error",
      { order: ["lifecycle", "everything-else", "render", "static-methods"] }
    ]
  },
  overrides: {
    files: "**/*.{test,story,testFramework}.js",
    rules: {
      "import/no-extraneous-dependencies": "off"
    }
  }
};
