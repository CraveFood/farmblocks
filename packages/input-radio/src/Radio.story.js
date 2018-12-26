import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Radio from ".";

storiesOf("Radio", module)
  .add("Default", () => <Radio />)
  .add("Checked", () => <Radio checked />)
  .add("Disabled", () => <Radio disabled />)
  .add("Disabled checked", () => <Radio disabled checked />)
  .add("Default w/ label", () => <Radio label="Default radio" />)
  .add("Checked w/ label", () => <Radio label="Checked radio" checked />)
  .add("Disabled w/ label", () => <Radio label="Disabled radio" disabled />)
  .add("onClick", () => <Radio label="Click me" onClick={action("onClick")} />)
  .add("onChange", () => (
    <Radio label="Click me" onChange={action("onChange")} value="a value" />
  ));
