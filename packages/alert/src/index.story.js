import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import Alert from ".";
import { POSITIVE, NEWS, NEGATIVE, ATTENTION } from "./AlertTypes";

storiesOf("Alert", module)
  .add("empty", () => <Alert />)
  .add("empty non dismissable", () => <Alert dismissable={false} />)
  .add("dismissable with text", () => <Alert dismissable text="Foo bar" />)
  .add("dismissable with text, type positive", () => (
    <Alert dismissable type={POSITIVE} text="Foo bar" />
  ))
  .add("all four types", () => (
    <div>
      <Alert dismissable type={POSITIVE} text="Foo bar" />
      <Alert dismissable type={NEWS} text="Foo bar" />
      <Alert dismissable type={NEGATIVE} text="Foo bar" />
      <Alert dismissable type={ATTENTION} text="Foo bar" />
    </div>
  ));
