import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import Link from "./Link";
import linkTypes from "../constants/linkTypes";

import { fontSizes } from "@crave/farmblocks-theme";

storiesOf("Link/Featured", module)
  .add(
    "Default - left aligned, medium size",
    withInfo()(() => <Link href="#">Awesome Link</Link>)
  )
  .add(
    "right aligned",
    withInfo()(() => (
      <div style={{ width: "500px", textAlign: "right" }}>
        <Link href="#">Awesome Link</Link>
      </div>
    ))
  )
  .add(
    "external",
    withInfo()(() => (
      <Link href="#" external>
        Awesome Link
      </Link>
    ))
  )
  .add(
    "with left icon",
    withInfo()(() => (
      <Link href="#" leftIcon="wg-place">
        Awesome Link
      </Link>
    ))
  )
  .add(
    "with right icon",
    withInfo()(() => (
      <Link href="#" rightIcon="wg-place">
        Awesome Link
      </Link>
    ))
  )
  .add(
    "external, mini size",
    withInfo()(() => (
      <Link href="#" size={fontSizes.SMALL} external lineHeight={1.14}>
        Awesome Link
      </Link>
    ))
  )
  .add(
    "with left icon, mini size",
    withInfo()(() => (
      <Link
        href="#"
        size={fontSizes.SMALL}
        leftIcon="wg-place"
        lineHeight={1.14}
      >
        Awesome Link
      </Link>
    ))
  )
  .add(
    "external, white color",
    withInfo()(() => (
      <div style={{ background: "rgba(0, 0, 0, 0.32)" }}>
        <Link href="#" external type={linkTypes.WHITE}>
          Awesome Link
        </Link>
      </div>
    ))
  )
  .add(
    "external, mini size, white color",
    withInfo()(() => (
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
  )
  .add(
    "with left icon, white color",
    withInfo()(() => (
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
  )
  .add(
    "with left icon, mini size, white color",
    withInfo()(() => (
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
  )
  .add(
    "disabled link",
    withInfo()(() => (
      <div style={{ width: "500px" }}>
        <Link href="#" disabled>
          Awesome Link
        </Link>
      </div>
    ))
  )
  .add(
    "link with onClick function",
    withInfo()(() => (
      <div style={{ width: "500px" }}>
        <Link onClick={action("linkClicked")}>Awesome Link</Link>
      </div>
    ))
  )
  .add("no href", withInfo()(() => <Link>Awesome Link</Link>))
  .add(
    "no href with left icon",
    withInfo()(() => <Link leftIcon="wg-place">Awesome Link</Link>)
  )
  .add(
    "Custom color",
    withInfo()(() => (
      <Link href="#" type="hotpink">
        Awesome Link
      </Link>
    ))
  );
