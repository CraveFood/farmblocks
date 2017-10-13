module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
    "prettier"
  ],
  plugins: ["flowtype", "react"]
};
