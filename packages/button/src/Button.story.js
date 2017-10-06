import { injectGlobal } from "styled-components";
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./index";

injectGlobal`
@font-face {
  font-family: 'whatsgood-fonticon';
  src: url('./whatsgood-iconfont.eot?vexkpz');
  src: url('./whatsgood-iconfont.eot?vexkpz#iefix') format('embedded-opentype'),
  url('./whatsgood-iconfont.ttf?vexkpz') format('truetype'),
  url('./whatsgood-iconfont.woff?vexkpz') format('woff'),
  url('./whatsgood-iconfont.svg?vexkpz#whatsgood-iconfont') format('svg');
  font-weight: normal;
  font-style: normal;
}
  .wg-meat:before {
    content: "\\e933";
  }

  .wg-loading:before {
    content: "\\e90b";
  }

  .wg-edit:before {
    content: "\\e924";
  }

  .wg-meat,
  .wg-loading,
  .wg-edit {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'whatsgood-fonticon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
storiesOf("Button", module)
  .add("Primary", () => (
    <Button onClick={action("buttonClicked")} text="Primary Button" />
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("buttonClicked")} text="Disabled Button" />
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
      type="neutral"
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
        type="neutral-off"
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
