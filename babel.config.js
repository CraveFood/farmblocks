module.exports = api => {
  api.cache(true);
  return {
    presets: ["@babel/preset-react"],
    plugins: [
      "@babel/plugin-proposal-optional-chaining",
      ["@babel/plugin-proposal-class-properties", { loose: false }],
      "babel-plugin-styled-components",
    ],
    env: {
      test: {
        presets: ["@babel/preset-env"],
        plugins: ["babel-plugin-require-context-hook"],
      },
    },
    // allow imports from transpiled farmblocks packages
    sourceType: "unambiguous",
  };
};
