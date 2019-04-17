import React from "react";
import { storiesOf } from "@storybook/react";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Text from "./Text";

const text =
  "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod.";

storiesOf("Text/Paragraph", module)
  .add("default - LARGE size, NORMAL type, left aligned", () => (
    <div style={{ width: "300px" }}>
      <Text paragraph>{text}</Text>
    </div>
  ))
  .add("right aligned", () => (
    <div style={{ width: "300px" }}>
      <Text paragraph align="right">
        {text}
      </Text>
    </div>
  ))
  .add("centered", () => (
    <div style={{ width: "300px" }}>
      <Text paragraph align="center">
        {text}
      </Text>
    </div>
  ))
  .add("MEDIUM size", () => (
    <div style={{ width: "300px" }}>
      <Text paragraph size={fontSizes.MEDIUM}>
        {text}
      </Text>
    </div>
  ))
  .add("SMALL size", () => (
    <div style={{ width: "300px" }}>
      <Text paragraph size={fontSizes.SMALL}>
        {text}
      </Text>
    </div>
  ))
  .add("NEUTRAL type", () => (
    <div style={{ width: "300px" }}>
      <Text paragraph type={fontTypes.NEUTRAL}>
        {text}
      </Text>
    </div>
  ))
  .add("POSITIVE type", () => (
    <div style={{ width: "300px" }}>
      <Text paragraph type={fontTypes.POSITIVE}>
        {text}
      </Text>
    </div>
  ))
  .add("NEGATIVE type", () => (
    <div style={{ width: "300px" }}>
      <Text paragraph type={fontTypes.NEGATIVE}>
        {text}
      </Text>
    </div>
  ))
  .add("FEATURED type", () => (
    <div style={{ width: "300px" }}>
      <Text paragraph type={fontTypes.FEATURED}>
        {text}
      </Text>
    </div>
  ))
  .add("SUBTLE type", () => (
    <div style={{ width: "300px" }}>
      <Text paragraph type={fontTypes.SUBTLE}>
        {text}
      </Text>
    </div>
  ))
  .add("WHITE type", () => (
    <div style={{ width: "300px", background: "cadetblue" }}>
      <Text paragraph type={fontTypes.WHITE}>
        {text}
      </Text>
    </div>
  ))
  .add("extended style", () => (
    <div style={{ width: "300px" }}>
      <Text
        css="
          font-family: cursive;
          &::first-letter {
            font-size: 3em;
            color: gainsboro;
            text-shadow: 0 0 6px black;
            line-height: 1;
          }
        "
        paragraph
      >
        {text}
      </Text>
    </div>
  ));
