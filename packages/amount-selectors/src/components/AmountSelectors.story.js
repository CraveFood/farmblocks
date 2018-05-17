import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import AmountSelectors from "./AmountSelectors";

storiesOf("Amount selectors", "module")
  .add("Default", withInfo()(() => <AmountSelectors />))
  .add("With value set", withInfo()(() => <AmountSelectors value={2} />))
  .add(
    "With 0.5 steps",
    withInfo()(() => <AmountSelectors value={2} step={0.5} />)
  )
  .add(
    "With a maxValue of 3",
    withInfo()(() => <AmountSelectors maxValue={3} value={2} step={0.5} />)
  );
