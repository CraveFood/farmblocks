import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import FormPopover from ".";

storiesOf("Form Popover", module).add(
  "Default",
  withInfo()(() => <FormPopover />)
);
