import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Link from "./Link";

storiesOf("Link", module)
  .add(
    "Primary link - left aligned",
    withInfo()(() => <Link>Awesome Link</Link>   
  ))
  .add(
    "Primary link - right aligned",
    withInfo()(() => <Link align="right">Awesome Link</Link>
  ))
  .add(
    "Disabled link - left aligned",
    withInfo()(() => <Link type="DISABLED">Awesome Link</Link>
  ))
  .add(
    "Disabled link - right aligned",
    withInfo()(() => <Link type="DISABLED" align="right">Awesome Link</Link>
  ));;
