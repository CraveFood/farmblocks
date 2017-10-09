module.exports = {
  verbose: true,
  setupFiles: ["<rootDir>/jest.setup.js"],
  coveragePathIgnorePatterns: ["jest.setup.js", ".story.js"],
  testPathIgnorePatterns: ["src/Storyshots.test.js"]
};
