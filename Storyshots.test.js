import initStoryshots from "@storybook/addon-storyshots";

//mock withInfo to exclude info HTML from the snapshots
jest.mock("@storybook/addon-info", () => ({
  withInfo: () => fn => fn
}));

initStoryshots();
