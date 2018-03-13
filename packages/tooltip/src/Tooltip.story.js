import React from "react";

import { storiesOf } from "@storybook/react";
import Card from '@crave/farmblocks-card';

import Tooltip from "./Tooltip";

storiesOf("Tooltip", module)
  .add("isVisible true - left aligned", () => (
    <div style={{ position: "relative", width: "250px", border: "1px solid" }}>
      <Tooltip isVisible text="This is a left aligned tooltip" />
    </div>
  ))
  .add("isVisible true - right aligned", () => (
    <div style={{ position: "relative", width: "250px", border: "1px solid" }}>
      <Tooltip isVisible text="This is a right aligned tooltip" align="right" />
    </div>
  ))
  .add("isVisible false", () => (
    <div style={{ position: "relative", width: "250px", border: "1px" }}>
      <Tooltip isVisible={false} text="Hey yo" />
    </div>
  ))
  .add("with card", () => (
    <div style={{ position: "relative", width: "250px", border: "1px solid" }}>
      <Tooltip isVisible={true}>
        <Card>
          this is a Card
        </Card>
      </Tooltip>
    </div>
  ))
  .add("empty", () => (
    <div style={{ position: "relative", width: "250px", border: "1px solid" }}>
      <Tooltip isVisible={true} />
    </div>
  ));
