import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styled, { ThemeProvider } from "styled-components";
import buttonTypes from "./constants/buttonTypes";
import buttonSizes from "./constants/buttonSizes";

import Button from "./index";

const Container = styled.div`
  display: flex;
  > * {
    margin-right: 16px;
  }

  .section {
    > * {
      margin-top: 16px;
    }
  }
`;

const getStories = props => (
  <div className="section">
    <Button onClick={action("buttonClicked")} text="Default" {...props} />
    <Button
      type={buttonTypes.PRIMARY}
      onClick={action("buttonClicked")}
      text="Primary"
      {...props}
    />
    <Button
      type={buttonTypes.NEUTRAL}
      onClick={action("buttonClicked")}
      text="Neutral"
      {...props}
    />
    <Button
      type={buttonTypes.SECONDARY}
      onClick={action("buttonClicked")}
      text="Secondary"
      {...props}
    />
    <Button
      type={buttonTypes.NEGATIVE}
      onClick={action("buttonClicked")}
      text="Negative"
      {...props}
    />
    <Button
      type={buttonTypes.CLOSED}
      onClick={action("buttonClicked")}
      text="Closed"
      {...props}
    />
    <Button
      type={buttonTypes.POSITIVE}
      onClick={action("buttonClicked")}
      text="Positive"
      {...props}
    />
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
        text="Off neutral"
        {...props}
      />
    </div>
    <Button loading text="loading" {...props} />
    <Button disabled text="Disabled" {...props} />
  </div>
);

storiesOf("Button", module)
  .add("Small", () => (
    <Container>
      {getStories({})}
      {getStories({ icon: "wg-order" })}
      {getStories({ icon: "wg-order", rightIcon: "wg-small-arrow-bottom" })}
      {getStories({ rightIcon: "wg-small-arrow-bottom" })}
      {getStories({ text: "", icon: "wg-order" })}
    </Container>
  ))
  .add("Medium", () => (
    <Container>
      {getStories({ size: buttonSizes.MEDIUM })}
      {getStories({ size: buttonSizes.MEDIUM, icon: "wg-order" })}
      {getStories({
        size: buttonSizes.MEDIUM,
        icon: "wg-order",
        rightIcon: "wg-small-arrow-bottom",
      })}
      {getStories({
        size: buttonSizes.MEDIUM,
        rightIcon: "wg-small-arrow-bottom",
      })}
      {getStories({ size: buttonSizes.MEDIUM, text: "", icon: "wg-order" })}
    </Container>
  ))
  .add("Secondary (fluid)", () => (
    <div style={{ width: 400, height: 400, background: "rgba(0, 0, 0, 0.32)" }}>
      <Button
        type={buttonTypes.SECONDARY}
        fluid
        onClick={action("buttonClicked")}
        text="Secondary"
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
