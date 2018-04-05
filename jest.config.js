const { argv } = process;
const coveragePathIgnorePatterns = [".story.js", "lib/*"];

const completeConfig = {
  verbose: true,
  coveragePathIgnorePatterns,
  setupTestFrameworkScriptFile: "<rootDir>/jest.testFramework.js"
};

const fastConfig = {
  verbose: false,
  onlyChanged: true,
  coveragePathIgnorePatterns,
  testPathIgnorePatterns: ["Storyshots.test.js"]
};

const useComplete = argv.includes("-u") || argv.includes("--coverage");

module.exports = useComplete ? completeConfig : fastConfig;
