import React from "react";
import { storiesOf } from "@storybook/react";

import { TextAreaInput } from ".";

storiesOf("Text Area Input", module)
  .add("Default", () => <TextAreaInput rows="3" />)
  .add("Focused", () => <TextAreaInput focused rows="3" />)
  .add("With label", () => <TextAreaInput label="Field Label" rows="3" />)
  .add("With placeholder", () => (
    <TextAreaInput
      label="Field Label"
      placeholder="input value here"
      rows="3"
    />
  ))
  .add("With value", () => (
    <TextAreaInput
      value="a value"
      label="Field Label"
      placeholder="input value here"
      rows="3"
    />
  ))
  .add("Disabled", () => (
    <TextAreaInput
      disabled
      label="Field Label"
      placeholder="input value here"
      rows="3"
    />
  ))
  .add("With validation messages", () => (
    <TextAreaInput
      validationMessages={["You need to fill this field."]}
      placeholder="Type in the formfield content…"
      label="Field Label"
      rows="3"
    />
  ))
  .add("Custom margin of 50px", () => <TextAreaInput margin="50px" rows="3" />);
