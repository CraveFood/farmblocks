import React from "react";
import { storiesOf } from "@storybook/react";
import { MdLocation } from "@crave/farmblocks-icon";

import Link from "./Link";
import linkTypes from "../constants/linkTypes";

storiesOf("Link/Normal", module)
  .add("Default - left aligned", () => (
    <Link href="#" type={linkTypes.NORMAL}>
      Awesome Link
    </Link>
  ))
  .add("right aligned", () => (
    <div style={{ width: "500px", textAlign: "right" }}>
      <Link href="#" type={linkTypes.NORMAL}>
        Awesome Link
      </Link>
    </div>
  ))
  .add("with left icon", () => (
    <Link href="#" type={linkTypes.NORMAL} leftIcon={<MdLocation />}>
      Awesome Link
    </Link>
  ))
  .add("with right icon", () => (
    <Link href="#" type={linkTypes.NORMAL} rightIcon={<MdLocation />}>
      Awesome Link
    </Link>
  ))
  .add("disabled", () => (
    <Link href="#" type={linkTypes.NORMAL} disabled>
      Awesome Link
    </Link>
  ))
  .add("external", () => (
    <Link href="#" type={linkTypes.NORMAL} external>
      Awesome Link
    </Link>
  ));
