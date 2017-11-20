import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Text from "./Text";

const text =
  "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.";

storiesOf("Text/Paragraph", module)
  .add(
    "default - LARGE size, NORMAL type, left aligned",
    withInfo()(() => (
      <div style={{ width: "300px" }}>
        <Text paragraph>{text}</Text>
      </div>
    ))
  )
  .add(
    "right aligned",
    withInfo()(() => (
      <div style={{ width: "300px" }}>
        <Text paragraph align="right">
          {text}
        </Text>
      </div>
    ))
  )
  .add(
    "centered",
    withInfo()(() => (
      <div style={{ width: "300px" }}>
        <Text paragraph align="center">
          {text}
        </Text>
      </div>
    ))
  )
  .add(
    "MEDIUM size",
    withInfo()(() => (
      <div style={{ width: "300px" }}>
        <Text paragraph size={fontSizes.MEDIUM}>
          {text}
        </Text>
      </div>
    ))
  )
  .add(
    "SMALL size",
    withInfo()(() => (
      <div style={{ width: "300px" }}>
        <Text paragraph size={fontSizes.SMALL}>
          {text}
        </Text>
      </div>
    ))
  )
  .add(
    "NEUTRAL type",
    withInfo()(() => (
      <div style={{ width: "300px" }}>
        <Text paragraph type={fontTypes.NEUTRAL}>
          {text}
        </Text>
      </div>
    ))
  )
  .add(
    "POSITIVE type",
    withInfo()(() => (
      <div style={{ width: "300px" }}>
        <Text paragraph type={fontTypes.POSITIVE}>
          {text}
        </Text>
      </div>
    ))
  )
  .add(
    "NEGATIVE type",
    withInfo()(() => (
      <div style={{ width: "300px" }}>
        <Text paragraph type={fontTypes.NEGATIVE}>
          {text}
        </Text>
      </div>
    ))
  )
  .add(
    "FEATURED type",
    withInfo()(() => (
      <div style={{ width: "300px" }}>
        <Text paragraph type={fontTypes.FEATURED}>
          {text}
        </Text>
      </div>
    ))
  )
  .add(
    "SUBTLE type",
    withInfo()(() => (
      <div style={{ width: "300px" }}>
        <Text paragraph type={fontTypes.SUBTLE}>
          {text}
        </Text>
      </div>
    ))
  )
  .add(
    "WHITE type",
    withInfo()(() => (
      <div style={{ width: "300px", background: "cadetblue" }}>
        <Text paragraph type={fontTypes.WHITE}>
          {text}
        </Text>
      </div>
    ))
  );
