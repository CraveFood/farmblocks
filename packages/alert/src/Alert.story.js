import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import Alert from ".";
import { POSITIVE, NEWS, NEGATIVE, ATTENTION } from "./constants/alertTypes";

storiesOf("Alert", module)
  .add(
    "default",
    withInfo()(() => (
      <Alert text="Default is set to news type, and have default onDismiss function that hides the alert." />
    ))
  )
  .add(
    "visibleTime 2 seconds",
    withInfo()(() => (
      <Alert
        text="This message will self-destruct in 2 seconds"
        visibleTime={2000}
      />
    ))
  )
  .add(
    "non dismissable",
    withInfo()(() => <Alert dismissable={false} text="I can't be dismissed!" />)
  )
  .add(
    "with custom z-index",
    withInfo()(() => (
      <div>
        <div
          style={{
            width: 120,
            height: 120,
            position: "absolute",
            zIndex: 10,
            background: "gray"
          }}
        />
        <div
          style={{
            width: 100,
            height: 100,
            position: "absolute",
            zIndex: 12,
            background: "rgba(0, 0, 0, 0.7)"
          }}
        />
        <Alert text="should display between the two" zIndex={11} />
      </div>
    ))
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
