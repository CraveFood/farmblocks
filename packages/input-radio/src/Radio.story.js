import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Radio from ".";

storiesOf("Radio", "module")
  .add("Default", withInfo()(() => <Radio label="Default radio" />))
  .add("Checked", withInfo()(() => <Radio label="Checked radio" checked />))
  .add("Disabled", withInfo()(() => <Radio label="Disabled radio" disabled />));
