import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
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
        backgroundColor: "rgba(0, 0, 0, 0.32)",
        padding: "10px",
        display: "inline-block"
      }}
    >
      <Button
        type={buttonTypes.OFF_NEUTRAL}
        onClick={action("buttonClicked")}
        text="Label"
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
  .add("Neutral with Icon", () => (
    <Button
      type={buttonTypes.NEUTRAL}
      onClick={action("buttonClicked")}
      icon="wg-order"
      text="Label"
    />
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("buttonClicked")} text="Disabled Buton" />
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
    <Button disabled onClick={action("buttonClicked")} icon="wg-edit" />
  ))
  .add("Icon only (neutral medium)", () => (
    <Button
      type={buttonTypes.NEUTRAL}
      size={buttonSizes.LARGE}
      onClick={action("buttonClicked")}
      icon="wg-edit"
    />
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
  .add("Neutral Activated", () => (
    <Button
      type={buttonTypes.NEUTRAL}
      activated
      onClick={action("buttonClicked")}
      text="Neutral Button"
    />
  ));
