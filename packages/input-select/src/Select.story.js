import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";

import Select from ".";

const items = [
  { value: "1", label: "Apple" },
  { value: "2", label: "Banana" },
  { value: "3", label: "Pear" }
];

const Wrapper = styled.div`width: 200px;`;

storiesOf("Select", "module")
  .add(
    "Default",
    withInfo()(() => (
      <Wrapper>
        <Select
          placeholder="Select fruit"
          label="Fruit"
          items={items}
          onChange={action("onChange")}
        />
      </Wrapper>
    ))
  )
  .add(
    "With value",
    withInfo()(() => (
      <Wrapper>
        <Select
          placeholder="Select fruit"
          label="Fruit"
          items={items}
          onChange={action("onChange")}
          value={items[1].value}
        />
      </Wrapper>
    ))
  )
  .add(
    "With errors",
    withInfo()(() => (
      <Wrapper>
        <Select
          placeholder="Select fruit"
          label="Fruit"
          items={items}
          onChange={action("onChange")}
          validationMessages={["Select at least one option"]}
        />
      </Wrapper>
    ))
  )
  .add(
    "Disabled",
    withInfo()(() => (
      <Wrapper>
        <Select
          placeholder="Select fruit"
          label="Fruit"
          items={items}
          onChange={action("onChange")}
          value={items[1].value}
          disabled
        />
      </Wrapper>
    ))
  );
