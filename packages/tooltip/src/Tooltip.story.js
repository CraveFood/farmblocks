import React from "react";

import { storiesOf } from "@storybook/react";
import Card from "@crave/farmblocks-card";
import Button, { buttonTypes } from "@crave/farmblocks-button";
import Link from "@crave/farmblocks-link";

import Tooltip, { alignments, positions } from ".";

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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={marginStyle}>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
            <Tooltip isVisible text="Bottom left aligned" />
          </div>

          <div style={marginStyle}>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
            <Tooltip
              isVisible
              text="Bottom center aligned"
              align={alignments.CENTER}
            />
          </div>

          <div style={marginStyle}>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
            <Tooltip
              isVisible
              text="Bottom right aligned"
              align={alignments.RIGHT}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 80,
          }}
        >
          <div style={marginStyle}>
            <Link>Trigger Ref</Link>
            <Tooltip
              isVisible
              text="Bottom left aligned without arrow"
              hideArrow
            />
          </div>

          <div style={marginStyle}>
            <Link>Trigger Ref</Link>
            <Tooltip
              isVisible
              text="Bottom center aligned without arrow"
              hideArrow
              align={alignments.CENTER}
            />
          </div>

          <div style={marginStyle}>
            <Link>Trigger Ref</Link>
            <Tooltip
              isVisible
              text="Bottom right aligned without arrow"
              hideArrow
              align={alignments.RIGHT}
            />
          </div>
        </div>
      </div>
    );
  })
  .add("Top positioned", () => {
    const marginStyle = {
      margin: "40px",
      border: "none",
    };
    return (
      <div style={{ display: "flex", flexDirection: "column", marginTop: 60 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={marginStyle}>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
            <Tooltip
              isVisible
              text="Top left aligned"
              position={positions.TOP}
            />
          </div>

          <div style={marginStyle}>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>

            <Tooltip
              isVisible
              text="Top center aligned"
              position={positions.TOP}
              align={alignments.CENTER}
            />
          </div>

          <div style={marginStyle}>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
            <Tooltip
              isVisible
              text="Top right aligned"
              position={positions.TOP}
              align={alignments.RIGHT}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 80,
          }}
        >
          <div style={marginStyle}>
            <Link>Trigger Ref</Link>
            <Tooltip
              isVisible
              text="Top left aligned without arrow"
              position={positions.TOP}
              hideArrow
            />
          </div>

          <div style={marginStyle}>
            <Link>Trigger Ref</Link>
            <Tooltip
              isVisible
              text="Top center aligned without arrow"
              position={positions.TOP}
              hideArrow
              align={alignments.CENTER}
            />
          </div>

          <div style={marginStyle}>
            <Link>Trigger Ref</Link>
            <Tooltip
              isVisible
              text="Top right aligned without arrow"
              position={positions.TOP}
              hideArrow
              align={alignments.RIGHT}
            />
          </div>
        </div>
      </div>
    );
  })
  .add("auto aligned/positioned", () => (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
          <Tooltip
            align={alignments.AUTO}
            position={positions.AUTO}
            text="Auto aligned/positioned tooltip"
          />
        </div>
        <div>
          <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
          <Tooltip
            align={alignments.AUTO}
            position={positions.AUTO}
            text="Auto aligned/positioned tooltip"
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          position: "fixed",
          bottom: 0,
        }}
      >
        <div>
          <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>

          <Tooltip
            align={alignments.AUTO}
            position={positions.AUTO}
            text="Auto aligned/positioned tooltip"
          />
        </div>
        <div>
          <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>

          <Tooltip
            align={alignments.AUTO}
            position={positions.AUTO}
            text="Auto aligned/positioned tooltip"
          />
        </div>
      </div>
    </div>
  ))
  .add("auto aligned/positioned (with boundaries)", () => {
    // eslint-disable-next-line react/prop-types
    const BoundaryContainer = ({ children, style, ...props }) => (
      <div
        style={{
          border: "solid 1px orangered",
          display: "flex",
          justifyContent: "space-between",
          width: "600px",
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
    return (
      <div>
        <BoundaryContainer className="exampleContainer">
          <div>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
            <Tooltip
              align={alignments.AUTO}
              text="Auto aligned tooltip"
              boundariesSelector=".exampleContainer"
            />
          </div>

          <div>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
            <Tooltip
              align={alignments.AUTO}
              text="Auto aligned tooltip"
              boundariesSelector=".exampleContainer"
            />
          </div>
        </BoundaryContainer>

        <BoundaryContainer
          style={{ marginTop: 200 }}
          className="exampleContainer"
        >
          <div>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>

            <Tooltip
              align={alignments.AUTO}
              position={positions.AUTO}
              text="Auto aligned/positioned tooltip"
              boundariesSelector=".exampleContainer"
            />
          </div>

          <div>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>

            <Tooltip
              align={alignments.AUTO}
              position={positions.AUTO}
              text="Auto aligned/positioned tooltip"
              boundariesSelector=".exampleContainer"
            />
          </div>
        </BoundaryContainer>
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
