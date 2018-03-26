module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: "<rootDir>/jest.testFramework.js",
  coveragePathIgnorePatterns: [".story.js", "lib/*"],
  testPathIgnorePatterns: ["src/Storyshots.test.js"]
};
