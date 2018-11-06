import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import CurrencyInput from ".";

storiesOf("Currency Input", module).add(
  "Default",
  withInfo()(() => <CurrencyInput />)
);
