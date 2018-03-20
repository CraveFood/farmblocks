import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import Radio, { RadioGroup } from ".";

storiesOf("RadioGroup", "module")
  .add(
    "Default",
    withInfo()(() => (
      <RadioGroup name="radioExample">
        <Radio value="first" label="First" />
        <Radio value="second" label="Second" />
        <Radio value="third" label="Third" />
      </RadioGroup>
    ))
  )
  .add(
    "w/ disabled option",
    withInfo()(() => (
      <RadioGroup name="radioExample">
        <Radio value="first" label="First" />
        <Radio value="second" label="Second" />
        <Radio value="third" label="Third" disabled />
      </RadioGroup>
    ))
  )
  .add(
    "w/ default value",
    withInfo()(() => (
      <RadioGroup name="radioExample" defaultValue="second">
        <Radio value="first" label="First" />
        <Radio value="second" label="Second" />
        <Radio value="third" label="Third" />
      </RadioGroup>
    ))
  )
  .add(
    "onChange",
    withInfo()(() => (
      <RadioGroup name="radioExample" onChange={action("onChange")}>
        <Radio value="first" label="First" />
        <Radio value="second" label="Second" />
        <Radio value="third" label="Third" />
      </RadioGroup>
    ))
  )
  .add(
    "all disabled",
    withInfo()(() => (
      <RadioGroup name="radioExample" disabled>
        <Radio value="first" label="First" />
        <Radio value="second" label="Second" />
        <Radio value="third" label="Third" />
      </RadioGroup>
    ))
  );
