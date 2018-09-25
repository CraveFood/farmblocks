import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Card from "@crave/farmblocks-card";

import Tooltip, { alignments } from "./";

storiesOf("Tooltip", module)
  .add(
    "isVisible true - left aligned",
    withInfo()(() => (
      <div
        style={{ position: "relative", width: "250px", border: "1px solid" }}
      >
        <Tooltip isVisible text="This is a left aligned tooltip" />
      </div>
    ))
  )
  .add(
    "isVisible true - right aligned",
    withInfo()(() => (
      <div
        style={{ position: "relative", width: "250px", border: "1px solid" }}
      >
        <Tooltip
          isVisible
          text="This is a right aligned tooltip"
          align={alignments.RIGHT}
        />
      </div>
    ))
  )
  .add(
    "isVisible true - center aligned",
    withInfo()(() => (
      <div
        style={{ position: "relative", width: "350px", border: "1px solid" }}
      >
        <Tooltip
          isVisible
          text="This is a center aligned tooltip"
          align={alignments.CENTER}
        />
      </div>
    ))
  )
  .add(
    "isVisible true - hideArrow",
    withInfo()(() => (
      <div
        style={{ position: "relative", width: "250px", border: "1px solid" }}
      >
        <Tooltip isVisible hideArrow>
          This is a left aligned tooltip without arrow
        </Tooltip>
      </div>
    ))
  )
  .add(
    "isVisible false",
    withInfo()(() => (
      <div style={{ position: "relative", width: "250px", border: "1px" }}>
        <Tooltip isVisible={false} text="Hey yo" />
      </div>
    ))
  )
  .add(
    "with card",
    withInfo()(() => (
      <div
        style={{ position: "relative", width: "250px", border: "1px solid" }}
      >
        <Tooltip isVisible={true}>
          <Card>this is a Card</Card>
        </Tooltip>
      </div>
    ))
  )
  .add(
    "without content",
    withInfo()(() => (
      <div
        style={{ position: "relative", width: "250px", border: "1px solid" }}
      >
        <Tooltip />
      </div>
    ))
  )
  .add(
    "auto aligned",
    withInfo()(() => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <div
          style={{ position: "relative", width: "50px", border: "1px solid" }}
        >
          <Tooltip
            align={alignments.AUTO}
            text="This is an auto aligned tooltip"
          />
        </div>
        <div
          style={{ position: "relative", width: "50px", border: "1px solid" }}
        >
          <Tooltip
            align={alignments.AUTO}
            text="This is an auto aligned tooltip"
          />
        </div>
      </div>
    ))
  )
  .add(
    "auto aligned (with bondaries)",
    withInfo()(() => (
      <div
        style={{
          border: "solid 1px orangered",
          display: "flex",
          justifyContent: "space-between",
          width: "600px"
        }}
        className="exampleContainer"
      >
        <div
          style={{ position: "relative", width: "50px", border: "1px solid" }}
        >
          Child
          <Tooltip
            align={alignments.AUTO}
            text="This is an auto aligned tooltip"
            bondariesSelector=".exampleContainer"
          />
        </div>
        <div
          style={{ position: "relative", width: "50px", border: "1px solid" }}
        >
          Child
          <Tooltip
            align={alignments.AUTO}
            text="This is an auto aligned tooltip"
            bondariesSelector=".exampleContainer"
          />
        </div>
      </div>
    ))
  )
  .add(
    "custom padding",
    withInfo()(() => (
      <div
        style={{ position: "relative", width: "250px", border: "1px solid" }}
      >
        <Tooltip
          isVisible
          text="Left aligned with custom padding"
          padding="30px"
        />
      </div>
    ))
  )
  .add(
    "custom top",
    withInfo()(() => (
      <div
        style={{ position: "relative", width: "250px", border: "1px solid" }}
      >
        <Tooltip isVisible text="Left aligned with custom top" top="30vh" />
      </div>
    ))
  )
  .add(
    "with content overflow hidden",
    withInfo()(() => (
      <div
        style={{ position: "relative", width: "250px", border: "1px solid" }}
      >
        <Tooltip isVisible padding="0" overflow="hidden">
          <div style={{ background: "aliceblue" }}>It should not overflow</div>
        </Tooltip>
      </div>
    ))
  );
