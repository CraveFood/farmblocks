import React from "react";

import { storiesOf } from "@storybook/react";
import Card from "@crave/farmblocks-card";
import Button, { buttonTypes } from "@crave/farmblocks-button";
import Link from "@crave/farmblocks-link";

import { TooltipContent, POSITIONS } from ".";

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

storiesOf("Tooltip/TooltipContent", module)
  .add("Bottom positioned", () => {
    const marginStyle = {
      margin: "40px",
    };
    return (
      <div style={{ display: "flex", flexDirection: "column", marginTop: 60 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={marginStyle}>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
            <TooltipContent isVisible text="Bottom left aligned" />
          </div>

          <div style={marginStyle}>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
            <TooltipContent
              isVisible
              text="Bottom center aligned"
              positionX={POSITIONS.X.CENTER}
            />
          </div>

          <div style={marginStyle}>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
            <TooltipContent
              isVisible
              text="Bottom right aligned"
              positionX={POSITIONS.X.RIGHT}
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
            <TooltipContent
              isVisible
              text="Bottom left aligned without arrow"
              hideArrow
            />
          </div>

          <div style={marginStyle}>
            <Link>Trigger Ref</Link>
            <TooltipContent
              isVisible
              text="Bottom center aligned without arrow"
              hideArrow
              positionX={POSITIONS.X.CENTER}
            />
          </div>

          <div style={marginStyle}>
            <Link>Trigger Ref</Link>
            <TooltipContent
              isVisible
              text="Bottom right aligned without arrow"
              hideArrow
              positionX={POSITIONS.X.RIGHT}
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
            <TooltipContent
              isVisible
              text="Top left aligned"
              positionY={POSITIONS.Y.TOP}
            />
          </div>

          <div style={marginStyle}>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>

            <TooltipContent
              isVisible
              text="Top center aligned"
              positionY={POSITIONS.Y.TOP}
              positionX={POSITIONS.X.CENTER}
            />
          </div>

          <div style={marginStyle}>
            <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
            <TooltipContent
              isVisible
              text="Top right aligned"
              positionY={POSITIONS.Y.TOP}
              positionX={POSITIONS.X.RIGHT}
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
            <TooltipContent
              isVisible
              text="Top left aligned without arrow"
              positionY={POSITIONS.Y.TOP}
              hideArrow
            />
          </div>

          <div style={marginStyle}>
            <Link>Trigger Ref</Link>
            <TooltipContent
              isVisible
              text="Top center aligned without arrow"
              positionY={POSITIONS.Y.TOP}
              hideArrow
              positionX={POSITIONS.X.CENTER}
            />
          </div>

          <div style={marginStyle}>
            <Link>Trigger Ref</Link>
            <TooltipContent
              isVisible
              text="Top right aligned without arrow"
              positionY={POSITIONS.Y.TOP}
              hideArrow
              positionX={POSITIONS.X.RIGHT}
            />
          </div>
        </div>
      </div>
    );
  })
  .add("auto aligned/positioned", () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "calc(100vh - 30px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
          <TooltipContent
            positionX={POSITIONS.X.AUTO}
            positionY={POSITIONS.Y.AUTO}
            text="Auto aligned/positioned tooltip"
          />
        </div>
        <div>
          <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>
          <TooltipContent
            positionX={POSITIONS.X.AUTO}
            positionY={POSITIONS.Y.AUTO}
            text="Auto aligned/positioned tooltip"
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>

          <TooltipContent
            positionX={POSITIONS.X.AUTO}
            positionY={POSITIONS.Y.AUTO}
            text="Auto aligned/positioned tooltip"
          />
        </div>
        <div>
          <Button type={buttonTypes.SECONDARY}>Trigger Ref</Button>

          <TooltipContent
            positionX={POSITIONS.X.AUTO}
            positionY={POSITIONS.Y.AUTO}
            text="Auto aligned/positioned tooltip"
          />
        </div>
      </div>
    </div>
  ))
  .add("isVisible false", () => (
    <Container>
      <TooltipContent isVisible={false} text="Hey yo" />
    </Container>
  ))
  .add("with card", () => (
    <Container>
      <TooltipContent isVisible>
        <Card>this is a Card</Card>
      </TooltipContent>
    </Container>
  ))
  .add("without content", () => (
    <Container>
      <TooltipContent />
    </Container>
  ))

  .add("custom padding", () => (
    <Container>
      <TooltipContent
        isVisible
        text="Left aligned with custom padding"
        padding="30px"
      />
    </Container>
  ))
  .add("custom offset", () => (
    <Container>
      <TooltipContent
        isVisible
        text="Left aligned with custom top"
        offset="30vh"
      />
    </Container>
  ))
  .add("with content overflow hidden", () => (
    <Container>
      <TooltipContent isVisible padding="0" overflow="hidden">
        <div style={{ background: "aliceblue" }}>It should not overflow</div>
      </TooltipContent>
    </Container>
  ))
  .add("responsive", () => (
    <Container>
      <TooltipContent
        isVisible
        fullScreenBreakpoint="500px"
        text="Resize the window"
      />
    </Container>
  ))
  .add("extended style", () => (
    <Container>
      <TooltipContent
        css="
          text-decoration-line: underline overline;
        "
        isVisible
        text="This is a left aligned tooltip"
      />
    </Container>
  ));
