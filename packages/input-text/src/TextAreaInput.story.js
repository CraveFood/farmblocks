import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { TextAreaInput } from "./";

storiesOf("Text Area Input", module)
  .add("Default", withInfo()(() => <TextAreaInput rows="3" />))
  .add("Focused", withInfo()(() => <TextAreaInput focused rows="3" />))
  .add(
    "With label",
    withInfo()(() => <TextAreaInput label="Field Label" rows="3" />)
  )
  .add(
    "With placeholder",
    withInfo()(() => (
      <TextAreaInput
        label="Field Label"
        placeholder="input value here"
        rows="3"
      />
    ))
  )
  .add(
    "With value",
    withInfo()(() => (
      <TextAreaInput
        value="a value"
        label="Field Label"
        placeholder="input value here"
        rows="3"
      />
    ))
  )

  .add(
    "Disabled",
    withInfo()(() => (
      <TextAreaInput
        disabled
        label="Field Label"
        placeholder="input value here"
        rows="3"
      />
    ))
  )
  .add(
    "With validation messages",
    withInfo()(() => (
      <TextAreaInput
        validationMessages={["You need to fill this field."]}
        placeholder="Type in the formfield content…"
        label="Field Label"
        rows="3"
      />
    ))
  )
  .add(
    "Custom margin of 50px",
    withInfo()(() => <TextAreaInput margin="50px" rows="3" />)
  );
