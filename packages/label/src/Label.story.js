import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Label from ".";

storiesOf("Label", "module")
  .add("Default", withInfo()(() => <Label>Default Label</Label>))
  .add("Focused", withInfo()(() => <Label focused>Focused Label</Label>))
  .add("Invalid", withInfo()(() => <Label invalid>Invalid Label</Label>))
  .add("Disabled", withInfo()(() => <Label disabled>Disabled Label</Label>))
  .add(
    "Protected and disabled",
    withInfo()(() => (
      <Label disabled protected>
        Protected Label
      </Label>
    ))
  )
  .add(
    "With more info",
    withInfo()(() => (
      <Label moreInfoContent="More info content">Default Label</Label>
    ))
  )
  .add(
    "With more info right aligned",
    withInfo()(() => (
      <Label moreInfoContent="More info content" moreInfoAlign="right">
        Default Label
      </Label>
    ))
  );
