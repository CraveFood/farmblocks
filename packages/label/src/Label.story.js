import React from "react";
import { storiesOf } from "@storybook/react";

import Label from ".";

storiesOf("Label", "module")
  .add("Default", () => <Label>Default Label</Label>)
  .add("Focused", () => <Label focused>Focused Label</Label>)
  .add("Invalid", () => <Label invalid>Invalid Label</Label>)
  .add("Disabled", () => <Label disabled>Disabled Label</Label>)
  .add("Protected and disabled", () => (
    <Label disabled protected>
      Protected Label
    </Label>
  ))
  .add("With more info", () => (
    <Label moreInfoContent="More info content">Default Label</Label>
  ))
  .add("With more info right aligned", () => (
    <Label moreInfoContent="More info content" moreInfoAlign="right">
      Default Label
    </Label>
  ))
  .add("extended style", () => (
    <Label
      css="
        border: dotted 4px sienna;
        ::after {
          display: block;
          content: '';
          clear: both;
        }
      "
    >
      Default Label
    </Label>
  ));
