import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Radio, { RadioGroup } from ".";

storiesOf("RadioGroup", "module").add(
  "Default",
  withInfo()(() => (
    <RadioGroup name="radioExample">
      <Radio value="first" label="First" />
      <Radio value="second" label="Second" />
    </RadioGroup>
  ))
);
