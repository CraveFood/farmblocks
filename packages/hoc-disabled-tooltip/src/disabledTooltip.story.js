import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import disabledTooltip from ".";

const EnhancedInput = disabledTooltip("input");
const EnhancedButton = disabledTooltip("button");

storiesOf("HOC disabledTooltip", "module")
  .add(
    "disabled html input",
    withInfo()(() => <EnhancedInput disabled type="text" />)
  )
  .add(
    "disabled html input with tooltip right aligned",
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
    "disabled html input with custom Tooltip text",
    withInfo()(() => (
      <EnhancedInput
        type="checkbox"
        disabled
        tooltipText="A custom tooltip text"
      />
    ))
  );
