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

storiesOf("Search Field", module)
  .add("Default", withInfo()(() => <SearchField label="Fruits" />))
  .add(
    "custom width",
    withInfo()(() => <SearchField width="50%" label="Fruits" />)
  )
  .add(
    "with items",
    withInfo()(() => <SearchField items={items} label="Fruits" />)
  )
  .add(
    "with validation message",
    withInfo()(() => (
      <SearchField
        validationMessages={["One error", "Another error"]}
        items={items}
        label="Fruits"
      />
    ))
  )
  .add(
    "with empty items array",
    withInfo()(() => (
      <SearchField
        items={[]}
        placeholder="Click here. Menu should not open"
        width={600}
        label="Fruits"
      />
    ))
  )
  .add(
    "with selected item",
    withInfo()(() => <SearchField value="2" items={items} label="Fruits" />)
  )
  .add(
    "onSearchChange (debounced)",
    withInfo()(() => (
      <SearchField
        onSearchChange={action("onSearchChange")}
        items={items}
        label="Fruits"
      />
    ))
  )
  .add(
    "onChange",
    withInfo()(() => (
      <SearchField onChange={action("onChange")} items={items} label="Fruits" />
    ))
  )
  .add(
    "onSearchChange + onChange",
    withInfo()(() => (
      <SearchField
        onSearchChange={action("onSearchChange")}
        onChange={action("onChange")}
        items={items}
        label="Fruits"
      />
    ))
  )
  .add(
    "onSearchChange + onChange + custom keys",
    withInfo()(() => (
      <SearchField
        onSearchChange={action("onSearchChange")}
        onChange={action("onChange")}
        items={items.map(x => ({
          code: x.value,
          name: x.label,
          photo: x.image
        }))}
        valueKey="code"
        labelKey="name"
        imageKey="photo"
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
        onSearchChange={action("onSearchChange")}
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
  )
  .add(
    "Z-index",
    withInfo()(() => (
      <div>
        <div
          style={{
            width: 200,
            height: 400,
            top: 150,
            position: "absolute",
            zIndex: 10,
            background: "gray"
          }}
        >
          Z-index: 10
        </div>
        <SearchField items={items} label="Fruits" zIndex={11} />
        <div
          style={{
            width: 300,
            height: 200,
            top: 150,
            left: 100,
            position: "absolute",
            zIndex: 12,
            background: "blue"
          }}
        >
          Z-index: 12
        </div>
      </div>
    ))
  )
  .add(
    "update items every 3 seconds",
    withInfo()(() => {
      const itemsA = items;
      const itemsB = [{ value: "444", label: "Avocado", image }];
      const valueA = "2";
      const valueB = "444";

      class Test extends React.Component {
        state = {
          items: [],
          count: 0,
          value: "2"
        };

        componentDidMount = () => {
          this.interval = window.setInterval(() => {
            const items = this.state.count % 2 ? itemsA : itemsB;
            const value = this.state.count % 2 ? valueA : valueB;
            this.setState({
              items,
              value,
              count: this.state.count + 1
            });
          }, 3000);
        };
        componentWillUnmount = () => {
          window.clearInterval(this.interval);
        };

        render() {
          return (
            <SearchField
              value={this.state.value}
              items={this.state.items}
              label="Fruits"
            />
          );
        }
      }

      return <Test />;
    })
  )
  .add(
    "update items and keep value the same",
    withInfo()(() => {
      const items = [{ value: 1, label: "Apple", image }];
      const newItems = [{ value: 1, label: "A new Apple", image }];
      class SearchTest extends React.Component {
        state = {
          items,
          value: 1
        };

        changeItems = () => {
          this.setState({
            items: newItems
          });
        };

        render() {
          return (
            <div>
              <SearchField
                value={this.state.value}
                items={this.state.items}
                label="Fruits"
              />
              <br />
              <button onClick={this.changeItems}>Change items</button>
            </div>
          );
        }
      }

      return <SearchTest />;
    })
  );
