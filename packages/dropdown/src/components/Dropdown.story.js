import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SmChevronUp } from "@crave/farmblocks-icon";
import { buttonVariants } from "@crave/farmblocks-button";

import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

storiesOf("Dropdown/Component", module)
  .add("With text", () => (
    <Dropdown text="Select fruit" handleSelection={action("handleSelection")}>
      <DropdownItem value={1} text="Banana" />
      <DropdownItem value={2}>Apple</DropdownItem>
      <DropdownItem value={3} text="Strawberry" />
    </Dropdown>
  ))
  .add("Icon only", () => (
    <Dropdown handleSelection={action("handleSelection")}>
      <DropdownItem value={1} text="Banana" />
      <DropdownItem value={2}>Apple</DropdownItem>
      <DropdownItem value={3} text="Strawberry" />
    </Dropdown>
  ))
  .add("Right aligned", () => (
    <div
      style={{
        width: 150,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Dropdown handleSelection={action("handleSelection")} align="right">
        <DropdownItem value={1} text="Banana" />
        <DropdownItem value={2}>Apple</DropdownItem>
        <DropdownItem value={3} text="Strawberry" />
      </Dropdown>
    </div>
  ))
  .add("With z-index", () => (
    <div
      style={{
        width: 250,
        background: "aliceblue",
        display: "flex",
        zIndex: 9,
      }}
    >
      <div style={{ marginRight: "10px" }}>z-index: 9</div>

      <Dropdown handleSelection={action("handleSelection")} zIndex={10}>
        <DropdownItem value={1} text="Banana" />
        <DropdownItem value={2}>Apple</DropdownItem>
        <DropdownItem value={3} text="Strawberry" />
      </Dropdown>

      <div
        style={{
          marginLeft: "10px",
          width: 75,
          height: 120,
          zIndex: 11,
          background: "rgba(0, 0, 0, 0.5)",
        }}
      >
        z-index: 11
      </div>
    </div>
  ))
  .add("Custom menu width", () => (
    <Dropdown
      text="Select fruit"
      handleSelection={action("handleSelection")}
      width="200px"
    >
      <DropdownItem value={1} text="Banana" />
      <DropdownItem value={2}>Apple</DropdownItem>
      <DropdownItem value={3} text="Strawberry" />
    </Dropdown>
  ))
  .add("With selected item", () => (
    <Dropdown
      text="Select fruit"
      handleSelection={action("handleSelection")}
      width="200px"
    >
      <DropdownItem value={1} text="Banana" />
      <DropdownItem value={2} selected>
        Apple
      </DropdownItem>
      <DropdownItem value={3} text="Strawberry" />
    </Dropdown>
  ))
  .add("With ref", () => (
    <Dropdown
      text="Select fruit"
      handleSelection={action("handleSelection")}
      innerRef={action("innerRef")}
    >
      <DropdownItem value={1} text="Banana" />
      <DropdownItem value={2}>Apple</DropdownItem>
      <DropdownItem value={3} text="Strawberry" />
    </Dropdown>
  ))
  .add("Small size", () => (
    <Dropdown
      buttonProps={{ small: true }}
      text="Select fruit"
      handleSelection={action("handleSelection")}
      innerRef={action("innerRef")}
    >
      <DropdownItem value={1} text="Banana" />
      <DropdownItem value={2}>Apple</DropdownItem>
      <DropdownItem value={3} text="Strawberry" />
    </Dropdown>
  ))
  .add("With maxHeight", () => (
    <Dropdown
      text="Select fruit"
      handleSelection={action("handleSelection")}
      maxHeight="100px"
    >
      <DropdownItem value={1} text="Banana" />
      <DropdownItem value={2}>Apple</DropdownItem>
      <DropdownItem value={3} text="Strawberry" />
      <DropdownItem value={4} text="Peach" />
      <DropdownItem value={5} text="Pear" />
      <DropdownItem value={6} text="Coconut" />
      <DropdownItem value={7} text="Peanut" />
    </Dropdown>
  ))
  .add("extended style", () => {
    const CustomItem = styled(DropdownItem)`
      background-color: mintcream;
      font-size: 1.5em;
    `;
    return (
      <Dropdown
        css="
        padding: 10px;
        .menuButton {
          background: azure;
          .icon {
            text-shadow: 0 8px 4px orchid;
          }
        }
      "
        text="Select fruit"
        handleSelection={action("handleSelection")}
      >
        <CustomItem value={1} text="Banana" />
        <CustomItem value={2}>Apple</CustomItem>
        <CustomItem value={3} text="Strawberry" />
      </Dropdown>
    );
  })
  .add("with buttonProps", () => (
    <Dropdown
      text="Select fruit"
      handleSelection={action("handleSelection")}
      buttonProps={{
        rightIcon: null,
        icon: <SmChevronUp />,
        variant: buttonVariants.PRIMARY,
        small: true,
      }}
    >
      <DropdownItem value={1} text="Banana" />
      <DropdownItem value={2}>Apple</DropdownItem>
      <DropdownItem value={3} text="Strawberry" />
    </Dropdown>
  ))
  .add("with custom trigger", () => (
    <Dropdown
      handleSelection={action("handleSelection")}
      trigger={<button>click</button>}
    >
      <DropdownItem value={1} text="Banana" />
      <DropdownItem value={2}>Apple</DropdownItem>
      <DropdownItem value={3} text="Strawberry" />
    </Dropdown>
  ));
