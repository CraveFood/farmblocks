import React from "react";
import { storiesOf } from "@storybook/react";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Text from "./Text";

storiesOf("Text/Default", module)
  .add("default - LARGE size, NORMAL type, left aligned", () => (
    <Text>Awesome Text</Text>
  ))
  .add("right aligned", () => <Text align="right">Awesome Text</Text>)
  .add("justified", () => <Text align="justify">Awesome Text</Text>)
  .add("centered", () => <Text align="center">Awesome Text</Text>)
  .add("SMALL size", () => <Text size={fontSizes.SMALL}>Awesome Text</Text>)
  .add("MEDIUM size", () => <Text size={fontSizes.MEDIUM}>Awesome Text</Text>)
  .add("LARGE size", () => <Text size={fontSizes.LARGE}>Awesome Text</Text>)
  .add("X_LARGE size", () => <Text size={fontSizes.X_LARGE}>Awesome Text</Text>)
  .add("HUGE size", () => <Text size={fontSizes.HUGE}>Awesome Text</Text>)
  .add("NEUTRAL type", () => <Text type={fontTypes.NEUTRAL}>Awesome Text</Text>)
  .add("POSITIVE type", () => (
    <Text type={fontTypes.POSITIVE}>Awesome Text</Text>
  ))
  .add("NEGATIVE type", () => (
    <Text type={fontTypes.NEGATIVE}>Awesome Text</Text>
  ))
  .add("FEATURED type", () => (
    <Text type={fontTypes.FEATURED}>Awesome Text</Text>
  ))
  .add("SUBTLE type", () => <Text type={fontTypes.SUBTLE}>Awesome Text</Text>)
  .add("WHITE type", () => (
    <div style={{ background: "cadetblue" }}>
      <Text type={fontTypes.WHITE}>Awesome Text</Text>
    </div>
  ))
  .add("with string truncate", () => (
    <div style={{ width: "200px" }}>
      <Text truncate>TOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO BIG</Text>
    </div>
  ))
  .add("custom line height", () => (
    <div style={{ height: 100, backgroundColor: "lightblue" }}>
      <Text lineHeight="100px" type={fontTypes.SUBTLE}>
        Awesome Text
      </Text>
    </div>
  ))
  .add("custom letter-spacing", () => (
    <Text letterSpacing="3px">Awesome Text</Text>
  ))
  .add("font weight theme light", () => (
    <Text fontWeight="light">Awesome Text</Text>
  ))
  .add("font weight theme title", () => (
    <Text fontWeight="title">Awesome Text</Text>
  ))
  .add("font weight out of theme", () => (
    <Text fontWeight={800}>Awesome Text</Text>
  ))
  .add("extended style", () => (
    <Text css="font-style: italic;">Awesome Text</Text>
  ));
