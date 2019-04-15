import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
import buttonTypes from "./constants/buttonTypes";
import buttonSizes from "./constants/buttonSizes";

import Button from "./index";

storiesOf("Button", module)
  .add("Default", () => (
    <Button onClick={action("buttonClicked")} text="Label" />
  ))
  .add("Primary", () => (
    <Button
      type={buttonTypes.PRIMARY}
      onClick={action("buttonClicked")}
      text="Label"
    />
  ))
  .add("Neutral", () => (
    <Button
      type={buttonTypes.NEUTRAL}
      onClick={action("buttonClicked")}
      text="Neutral Button"
    />
  ))
  .add("Secondary", () => (
    <Button
      type={buttonTypes.SECONDARY}
      onClick={action("buttonClicked")}
      text="Secondary Button"
    />
  ))
  .add("Negative", () => (
    <Button
      type={buttonTypes.NEGATIVE}
      onClick={action("buttonClicked")}
      text="Label"
    />
  ))
  .add("Closed", () => (
    <Button
      type={buttonTypes.CLOSED}
      onClick={action("buttonClicked")}
      text="Closed Button"
    />
  ))
  .add("Positive", () => (
    <Button
      type={buttonTypes.POSITIVE}
      onClick={action("buttonClicked")}
      text="Positive Button"
    />
  ))
  .add("Off Neutral Button", () => (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.32)",
        padding: "10px",
        display: "inline-block",
      }}
    >
      <Button
        type={buttonTypes.OFF_NEUTRAL}
        onClick={action("buttonClicked")}
        text="Label"
      />
    </div>
  ))
  .add("Off Neutral Button Loading", () => (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.32)",
        padding: "10px",
        display: "inline-block",
      }}
    >
      <Button
        type={buttonTypes.OFF_NEUTRAL}
        onClick={action("buttonClicked")}
        text="Label"
        loading
      />
    </div>
  ))
  .add("Default medium", () => (
    <Button
      size={buttonSizes.MEDIUM}
      onClick={action("buttonClicked")}
      text="Label"
    />
  ))
  .add("Default with Icon", () => (
    <Button
      onClick={action("buttonClicked")}
      icon="wg-order"
      text="Send Order"
    />
  ))
  .add("Default with Right Icon", () => (
    <Button
      onClick={action("buttonClicked")}
      rightIcon="wg-small-arrow-bottom"
      text="Send Order"
    />
  ))
  .add("Neutral with Icon", () => (
    <Button
      type={buttonTypes.NEUTRAL}
      onClick={action("buttonClicked")}
      icon="wg-order"
      text="Label"
    />
  ))
  .add("Neutral with Righ  Icon", () => (
    <Button
      type={buttonTypes.NEUTRAL}
      onClick={action("buttonClicked")}
      rightIcon="wg-small-arrow-bottom"
      text="Label"
    />
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("buttonClicked")} text="Disabled Buton" />
  ))
  .add("Disabled with tooltip", () => (
    <Button
      disabled
      onClick={action("buttonClicked")}
      tooltipText="This button is disabled."
      text="Disabled Buton"
    />
  ))
  .add("Saving Status", () => (
    <Button onClick={action("buttonClicked")} text="Saving…" loading />
  ))
  .add("Icon only (neutral)", () => (
    <Button
      type={buttonTypes.NEUTRAL}
      onClick={action("buttonClicked")}
      icon="wg-edit"
    />
  ))
  .add("Icon only (primary)", () => (
    <Button
      type={buttonTypes.PRIMARY}
      onClick={action("buttonClicked")}
      icon="wg-edit"
    />
  ))
  .add("Icon only (disabled)", () => (
    <Button
      disabled
      onClick={action("buttonClicked")}
      icon="wg-edit"
      tooltipText="This button is disabled."
    />
  ))
  .add("Icon only (neutral medium)", () => (
    <Button
      type={buttonTypes.NEUTRAL}
      size={buttonSizes.MEDIUM}
      onClick={action("buttonClicked")}
      icon="wg-edit"
    />
  ))
  .add("Right Icon only (neutral)", () => (
    <Button
      type={buttonTypes.NEUTRAL}
      onClick={action("buttonClicked")}
      rightIcon="wg-small-arrow-bottom"
    />
  ))
  .add("Children content with Icons", () => (
    <Button
      type={buttonTypes.NEUTRAL}
      onClick={action("buttonClicked")}
      icon="wg-small-arrow-bottom"
      rightIcon="wg-small-arrow-bottom"
    >
      ,_____,
    </Button>
  ))
  .add("Secondary (fluid)", () => (
    <div style={{ width: 400, height: 400, background: "rgba(0, 0, 0, 0.32)" }}>
      <Button
        type={buttonTypes.SECONDARY}
        fluid
        onClick={action("buttonClicked")}
        text="Secondary Button"
      />
    </div>
  ))
  .add("Secondary (fluid) with icon", () => (
    <div style={{ width: 400, height: 400, background: "rgba(0, 0, 0, 0.32)" }}>
      <Button
        type={buttonTypes.SECONDARY}
        fluid
        onClick={action("buttonClicked")}
        text="Secondary Button"
        icon="wg-order"
      />
    </div>
  ))
  .add("Neutral Activated", () => (
    <Button
      type={buttonTypes.NEUTRAL}
      activated
      onClick={action("buttonClicked")}
      text="Neutral Button"
    />
  ))
  .add("Custom Theme", () => (
    <ThemeProvider
      theme={{
        [buttonTypes.PRIMARY]: {
          color: "deeppink",
          hoverColor: "blueviolet",
        },
      }}
    >
      <Button
        type={buttonTypes.PRIMARY}
        onClick={action("buttonClicked")}
        text="🦄 My Beautiful Button"
      />
    </ThemeProvider>
  ))
  .add("Neutral with Custom Theme", () => (
    <ThemeProvider
      theme={{
        [buttonTypes.NEUTRAL]: {
          textColor: "aqua",
          iconColor: "aqua",
          textHoverColor: "slateblue",
          color: "chartreuse",
        },
      }}
    >
      <Button
        type={buttonTypes.NEUTRAL}
        onClick={action("buttonClicked")}
        text="Neutral enough?"
      />
    </ThemeProvider>
  ))
  .add("Plus and minus icon buttons in small and medium sizes", () => (
    <div>
      <Button icon="wg-minus" />
      <Button icon="wg-add" />
      <Button icon="wg-minus" size={buttonSizes.MEDIUM} />
      <Button icon="wg-add" size={buttonSizes.MEDIUM} />
    </div>
  ))
  .add("Custom box-shadow", () => (
    <Button boxShadow="none">Custom box-shadow</Button>
  ))
  .add("Custom padding", () => (
    <Button paddingX="48px">Custom padding X</Button>
  ))
  .add("Custom font-weight, text color and font-size", () => (
    <Button fontSize="14px" fontWeight="normal" textColor="purple">
      Custom text properties
    </Button>
  ))
  .add("Custom font-weight, text color and font-size - activated", () => (
    <Button fontSize="14px" fontWeight="normal" textColor="purple" activated>
      Custom text properties
    </Button>
  ))
  .add("Loading with left and right icons", () => (
    <Button text="Label" rightIcon="wg-small-arrow-bottom" loading />
  ))
  .add("extended style", () => (
    <Button
      css="
        font-family: serif;
        .left-icon {
          font-size: 2em;
        }
      "
      text="Label"
      icon="wg-edit"
    />
  ));
