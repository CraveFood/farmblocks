import React from "react";
import { storiesOf } from "@storybook/react";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Text from "./Text";

storiesOf("Text/Title", module)
  .add("default - LARGE size, NORMAL type, left aligned", () => (
    <Text title>Awesome Title</Text>
  ))
  .add("right aligned", () => (
    <Text title align="right">
      Awesome Title
    </Text>
  ))
  .add("justified", () => (
    <Text title align="justify">
      Awesome Title
    </Text>
  ))
  .add("centered", () => (
    <Text title align="center">
      Awesome Title
    </Text>
  ))
  .add("SMALL size", () => (
    <Text title size={fontSizes.SMALL}>
      Awesome Title
    </Text>
  ))
  .add("MEDIUM size", () => (
    <Text title size={fontSizes.MEDIUM}>
      Awesome Title
    </Text>
  ))
  .add("LARGE size", () => (
    <Text title size={fontSizes.LARGE}>
      Awesome Title
    </Text>
  ))
  .add("X_LARGE size", () => (
    <Text title size={fontSizes.X_LARGE}>
      Awesome Title
    </Text>
  ))
  .add("HUGE size", () => (
    <Text title size={fontSizes.HUGE}>
      Awesome Title
    </Text>
  ))
  .add("NORMAL type", () => (
    <Text title type={fontTypes.NORMAL}>
      Awesome Title
    </Text>
  ))
  .add("NEUTRAL type", () => (
    <Text title type={fontTypes.NEUTRAL}>
      Awesome Title
    </Text>
  ))
  .add("POSITIVE type", () => (
    <Text title type={fontTypes.POSITIVE}>
      Awesome Title
    </Text>
  ))
  .add("NEGATIVE type", () => (
    <Text title type={fontTypes.NEGATIVE}>
      Awesome Title
    </Text>
  ))
  .add("FEATURED type", () => (
    <Text title type={fontTypes.FEATURED}>
      Awesome Title
    </Text>
  ))
  .add("SUBTLE type", () => (
    <Text title type={fontTypes.SUBTLE}>
      Awesome Title
    </Text>
  ))
  .add("WHITE type", () => (
    <div style={{ background: "cadetblue" }}>
      <Text title type={fontTypes.WHITE}>
        Awesome Title
      </Text>
    </div>
  ))
  .add("extended style", () => (
    <Text css="font-family: monospace; text-transform: uppercase;" title>
      Awesome Title
    </Text>
  ));
