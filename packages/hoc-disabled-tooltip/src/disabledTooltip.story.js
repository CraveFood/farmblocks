import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import disabledTooltip from ".";

const InputComponent = props => <input {...props} />;

// this hoc accepts both a component or an jsx element name as input
const EnhancedInput = disabledTooltip(InputComponent);
const EnhancedButton = disabledTooltip("button");

storiesOf("HOC disabledTooltip", "module")
  .add(
    "disabled input",
    withInfo()(() => (
      <div>
        text before
        <EnhancedInput disabled type="text" />
        text after
      </div>
    ))
  )
  .add(
    "enhanced element with display block",
    withInfo()(() => (
      <div>
        text before
        <EnhancedInput disabled displayBlock type="text" />
        text after
      </div>
    ))
  )
  .add(
    "disabled input with tooltip right aligned",
    withInfo()(() => (
      <EnhancedInput disabled type="text" tooltipAlign="right" />
    ))
  )
  .add(
    "disabled html button",
    withInfo()(() => (
      <EnhancedButton disabled>A disabled Button</EnhancedButton>
    ))
  )
  .add(
    "disabled false and button events (click, mouseover)",
    withInfo()(() => (
      <EnhancedButton
        onClick={action("button clicked")}
        onMouseOver={action("mouse over")}
        onMouseLeave={action("mouse out")}
      >
        A Button with events
      </EnhancedButton>
    ))
  )
  .add(
    "disabled input with custom Tooltip text",
    withInfo()(() => (
      <EnhancedInput
        type="checkbox"
        disabled
        tooltipText="A custom tooltip text"
      />
    ))
  )
  .add(
    "no tooltip",
    withInfo()(() => (
      <EnhancedButton disabled noTooltip>
        A disabled Button
      </EnhancedButton>
    ))
  );
