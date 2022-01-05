const { argv } = process;

const basicConfig = {
  coveragePathIgnorePatterns: [".story.js", "lib/*"],
  setupFiles: [
    "./.storybook/jest/require.context.js",
    "<rootDir>/node_modules/regenerator-runtime/runtime",
    // ⬆️ for async/await tests to work in jest 22
    // Ref.: https://github.com/facebook/jest/issues/5698
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.testFramework.js"],
  moduleNameMapper: {
    "\\.(css|jpg|png|svg)$": "<rootDir>/empty-module.js",
  },
  testEnvironment: "jest-environment-jsdom-global",
};

const completeConfig = {
  ...basicConfig,
  verbose: true,
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
};

const fastConfig = {
  ...basicConfig,
  verbose: false,
  onlyChanged: true,
  testPathIgnorePatterns: ["Storyshots.test.js"],
};

const useComplete = argv.includes("-u") || argv.includes("--coverage");

module.exports = useComplete ? completeConfig : fastConfig;
