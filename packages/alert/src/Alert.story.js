import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Alert from ".";
import { POSITIVE, NEWS, NEGATIVE, ATTENTION } from "./constants/alertTypes";

const StyledAlert = styled(Alert)`
  transform: rotate(5deg);
`;

const ExtendedAlert = props => <StyledAlert {...props} />;

storiesOf("Alert", module)
  .addDecorator(storyFn => (
    <div style={{ transform: "scale(1)", height: 200 }}>{storyFn()}</div>
  ))
  .add("default", () => (
    <Alert text="Default is set to news type, and have default onDismiss function that hides the alert." />
  ))
  .add("default at bottom", () => (
    <Alert
      bottomAligned
      text="Default is set to news type, and have default onDismiss function that hides the alert."
    />
  ))
  .add("visibleTime 2 seconds", () => (
    <Alert
      text="This message will self-destruct in 2 seconds"
      visibleTime={2000}
    />
  ))
  .add("non dismissable", () => (
    <Alert dismissable={false} text="I can't be dismissed!" />
  ))
  .add("with custom z-index", () => (
    <div>
      <div
        style={{
          width: 120,
          height: 120,
          position: "absolute",
          zIndex: 10,
          background: "gray",
        }}
      />
      <div
        style={{
          width: 100,
          height: 100,
          position: "absolute",
          zIndex: 12,
          background: "rgba(0, 0, 0, 0.7)",
        }}
      />
      <Alert text="should display between the two" zIndex={11} />
    </div>
  ))
  .add("type positive", () => (
    <Alert
      dismissable
      type={POSITIVE}
      text="Positive alert!"
      onDismiss={action("dismiss triggered")}
    />
  ))
  .add("type news", () => (
    <Alert
      dismissable
      type={NEWS}
      text="New alert!"
      onDismiss={action("dismiss triggered")}
    />
  ))
  .add("type negative", () => (
    <Alert
      dismissable
      type={NEGATIVE}
      text="Negative alert!"
      onDismiss={action("dismiss triggered")}
    />
  ))
  .add("type attention", () => (
    <Alert
      dismissable
      type={ATTENTION}
      text="Attention alert!"
      onDismiss={action("dismiss triggered")}
    />
  ))
  .add("extended style", () => (
    <ExtendedAlert text="Extended with 'transform: rotate(5deg)'" />
  ));
