const React = require("react");
const renderer = require("react-test-renderer");

const Alert = require(".");

it("renders correctly", () => {
  const tree = renderer.create(<Alert>Hello World!</Alert>).toJSON();
  expect(tree).toMatchSnapshot();
});
