import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import RemovableTags from ".";

storiesOf("Removable-tags", "module").add(
  "Default",
  withInfo()(() => <RemovableTags />)
);
