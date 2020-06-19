module.exports = {
  stories: ["../packages/**/*.story.(js|mdx)"],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
  ],
};
