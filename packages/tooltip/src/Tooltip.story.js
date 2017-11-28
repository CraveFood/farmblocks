import React from "react";

import { storiesOf } from "@storybook/react";

import Tooltip from "./Tooltip";

storiesOf("Tooltip", module)
  .add("isVisible true - left aligned", () => (
    <div style={{ position: "relative", width: "250px", border: "1px solid" }}>
      <Tooltip isVisible text="Hey yo" />
    </div>
  ))
  .add("isVisible true - right aligned", () => (
    <div style={{ position: "relative", width: "250px", border: "1px solid" }}>
      <Tooltip isVisible text="Hey yo" align="right" />
    </div>
  ))
  .add("isVisible false", () => (
    <div style={{ position: "relative", width: "250px", border: "1px" }}>
      <Tooltip isVisible={false} text="Hey yo" />
    </div>
  ));
