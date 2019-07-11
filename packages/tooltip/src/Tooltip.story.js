import React from "react";

import { storiesOf } from "@storybook/react";
import Card from "@crave/farmblocks-card";

import Tooltip, { alignments } from ".";

// eslint-disable-next-line react/prop-types
const Container = ({ children, style }) => (
  <div
    style={{
      position: "relative",
      width: "250px",
      border: "3px solid",
      ...style,
    }}
  >
    {children}
  </div>
);

storiesOf("Tooltip", module)
  .add("Bottom positioned", () => {
    const marginStyle = {
      margin: "40px",
    };
    return (
      <div style={{ display: "flex", flexDirection: "column", marginTop: 60 }}>
        <div style={{ display: "flex" }}>
          <Container style={marginStyle}>
            <Tooltip isVisible text="Bottom left aligned" />
          </Container>

          <Container style={marginStyle}>
            <Tooltip
              isVisible
              text="Bottom center aligned"
              align={alignments.CENTER}
            />
          </Container>

          <Container style={marginStyle}>
            <Tooltip
              isVisible
              text="Bottom right aligned"
              align={alignments.RIGHT}
            />
          </Container>
        </div>

        <div style={{ display: "flex" }}>
          <Container style={marginStyle}>
            <Tooltip
              isVisible
              text="Bottom left aligned without arrow"
              hideArrow
            />
          </Container>

          <Container style={marginStyle}>
            <Tooltip
              isVisible
              text="Bottom center aligned without arrow"
              hideArrow
              align={alignments.CENTER}
            />
          </Container>

          <Container style={marginStyle}>
            <Tooltip
              isVisible
              text="Bottom right aligned without arrow"
              hideArrow
              align={alignments.RIGHT}
            />
          </Container>
        </div>
      </div>
    );
  })
  .add("Top positioned", () => {
    const marginStyle = {
      margin: "40px",
    };
    return (
      <div style={{ display: "flex", flexDirection: "column", marginTop: 60 }}>
        <div style={{ display: "flex" }}>
          <Container style={marginStyle}>
            <Tooltip isVisible text="Top left aligned" position="top" />
          </Container>

          <Container style={marginStyle}>
            <Tooltip
              isVisible
              text="Top center aligned"
              position="top"
              align={alignments.CENTER}
            />
          </Container>

          <Container style={marginStyle}>
            <Tooltip
              isVisible
              text="Top right aligned"
              position="top"
              align={alignments.RIGHT}
            />
          </Container>
        </div>

        <div style={{ display: "flex" }}>
          <Container style={marginStyle}>
            <Tooltip
              isVisible
              text="Top left aligned without arrow"
              position="top"
              hideArrow
            />
          </Container>

          <Container style={marginStyle}>
            <Tooltip
              isVisible
              text="Top center aligned without arrow"
              position="top"
              hideArrow
              align={alignments.CENTER}
            />
          </Container>

          <Container style={marginStyle}>
            <Tooltip
              isVisible
              text="Top right aligned without arrow"
              position="top"
              hideArrow
              align={alignments.RIGHT}
            />
          </Container>
        </div>
      </div>
    );
  })
  .add("isVisible false", () => (
    <Container>
      <Tooltip isVisible={false} text="Hey yo" />
    </Container>
  ))
  .add("with card", () => (
    <Container>
      <Tooltip isVisible>
        <Card>this is a Card</Card>
      </Tooltip>
    </Container>
  ))
  .add("without content", () => (
    <Container>
      <Tooltip />
    </Container>
  ))
  .add("auto aligned", () => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Container style={{ width: "50px" }}>
        <Tooltip
          align={alignments.AUTO}
          text="This is an auto aligned tooltip"
        />
      </Container>
      <Container style={{ width: "50px" }}>
        <Tooltip
          align={alignments.AUTO}
          text="This is an auto aligned tooltip"
        />
      </Container>
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
    <Container>
      <Tooltip
        isVisible
        text="Left aligned with custom padding"
        padding="30px"
      />
    </Container>
  ))
  .add("custom offset", () => (
    <Container>
      <Tooltip isVisible text="Left aligned with custom top" offset="30vh" />
    </Container>
  ))
  .add("with content overflow hidden", () => (
    <Container>
      <Tooltip isVisible padding="0" overflow="hidden">
        <div style={{ background: "aliceblue" }}>It should not overflow</div>
      </Tooltip>
    </Container>
  ))
  .add("extended style", () => (
    <Container>
      <Tooltip
        css="
          text-decoration-line: underline overline;
        "
        isVisible
        text="This is a left aligned tooltip"
      />
    </Container>
  ));
