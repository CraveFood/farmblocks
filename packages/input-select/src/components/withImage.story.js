import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import withImage from "./withImage";

const EnhancedInput = withImage("input");
const imgSrc = "https://picsum.photos/100";

storiesOf("Select Input (private)", module)
  .add("withImage - Valid image path", () => <EnhancedInput image={imgSrc} />)
  .add("withImage - Empty image path", () => <EnhancedInput />)
  .add("withImage - With inputRef", () => (
    <EnhancedInput image={imgSrc} inputRef={action("inputRef")} />
  ));
