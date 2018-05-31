import React from "react";
import { storiesOf, action } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled, { keyframes } from "styled-components";

import SearchField from ".";

const image = "https://picsum.photos/100";
const items = [
  { value: "1", label: "Apple", image },
  { value: "2", label: "Banana", image },
  { value: "3", label: "Pear", image }
];
const manyItems = [
  ...items,
  { value: "4", label: "Avocado", image },
  { value: "5", label: "Blueberry", image },
  { value: "6", label: "Cherry", image },
  { value: "7", label: "Coconut", image },
  { value: "8", label: "Grape", image },
  { value: "9", label: "Lemon", image },
  { value: "10", label: "Mango", image },
  { value: "11", label: "Peach", image },
  { value: "12", label: "Orange", image },
  { value: "13", label: "Star fruit", image },
  { value: "14", label: "Papaya", image },
  { value: "15", label: "Watermelon", image },
  { value: "16", label: "Dragonfruit", image },
  { value: "17", label: "Lychee", image }
];

const spin = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;
const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 0.5em;

  i {
    animation: ${spin} 2s linear infinite;
  }
`;

storiesOf("Search Field", "module")
  .add("Default", withInfo()(() => <SearchField />))
  .add("custom width", withInfo()(() => <SearchField width="50%" />))
  .add("with value", withInfo()(() => <SearchField value="999" />))
  .add(
    "with displayValue",
    withInfo(
      `Use \`displayValue\` whenever you need a human friendly value while keeping the original \`value\` as an id or slug`
    )(() => <SearchField value="999" displayValue="Jackfruit" />)
  )
  .add(
    "withItems",
    withInfo()(() => <SearchField items={items} label="Fruits" />)
  )
  .add(
    "onChange (debounced)",
    withInfo()(() => (
      <SearchField items={items} label="Fruits" onChange={action("onChange")} />
    ))
  )
  .add(
    "onSelect",
    withInfo()(() => (
      <SearchField items={items} label="Fruits" onSelect={action("onSelect")} />
    ))
  )
  .add(
    "onScrollReachEnd",
    withInfo()(() => (
      <SearchField
        items={manyItems}
        label="Fruits"
        onScrollReachEnd={action("onScrollReachEnd")}
      />
    ))
  )
  .add(
    "loading",
    withInfo(`
      This controls both the visibility and the visual of the loading indicator:
      - Pass a node to render it at the end of the list.
      - Pass a falsy value or remove the prop to hide the loading indicator.
    `)(() => (
      <SearchField
        label="Fruits"
        loading={
          <Loading>
            <i className="wg-loading" />
          </Loading>
        }
      />
    ))
  )
  .add("disabled", withInfo()(() => <SearchField label="Fruits" disabled />))
  .add(
    "custom debounce delay",
    withInfo()(() => (
      <SearchField
        label="Fruits"
        onChange={action("onChange")}
        debounceDelay={3000}
        placeholder="3s delay"
      />
    ))
  )
  .add(
    "custom menu height",
    withInfo()(() => (
      <SearchField items={manyItems} label="Fruits" maxMenuHeight={150} />
    ))
  );
