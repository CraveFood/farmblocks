import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Text from "./Text";

storiesOf("Text/Title", module)
  .add(
    "default - LARGE size, NORMAL type, left aligned",
    withInfo()(() => <Text title>Awesome Title</Text>)
  )
  .add(
    "right aligned",
    withInfo()(() => (
      <Text title align="right">
        Awesome Title
      </Text>
    ))
  )
  .add(
    "justified",
    withInfo()(() => (
      <Text title align="justify">
        Awesome Title
      </Text>
    ))
  )
  .add(
    "centered",
    withInfo()(() => (
      <Text title align="center">
        Awesome Title
      </Text>
    ))
  )
  .add(
    "SMALL size",
    withInfo()(() => (
      <Text title size={fontSizes.SMALL}>
        Awesome Title
      </Text>
    ))
  )
  .add(
    "MEDIUM size",
    withInfo()(() => (
      <Text title size={fontSizes.MEDIUM}>
        Awesome Title
      </Text>
    ))
  )
  .add(
    "LARGE size",
    withInfo()(() => (
      <Text title size={fontSizes.LARGE}>
        Awesome Title
      </Text>
    ))
  )
  .add(
    "X_LARGE size",
    withInfo()(() => (
      <Text title size={fontSizes.X_LARGE}>
        Awesome Title
      </Text>
    ))
  )
  .add(
    "HUGE size",
    withInfo()(() => (
      <Text title size={fontSizes.HUGE}>
        Awesome Title
      </Text>
    ))
  )
  .add(
    "NORMAL type",
    withInfo()(() => (
      <Text title type={fontTypes.NORMAL}>
        Awesome Title
      </Text>
    ))
  )
  .add(
    "NEUTRAL type",
    withInfo()(() => (
      <Text title type={fontTypes.NEUTRAL}>
        Awesome Title
      </Text>
    ))
  )
  .add(
    "POSITIVE type",
    withInfo()(() => (
      <Text title type={fontTypes.POSITIVE}>
        Awesome Title
      </Text>
    ))
  )
  .add(
    "NEGATIVE type",
    withInfo()(() => (
      <Text title type={fontTypes.NEGATIVE}>
        Awesome Title
      </Text>
    ))
  )
  .add(
    "FEATURED type",
    withInfo()(() => (
      <Text title type={fontTypes.FEATURED}>
        Awesome Title
      </Text>
    ))
  )
  .add(
    "SUBTLE type",
    withInfo()(() => (
      <Text title type={fontTypes.SUBTLE}>
        Awesome Title
      </Text>
    ))
  )
  .add(
    "WHITE type",
    withInfo()(() => (
      <div style={{ background: "cadetblue" }}>
        <Text title type={fontTypes.WHITE}>
          Awesome Title
        </Text>
      </div>
    ))
  );
