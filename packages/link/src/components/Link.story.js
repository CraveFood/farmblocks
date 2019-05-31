import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { fontSizes } from "@crave/farmblocks-theme";
import Link from "./Link";
import linkTypes from "../constants/linkTypes";

storiesOf("Link/Featured", module)
  .add("Default - left aligned, medium size", () => (
    <Link href="#">Awesome Link</Link>
  ))
  .add("right aligned", () => (
    <div style={{ width: "500px", textAlign: "right" }}>
      <Link href="#">Awesome Link</Link>
    </div>
  ))
  .add("external", () => (
    <Link href="#" external>
      Awesome Link
    </Link>
  ))
  .add("with left icon", () => (
    <Link href="#" leftIcon="wg-place">
      Awesome Link
    </Link>
  ))
  .add("with right icon", () => (
    <Link href="#" rightIcon="wg-place">
      Awesome Link
    </Link>
  ))
  .add("icon only", () => <Link href="#" leftIcon="wg-place" />)
  .add("external, mini size", () => (
    <Link href="#" size={fontSizes.SMALL} external lineHeight={1.14}>
      Awesome Link
    </Link>
  ))
  .add("with left icon, mini size", () => (
    <Link href="#" size={fontSizes.SMALL} leftIcon="wg-place" lineHeight={1.14}>
      Awesome Link
    </Link>
  ))
  .add("external, white color", () => (
    <div style={{ background: "rgba(0, 0, 0, 0.32)" }}>
      <Link href="#" external type={linkTypes.WHITE}>
        Awesome Link
      </Link>
    </div>
  ))
  .add("external, mini size, white color", () => (
    <div style={{ background: "rgba(0, 0, 0, 0.32)" }}>
      <Link
        href="#"
        external
        type={linkTypes.WHITE}
        size={fontSizes.SMALL}
        lineHeight={1.14}
      >
        Awesome Link
      </Link>
    </div>
  ))
  .add("with left icon, white color", () => (
    <div style={{ background: "rgba(0, 0, 0, 0.32)" }}>
      <Link
        leftIcon="wg-place"
        type={linkTypes.WHITE}
        lineHeight={1.33}
        size={fontSizes.LARGE}
      >
        Awesome Link
      </Link>
    </div>
  ))
  .add("with left icon, mini size, white color", () => (
    <div style={{ background: "rgba(0, 0, 0, 0.32)" }}>
      <Link
        type={linkTypes.WHITE}
        leftIcon="wg-place"
        size={fontSizes.SMALL}
        lineHeight={1.14}
      >
        Awesome Link
      </Link>
    </div>
  ))
  .add("disabled link", () => (
    <div style={{ width: "500px" }}>
      <Link href="#" disabled>
        Awesome Link
      </Link>
    </div>
  ))
  .add("disabled link with onClick function", () => (
    <div style={{ width: "500px" }}>
      <Link disabled onClick={action("linkClicked")}>
        Awesome disabled link
      </Link>
    </div>
  ))
  .add("link with onClick function", () => (
    <div style={{ width: "500px" }}>
      <Link onClick={action("linkClicked")}>Awesome Link</Link>
    </div>
  ))
  .add("no href", () => <Link>Awesome Link</Link>)
  .add("no href with left icon", () => (
    <Link leftIcon="wg-place">Awesome Link</Link>
  ))
  .add("Custom color", () => (
    <Link href="#" type="hotpink">
      Awesome Link
    </Link>
  ));
