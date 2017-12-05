import React from "react";
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
  );
