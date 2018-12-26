import React from "react";
import { storiesOf } from "@storybook/react";

import BrieflyDisplay from "./BrieflyDisplay";

storiesOf("Alert (private)/BrieflyDisplay", module)
  .add("default", () => (
    <BrieflyDisplay>
      <p>this text should be displayed for the default time</p>
    </BrieflyDisplay>
  ))
  .add("display for 5 seconds", () => (
    <BrieflyDisplay time={5000}>
      <p>This text should be displayed for 5 seconds</p>
    </BrieflyDisplay>
  ));
