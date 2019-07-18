import React from "react";

import { storiesOf } from "@storybook/react";
import Button, { buttonTypes } from "@crave/farmblocks-button";
import Text from "@crave/farmblocks-text";

import Tooltip, { POSITIONS } from ".";

storiesOf("Tooltip/Tooltip", module)
  .add("Bottom positioned", () => {
    const marginStyle = {
      margin: "40px",
    };
    return (
      <div style={{ display: "flex", flexDirection: "column", marginTop: 60 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={marginStyle}>
            <Tooltip
              trigger={<Button type={buttonTypes.SECONDARY}>Hover me</Button>}
              content="Bottom left aligned"
            />
          </div>

          <div style={marginStyle}>
            <Tooltip
              trigger={<Button type={buttonTypes.SECONDARY}>Hover me</Button>}
              content={<div>Bottom left aligned</div>}
              positionX={POSITIONS.X.CENTER}
            />
          </div>

          <div style={marginStyle}>
            <Tooltip
              trigger={<Button type={buttonTypes.SECONDARY}>Hover me</Button>}
              content={<div>Bottom right aligned</div>}
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
            <Tooltip
              trigger={<Text>Hover me</Text>}
              content="Bottom left aligned without arrow"
              hideArrow
            />
          </div>

          <div style={marginStyle}>
            <Tooltip
              trigger={<Text>Hover me</Text>}
              content="Bottom center aligned without arrow"
              hideArrow
              positionX={POSITIONS.X.CENTER}
            />
          </div>

          <div style={marginStyle}>
            <Tooltip
              trigger={<Text>Hover me</Text>}
              content="Bottom right aligned without arrow"
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
            <Tooltip
              trigger={<Button type={buttonTypes.SECONDARY}>Hover me</Button>}
              content="Top left aligned"
              positionY={POSITIONS.Y.TOP}
            />
          </div>

          <div style={marginStyle}>
            <Tooltip
              trigger={<Button type={buttonTypes.SECONDARY}>Hover me</Button>}
              content={<div>Top left aligned</div>}
              positionX={POSITIONS.X.CENTER}
              positionY={POSITIONS.Y.TOP}
            />
          </div>

          <div style={marginStyle}>
            <Tooltip
              trigger={<Button type={buttonTypes.SECONDARY}>Hover me</Button>}
              content={<div>Top right aligned</div>}
              positionX={POSITIONS.X.RIGHT}
              positionY={POSITIONS.Y.TOP}
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
            <Tooltip
              trigger={<Text>Hover me</Text>}
              content="Top left aligned without arrow"
              hideArrow
              positionY={POSITIONS.Y.TOP}
            />
          </div>

          <div style={marginStyle}>
            <Tooltip
              trigger={<Text>Hover me</Text>}
              content="Top center aligned without arrow"
              hideArrow
              positionX={POSITIONS.X.CENTER}
            />
          </div>

          <div style={marginStyle}>
            <Tooltip
              trigger={<Text>Hover me</Text>}
              content="Top right aligned without arrow"
              hideArrow
              positionX={POSITIONS.X.RIGHT}
              positionY={POSITIONS.Y.TOP}
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
        <Tooltip
          trigger={<Button type={buttonTypes.SECONDARY}>Hover me</Button>}
          content="Auto aligned/positioned tooltip"
          positionX={POSITIONS.X.AUTO}
          positionY={POSITIONS.Y.AUTO}
        />
        <Tooltip
          trigger={<Button type={buttonTypes.SECONDARY}>Hover me</Button>}
          content="Auto aligned/positioned tooltip"
          positionX={POSITIONS.X.AUTO}
          positionY={POSITIONS.Y.AUTO}
        />
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
        <Tooltip
          trigger={<Button type={buttonTypes.SECONDARY}>Hover me</Button>}
          content="Auto aligned/positioned tooltip"
          positionX={POSITIONS.X.AUTO}
          positionY={POSITIONS.Y.AUTO}
        />
        <Tooltip
          trigger={<Button type={buttonTypes.SECONDARY}>Hover me</Button>}
          content="Auto aligned/positioned tooltip"
          positionX={POSITIONS.X.AUTO}
          positionY={POSITIONS.Y.AUTO}
        />
      </div>
    </div>
  ))
  .add("auto aligned/positioned (with boundaries)", () => {
    // eslint-disable-next-line react/prop-types
    const BoundaryContainer = ({ children, ...props }) => (
      <div
        style={{
          border: "solid 1px orangered",
          height: 300,
          width: 600,
          margin: 60,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        {...props}
      >
        {children}
      </div>
    );
    return (
      <BoundaryContainer className="exampleContainer">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Tooltip
            trigger={<Button type={buttonTypes.SECONDARY}>Hover me</Button>}
            content="Auto aligned/positioned tooltip"
            positionX={POSITIONS.X.AUTO}
            positionY={POSITIONS.Y.AUTO}
            boundariesSelector=".exampleContainer"
          />
          <Tooltip
            trigger={<Button type={buttonTypes.SECONDARY}>Hover me</Button>}
            content="Auto aligned/positioned tooltip"
            positionX={POSITIONS.X.AUTO}
            positionY={POSITIONS.Y.AUTO}
            boundariesSelector=".exampleContainer"
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Tooltip
            trigger={<Button type={buttonTypes.SECONDARY}>Hover me</Button>}
            content="Auto aligned/positioned tooltip"
            positionX={POSITIONS.X.AUTO}
            positionY={POSITIONS.Y.AUTO}
            boundariesSelector=".exampleContainer"
          />
          <Tooltip
            trigger={<Button type={buttonTypes.SECONDARY}>Hover me</Button>}
            content="Auto aligned/positioned tooltip"
            positionX={POSITIONS.X.AUTO}
            positionY={POSITIONS.Y.AUTO}
            boundariesSelector=".exampleContainer"
          />
        </div>
      </BoundaryContainer>
    );
  });
