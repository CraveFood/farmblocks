module.exports = {
  verbose: true,
  setupFiles: ["<rootDir>/jest.setup.js"],
  setupTestFrameworkScriptFile: "<rootDir>/jest.testFramework.js",
  coveragePathIgnorePatterns: ["jest.setup.js", ".story.js"],
  testPathIgnorePatterns: ["src/Storyshots.test.js"]
};
