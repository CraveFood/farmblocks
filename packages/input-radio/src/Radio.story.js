import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import Radio from ".";

storiesOf("Radio", "module")
  .add("Default", withInfo()(() => <Radio />))
  .add("Checked", withInfo()(() => <Radio checked />))
  .add("Disabled", withInfo()(() => <Radio disabled />))
  .add("Default w/ label", withInfo()(() => <Radio label="Default radio" />))
  .add(
    "Checked w/ label",
    withInfo()(() => <Radio label="Checked radio" checked />)
  )
  .add(
    "Disabled w/ label",
    withInfo()(() => <Radio label="Disabled radio" disabled />)
  )
  .add(
    "onClick",
    withInfo()(() => <Radio label="Click me" onClick={action("onClick")} />)
  )
  .add(
    "onChange",
    withInfo()(() => (
      <Radio label="Click me" onChange={action("onChange")} value="a value" />
    ))
  );
