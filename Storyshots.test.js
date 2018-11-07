import initStoryshots, {
  multiSnapshotWithOptions
} from "@storybook/addon-storyshots";
import styleSheetSerializer from "jest-styled-components/src/styleSheetSerializer";
import { addSerializer } from "jest-specific-snapshot";

//add jest-styled-components serializer in order for jest-styled-components to work
// see https://github.com/storybooks/storybook/issues/887#issuecomment-356577444
// and https://github.com/storybooks/storybook/issues/887#issuecomment-357073807
addSerializer(styleSheetSerializer);

//mock withInfo to exclude info HTML from the snapshots
jest.mock("@storybook/addon-info", () => ({
  withInfo: () => fn => fn
}));

// react-currency-input uses ReactDOM.findDOMNode(), wich works fine in browser
// but not in snapshots. Hence, we're mocking it with a simple input
// Once the package is updated, we can remove this.
//
// eslint-disable-next-line import/first, no-unused-vars
import CurrencyInput from "react-currency-input";
jest.mock("react-currency-input", () => "input");

initStoryshots({
  framework: "react",
  test: multiSnapshotWithOptions({})
});
