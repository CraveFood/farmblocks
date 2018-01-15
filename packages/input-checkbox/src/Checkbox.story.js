import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Checkbox from ".";

storiesOf("Checkbox Input", "module").add(
  "Default",
  withInfo()(() => <Checkbox />)
);
