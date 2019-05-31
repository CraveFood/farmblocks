import ReactDOM from "react-dom";
import initStoryshots, {
  multiSnapshotWithOptions,
} from "@storybook/addon-storyshots";
import styleSheetSerializer from "jest-styled-components/src/styleSheetSerializer";
import { addSerializer } from "jest-specific-snapshot";

// add jest-styled-components serializer in order for jest-styled-components to work
// see https://github.com/storybooks/storybook/issues/887#issuecomment-356577444
// and https://github.com/storybooks/storybook/issues/887#issuecomment-357073807
addSerializer(styleSheetSerializer);

jest.spyOn(ReactDOM, "createPortal").mockImplementation(node => node);

initStoryshots({
  framework: "react",
  test: multiSnapshotWithOptions({}),
});
