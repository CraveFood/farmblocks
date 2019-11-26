import React from "react";

import { storiesOf } from "@storybook/react";
import Button, { buttonTypes } from "@crave/farmblocks-button";
import Text from "@crave/farmblocks-text";
import { MdQuestion } from "@crave/farmblocks-icon";

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
              positionY={POSITIONS.Y.TOP}
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
  .add("with fullscreen breakpoint", () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Tooltip
          trigger={<Button type={buttonTypes.SECONDARY}>Mobile</Button>}
          content="Use mobile breakpoint to see this popover on fullscreen."
          positionX={POSITIONS.X.AUTO}
          positionY={POSITIONS.Y.AUTO}
          fullScreenBreakpoint="500px"
        />
        <Tooltip
          trigger={<MdQuestion css="display:block;" />}
          content="On mobile the minimum hit area is 40px height/width"
          positionX={POSITIONS.X.AUTO}
          positionY={POSITIONS.Y.AUTO}
          fullScreenBreakpoint="500px"
          css={{
            ".hit-area": {
              border: "2px solid orange",
              boxSizing: "border-box",
            },
          }}
        />
        <Tooltip
          trigger={
            <Button type={buttonTypes.SECONDARY}>With hide button</Button>
          }
          content="Tap Got it! to close the popover"
          positionX={POSITIONS.X.AUTO}
          positionY={POSITIONS.Y.AUTO}
          hideButtonLabel="Got it!"
          fullScreenBreakpoint="500px"
        />
      </div>
    </div>
  ))
  .add("auto positioned considering TOP boundaries", () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 400,
        background: "aliceblue",
      }}
    >
      <div style={{ background: "beige", height: 180 }} />

      <Tooltip
        trigger={
          <div css="padding: 10px; background: orange">
            Hover me - Resize window up to the blue boundary. The tooltip should
            open on the bottom
          </div>
        }
        content={
          <div
            css="
            height: 150px;
            width: 150px;
            background-image: linear-gradient(red, yellow)
            "
          />
        }
        positionX={POSITIONS.X.AUTO}
        positionY={POSITIONS.Y.AUTO}
      />
    </div>
  ));
