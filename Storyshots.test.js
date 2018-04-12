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

initStoryshots({
  framework: "react",
  test: multiSnapshotWithOptions({})
});
