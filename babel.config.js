module.exports = api => {
  api.cache(true);
  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      // Stage 1 plugins
      "@babel/plugin-proposal-optional-chaining",
      // Stage 2 plugins
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      "@babel/plugin-proposal-function-sent",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-numeric-separator",
      "@babel/plugin-proposal-throw-expressions",
      // Stage 3 plugins
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-import-meta",
      ["@babel/plugin-proposal-class-properties", { loose: false }],
      "@babel/plugin-proposal-json-strings",
    ],
    env: {
      test: {
        plugins: ["babel-plugin-require-context-hook"],
      },
    },
    // allow imports from transpiled farmblocks packages
    sourceType: "unambiguous",
  };
};
