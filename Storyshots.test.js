import initStoryshots from "@storybook/addon-storyshots";
// Workaround for https://github.com/storybooks/storybook/issues/2509
jest.mock("react-dom", () => {
  return {
    render: () => null,
    unmountComponentAtNode: () => null,
    findDOMNode: () => {
      return {};
    }
  };
});

initStoryshots();
