import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import Alert from ".";
import { POSITIVE, NEWS, NEGATIVE, ATTENTION } from "./constants/alertTypes";

storiesOf("Alert", module)
  .add(
    "default",
    withInfo()(() => <Alert text="Default is set to news type" />)
  )
  .add(
    "non dismissable",
    withInfo()(() => <Alert dismissable={false} text="I can't be dismissed!" />)
  )
  .add(
    "type positive",
    withInfo()(() => (
      <Alert
        dismissable
        type={POSITIVE}
        text="Positive alert!"
        onDismiss={action("dismiss triggered")}
      />
    ))
  )
  .add(
    "type news",
    withInfo()(() => (
      <Alert
        dismissable
        type={NEWS}
        text="New alert!"
        onDismiss={action("dismiss triggered")}
      />
    ))
  )
  .add(
    "type negative",
    withInfo()(() => (
      <Alert
        dismissable
        type={NEGATIVE}
        text="Negative alert!"
        onDismiss={action("dismiss triggered")}
      />
    ))
  )
  .add(
    "type attention",
    withInfo()(() => (
      <Alert
        dismissable
        type={ATTENTION}
        text="Attention alert!"
        onDismiss={action("dismiss triggered")}
      />
    ))
  );
