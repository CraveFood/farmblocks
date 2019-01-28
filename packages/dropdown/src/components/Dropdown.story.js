import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import { buttonSizes } from "../index";

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
        justifyContent: "flex-end"
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
        zIndex: 9
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
          background: "rgba(0, 0, 0, 0.5)"
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
      size={buttonSizes.SMALL}
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
  ));
