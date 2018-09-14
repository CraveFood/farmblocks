import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import FilterPopover from ".";

storiesOf("Filter Popover", module).add(
  "Default",
  withInfo()(() => <FilterPopover />)
);
