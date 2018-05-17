import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import AmountSelectors from "./AmountSelectors";

storiesOf("Amount selectors", "module").add(
  "Default",
  withInfo()(() => <AmountSelectors />)
);
