import React from "react";

import { storiesOf } from "@storybook/react";
import Card from "@crave/farmblocks-card";

import Tooltip, { alignments } from ".";

storiesOf("Tooltip", module)
  .add("isVisible true - left aligned", () => (
    <div style={{ position: "relative", width: "250px", border: "1px solid" }}>
      <Tooltip isVisible text="This is a left aligned tooltip" />
    </div>
  ))
  .add("isVisible true - right aligned", () => (
    <div style={{ position: "relative", width: "250px", border: "1px solid" }}>
      <Tooltip
        isVisible
        text="This is a right aligned tooltip"
        align={alignments.RIGHT}
      />
    </div>
  ))
  .add("isVisible true - center aligned", () => (
    <div style={{ position: "relative", width: "350px", border: "1px solid" }}>
      <Tooltip
        isVisible
        text="This is a center aligned tooltip"
        align={alignments.CENTER}
      />
    </div>
  ))
  .add("isVisible true - hideArrow", () => (
    <div style={{ position: "relative", width: "250px", border: "1px solid" }}>
      <Tooltip isVisible hideArrow>
        This is a left aligned tooltip without arrow
      </Tooltip>
    </div>
  ))
  .add("isVisible false", () => (
    <div style={{ position: "relative", width: "250px", border: "1px" }}>
      <Tooltip isVisible={false} text="Hey yo" />
    </div>
  ))
  .add("with card", () => (
    <div style={{ position: "relative", width: "250px", border: "1px solid" }}>
      <Tooltip isVisible>
        <Card>this is a Card</Card>
      </Tooltip>
    </div>
  ))
  .add("without content", () => (
    <div style={{ position: "relative", width: "250px", border: "1px solid" }}>
      <Tooltip />
    </div>
  ))
  .add("auto aligned", () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div style={{ position: "relative", width: "50px", border: "1px solid" }}>
        <Tooltip
          align={alignments.AUTO}
          text="This is an auto aligned tooltip"
        />
      </div>
      <div style={{ position: "relative", width: "50px", border: "1px solid" }}>
        <Tooltip
          align={alignments.AUTO}
          text="This is an auto aligned tooltip"
        />
      </div>
    </div>
  ))
  .add("auto aligned (with bondaries)", () => (
    <div
      style={{
        border: "solid 1px orangered",
        display: "flex",
        justifyContent: "space-between",
        width: "600px",
      }}
      className="exampleContainer"
    >
      <div style={{ position: "relative", width: "50px", border: "1px solid" }}>
        Child
        <Tooltip
          align={alignments.AUTO}
          text="This is an auto aligned tooltip"
          bondariesSelector=".exampleContainer"
        />
      </div>
      <div style={{ position: "relative", width: "50px", border: "1px solid" }}>
        Child
        <Tooltip
          align={alignments.AUTO}
          text="This is an auto aligned tooltip"
          bondariesSelector=".exampleContainer"
        />
      </div>
    </div>
  ))
  .add("custom padding", () => (
    <div style={{ position: "relative", width: "250px", border: "1px solid" }}>
      <Tooltip
        isVisible
        text="Left aligned with custom padding"
        padding="30px"
      />
    </div>
  ))
  .add("custom top", () => (
    <div style={{ position: "relative", width: "250px", border: "1px solid" }}>
      <Tooltip isVisible text="Left aligned with custom top" top="30vh" />
    </div>
  ))
  .add("with content overflow hidden", () => (
    <div style={{ position: "relative", width: "250px", border: "1px solid" }}>
      <Tooltip isVisible padding="0" overflow="hidden">
        <div style={{ background: "aliceblue" }}>It should not overflow</div>
      </Tooltip>
    </div>
  ));
