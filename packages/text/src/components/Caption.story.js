import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Caption from "./Caption";

storiesOf("Text/Caption", module)
  .add(
    "default - LARGE size, NORMAL type, left aligned",
    withInfo()(() => <Caption>Awesome caption</Caption>)
  )
  .add(
    "MEDIUM size",
    withInfo()(() => <Caption size={fontSizes.MEDIUM}>Awesome caption</Caption>)
  )
  .add(
    "right aligned",
    withInfo()(() => (
      <Caption type={fontTypes.NEUTRAL} align="right">
        Awesome caption
      </Caption>
    ))
  )
  .add(
    "NEUTRAL type",
    withInfo()(() => (
      <Caption type={fontTypes.NEUTRAL}>Awesome caption</Caption>
    ))
  )
  .add(
    "POSITIVE type",
    withInfo()(() => (
      <Caption type={fontTypes.POSITIVE}>Awesome caption</Caption>
    ))
  )
  .add(
    "NEGATIVE type",
    withInfo()(() => (
      <Caption type={fontTypes.NEGATIVE}>Awesome caption</Caption>
    ))
  )
  .add(
    "FEATURED type",
    withInfo()(() => (
      <Caption type={fontTypes.FEATURED}>Awesome caption</Caption>
    ))
  )
  .add(
    "SUBTLE type",
    withInfo()(() => <Caption type={fontTypes.SUBTLE}>Awesome caption</Caption>)
  )
  .add(
    "WHITE type",
    withInfo()(() => (
      <div style={{ background: "cadetblue" }}>
        <Caption type={fontTypes.WHITE}>Awesome caption</Caption>
      </div>
    ))
  );
