import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Link from "./Link";
import linkTypes from "./constants/linkTypes";

storiesOf("Link/Normal", module)
  .add(
    "Default - left aligned",
    withInfo()(() => (
      <Link href="#" type={linkTypes.NORMAL}>
        Awesome Link
      </Link>
    ))
  )
  .add(
    "right aligned",
    withInfo()(() => (
      <div style={{ width: "500px", textAlign: "right" }}>
        <Link href="#" type={linkTypes.NORMAL}>
          Awesome Link
        </Link>
      </div>
    ))
  )
  .add(
    "with left icon",
    withInfo()(() => (
      <Link href="#" type={linkTypes.NORMAL} leftIcon="wg-place">
        Awesome Link
      </Link>
    ))
  )
  .add(
    "disabled",
    withInfo()(() => (
      <Link href="#" type={linkTypes.NORMAL} disabled>
        Awesome Link
      </Link>
    ))
  )
  .add(
    "external",
    withInfo()(() => (
      <Link href="#" type={linkTypes.NORMAL} external>
        Awesome Link
      </Link>
    ))
  );
