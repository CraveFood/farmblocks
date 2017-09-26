import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import Alert from ".";
import { POSITIVE } from "./AlertTypes";

storiesOf("Alert", module)
  .add("empty", () => <Alert />)
  .add("empty dismissable", () => <Alert dismissable />)
  .add("dismissable with text", () => <Alert dismissable text="Foo bar" />)
  .add("dismissable with text, type positive", () => (
    <Alert dismissable type={POSITIVE} text="Foo bar" />
  ));
