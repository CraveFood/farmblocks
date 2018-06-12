import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";

import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

storiesOf("Dropdown/Component", module)
  .add(
    "With text",
    withInfo()(() => (
      <Dropdown text="Select fruit" handleSelection={action("handleSelection")}>
        <DropdownItem value={1} text="Banana" />
        <DropdownItem value={2}>Apple</DropdownItem>
        <DropdownItem value={3} text="Strawberry" />
      </Dropdown>
    ))
  )
  .add(
    "Icon only",
    withInfo()(() => (
      <Dropdown handleSelection={action("handleSelection")}>
        <DropdownItem value={1} text="Banana" />
        <DropdownItem value={2}>Apple</DropdownItem>
        <DropdownItem value={3} text="Strawberry" />
      </Dropdown>
    ))
  )
  .add(
    "Right aligned",
    withInfo()(() => (
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
  )
  .add(
    "With z-index",
    withInfo()(() => (
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
  )
  .add(
    "Custom menu width",
    withInfo()(() => (
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
  )
  .add(
    "With selected item",
    withInfo()(() => (
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
  )
  .add(
    "With ref",
    withInfo()(() => (
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
  );
