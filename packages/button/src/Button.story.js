import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { PRIMARY, NEUTRAL, NEUTRAL_OFF } from "./constants/buttonTypes";

import Button from "./index";

storiesOf("Button", module)
  .add("Primary", () => (
    <Button onClick={action("buttonClicked")} text="Primary Button" />
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("buttonClicked")} text="Disabled Buton" />
  ))
  .add("Primary with Icon", () => (
    <Button
      onClick={action("buttonClicked")}
      icon="wg-meat"
      text="Primary with Icon"
    />
  ))
  .add("Secondary", () => (
    <Button
      type="secondary"
      onClick={action("buttonClicked")}
      text="Secondary Button"
    />
  ))
  .add("Secondary (fluid)", () => (
    <div style={{ width: 400, height: 400, background: "gray" }}>
      <Button
        type="secondary"
        fluid
        onClick={action("buttonClicked")}
        text="Secondary Button"
      />
    </div>
  ))
  .add("Request", () => (
    <Button
      type="request"
      onClick={action("buttonClicked")}
      text="Request Button"
    />
  ))
  .add("Closed", () => (
    <Button
      type="closed"
      onClick={action("buttonClicked")}
      text="Closed Button"
    />
  ))
  .add("Neutral", () => (
    <Button
      type={NEUTRAL}
      onClick={action("buttonClicked")}
      text="Neutral Button"
    />
  ))
  .add("Neutral Activated", () => (
    <Button
      type={NEUTRAL}
      activated
      onClick={action("buttonClicked")}
      text="Neutral Button"
    />
  ))
  .add("Neutral Off", () => (
    <div
      style={{
        backgroundColor: "gray",
        padding: "10px",
        display: "inline-block"
      }}
    >
      <Button
        type={NEUTRAL_OFF}
        onClick={action("buttonClicked")}
        text="Neutral Off Button"
      />
    </div>
  ))
  .add("Large button", () => (
    <Button
      size="large"
      onClick={action("buttonClicked")}
      text="Large Button"
    />
  ))
  .add("Loading", () => (
    <Button onClick={action("buttonClicked")} text="Loading Icon" loading />
  ))
  .add("Icon only", () => (
    <Button type="neutral" onClick={action("buttonClicked")} icon="wg-edit" />
  ))
  .add("Icon only (primary)", () => (
    <Button type={PRIMARY} onClick={action("buttonClicked")} icon="wg-edit" />
  ))
  .add("Icon only (disabled)", () => (
    <Button
      disabled
      type="neutral"
      onClick={action("buttonClicked")}
      icon="wg-edit"
    />
  ))
  .add("Icon only (large)", () => (
    <Button
      type="neutral"
      size="large"
      onClick={action("buttonClicked")}
      icon="wg-edit"
    />
  ));
