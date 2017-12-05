import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import TextInput from ".";

storiesOf("Text Input", "module")
  .add("Default", withInfo()(() => <TextInput />))
  .add("With label", withInfo()(() => <TextInput label="Field Label" />))
  .add(
    "With placeholder",
    withInfo()(() => (
      <TextInput label="Field Label" placeholder="input value here" />
    ))
  )
  .add(
    "With value",
    withInfo()(() => (
      <TextInput
        value="a value"
        label="Field Label"
        placeholder="input value here"
      />
    ))
  )
  .add(
    "With change handler",
    withInfo()(() => (
      <TextInput
        onChange={action("input changed")}
        label="Field Label"
        placeholder="input value here"
      />
    ))
  );
