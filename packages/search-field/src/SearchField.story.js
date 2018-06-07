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

const Footer = () => (
  <div
    style={{
      background: "limegreen",
      padding: 16
    }}
  >
    This is a footer
  </div>
);

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
  .add("Default", withInfo()(() => <SearchField label="Fruits" />))
  .add(
    "custom width",
    withInfo()(() => <SearchField width="50%" label="Fruits" />)
  )
  .add(
    "withItems",
    withInfo()(() => <SearchField items={items} label="Fruits" />)
  )
  .add(
    "with selected item",
    withInfo()(() => <SearchField value="2" items={items} label="Fruits" />)
  )
  .add(
    "onChange (debounced)",
    withInfo()(() => (
      <SearchField onChange={action("onChange")} items={items} label="Fruits" />
    ))
  )
  .add(
    "onSelect",
    withInfo()(() => (
      <SearchField onSelect={action("onSelect")} items={items} label="Fruits" />
    ))
  )
  .add(
    "onChange + onSelect",
    withInfo()(() => (
      <SearchField
        onChange={action("onChange")}
        onSelect={action("onSelect")}
        items={items}
        label="Fruits"
      />
    ))
  )
  .add(
    "onScrollReachEnd",
    withInfo()(() => (
      <SearchField
        onScrollReachEnd={action("onScrollReachEnd")}
        items={manyItems}
        label="Fruits"
      />
    ))
  )
  .add(
    "with footer",
    withInfo()(() => (
      <SearchField footer={<Footer />} items={items} label="Fruits" />
    ))
  )
  .add(
    "loading",
    withInfo(`
      \`footer\` can be used for multiple purposes. For example, to display a loading spinner
    `)(() => (
      <SearchField
        footer={
          <Loading>
            <i className="wg-loading" />
          </Loading>
        }
        label="Fruits"
      />
    ))
  )
  .add("disabled", withInfo()(() => <SearchField disabled label="Fruits" />))
  .add(
    "custom debounce delay",
    withInfo()(() => (
      <SearchField
        onChange={action("onChange")}
        debounceDelay={3000}
        placeholder="3s delay"
        label="Fruits"
      />
    ))
  )
  .add(
    "custom menu height",
    withInfo()(() => (
      <SearchField items={manyItems} maxMenuHeight={150} label="Fruits" />
    ))
  );
