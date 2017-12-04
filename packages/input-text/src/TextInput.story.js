import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import TextInput from ".";

storiesOf("Text Input", "module").add(
  "Default",
  withInfo()(() => <TextInput />)
);
