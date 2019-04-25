import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Image from "@crave/farmblocks-image";

import Select, { fontSizes } from ".";

const items = [
  { value: "1", label: "Apple" },
  { value: "2", label: "Banana" },
  { value: "3", label: "Pear" },
];

const moreItems = [
  ...items,
  { value: "4", label: "Strawberry" },
  { value: "5", label: "Peach" },
  { value: "6", label: "Coconut" },
];

const imgSrc = "https://picsum.photos/100?image=0";
const addImage = (item, index) => ({
  ...item,
  image: `${imgSrc}?image=${index + 1000}`,
});

storiesOf("Select Input", module)
  .add("Default", () => (
    <Select
      placeholder="Select fruit"
      label="Fruit"
      items={items}
      onChange={action("onChange")}
    />
  ))
  .add("Default with id", () => (
    <Select
      placeholder="Select fruit"
      id="select-fruit"
      label="Fruit"
      items={items}
      onChange={action("onChange")}
    />
  ))
  .add("With value", () => (
    <Select
      placeholder="Select fruit"
      label="Fruit"
      items={items}
      onChange={action("onChange")}
      value={items[1].value}
    />
  ))
  .add("With errors", () => (
    <Select
      placeholder="Select fruit"
      label="Fruit"
      items={items}
      onChange={action("onChange")}
      validationMessages={["Select at least one option"]}
    />
  ))
  .add("Custom items", () => (
    <Select
      placeholder="Select fruit"
      label="Fruit"
      items={items.map(item => ({ ...item, image: imgSrc }))}
      onChange={action("onChange")}
      renderItem={(item, selected) => (
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              marginRight: 16,
            }}
          >
            {item.label}
            {selected && <i className="icon wg-check" />}
          </span>
          <Image src={item.image} />
        </div>
      )}
    />
  ))
  .add("Disabled", () => (
    <Select
      placeholder="Select fruit"
      label="Fruit"
      items={items}
      onChange={action("onChange")}
      value={items[1].value}
      disabled
    />
  ))
  .add("Search (autocomplete) disabled", () => (
    <Select
      placeholder="Select fruit"
      label="Fruit"
      items={items}
      onChange={action("onChange")}
      disableSearch
    />
  ))
  .add("With Images", () => (
    <Select
      placeholder="Select fruit"
      label="Fruit"
      items={items.map(addImage)}
      onChange={action("onChange")}
    />
  ))
  .add("With Selected Image", () => (
    <Select
      placeholder="Select fruit"
      label="Fruit"
      items={items.map((item, index) => ({
        ...item,
        image: `${imgSrc}?image=${index + 1080}`,
      }))}
      value={items[1].value}
      onChange={action("onChange")}
    />
  ))
  .add("Custom width", () => (
    <Select
      placeholder="Select fruit"
      label="Fruit"
      items={items}
      onChange={action("onChange")}
      width="400px"
    />
  ))
  .add("Empty items", () => (
    <Select
      placeholder="Select fruit"
      label="Fruit"
      value={1}
      onChange={action("onChange")}
      width="400px"
    />
  ))
  .add("Z-index", () => (
    <div>
      <div
        style={{
          width: 200,
          height: 400,
          top: 150,
          position: "absolute",
          zIndex: 10,
          background: "gray",
        }}
      >
        Z-index: 10
      </div>
      <Select
        placeholder="Z-index: 11"
        label="Fruit"
        items={items}
        onChange={action("onChange")}
        zIndex={11}
      />
      <div
        style={{
          width: 300,
          height: 200,
          top: 150,
          left: 100,
          position: "absolute",
          zIndex: 12,
          background: "blue",
        }}
      >
        Z-index: 12
      </div>
    </div>
  ))
  .add("With max height", () => (
    <Select
      placeholder="Select fruit"
      label="Fruit"
      value={1}
      items={moreItems}
      onChange={action("onChange")}
      maxHeight="150px"
    />
  ))
  .add("Receiving new value", () => {
    class SelectStory extends React.Component {
      state = {
        itemValue: null,
      };

      items = [
        {
          value: 0,
          label: "zero",
        },
        {
          value: 1,
          label: "one",
        },
      ];

      changeToOne = () => {
        this.setState({
          itemValue: this.items[1].value,
        });
      };

      changeToZero = () => {
        this.setState({
          itemValue: this.items[0].value,
        });
      };

      onSelectChange = value => {
        this.setState({
          itemValue: value,
        });
        action("onChange")(value);
      };

      render() {
        return (
          <div>
            <Select
              placeholder="Select fruit"
              label="Fruit"
              value={this.state.itemValue}
              items={this.items}
              onChange={this.onSelectChange}
              disableSearch
            />
            <button onClick={this.changeToOne}>Change to one</button>
            <button onClick={this.changeToZero}>Change to zero</button>
          </div>
        );
      }
    }

    return <SelectStory />;
  })
  .add("With more info content", () => (
    <Select
      placeholder="Select fruit"
      label="Regular label"
      moreInfoContent="More info text"
      value={1}
      items={items}
      onChange={action("onChange")}
      width="300px"
    />
  ))
  .add("Small size", () => (
    <Select
      fontSize={fontSizes.SMALL}
      placeholder="Select fruit"
      label="Fruit"
      items={items}
      onChange={action("onChange")}
    />
  ))
  .add("Duplicated labels", () => (
    <Select
      placeholder="Select fruit"
      label="Fruit"
      items={[...items, { ...items[0], value: "999" }]}
      onChange={action("onChange")}
      value="999"
    />
  ));

const ValueState = ({ children }) => {
  const [value, setValue] = useState([]);
  return React.Children.map(children, child =>
    React.cloneElement(child, { value, onChange: setValue }),
  );
};

storiesOf("Select Input/Multi", module)
  .add("Default", () => (
    <Select
      multi
      placeholder="Select some fruits"
      items={moreItems}
      onChange={action("onChange")}
      width="500px"
    />
  ))
  .add("With images", () => (
    <Select
      multi
      placeholder="Select some fruits"
      items={moreItems.map(addImage)}
      onChange={action("onChange")}
      width="500px"
    />
  ))
  .add("With some selected", () => (
    <Select
      multi
      placeholder="Select some fruits"
      value={["1", "3", "4"]}
      items={moreItems}
      onChange={action("onChange")}
      width="500px"
    />
  ))
  .add("With parent handling value", () => (
    <ValueState>
      <Select
        multi
        placeholder="Select some fruits"
        items={moreItems}
        width="500px"
      />
    </ValueState>
  ))
  .add("With images + Parent handling value", () => (
    <ValueState>
      <Select
        multi
        placeholder="Select some fruits"
        items={moreItems.map(addImage)}
        width="500px"
      />
    </ValueState>
  ))
  .add("Disabled", () => (
    <Select
      multi
      disabled
      placeholder="Select some fruits"
      value={["1", "3", "4"]}
      items={moreItems}
      onChange={action("onChange")}
      width="500px"
    />
  ))
  .add("Without search", () => (
    <Select
      multi
      disableSearch
      placeholder="Select some fruits"
      items={moreItems}
      onChange={action("onChange")}
      width="500px"
    />
  ))
  .add("With errors", () => (
    <Select
      multi
      placeholder="Select some fruits"
      items={moreItems}
      onChange={action("onChange")}
      width="500px"
      validationMessages={["Select at least one option"]}
    />
  ))
  .add("extended style", () => (
    <Select
      css="
        background: mintcream;
        .tag {
          background-color: darkmagenta;
          .close-icon {
            color: plum;
            transform: scale(2);
          }
        }
        .itemWrapper {
          background-color: thistle;
          .visibleCheckbox {
            background-color: gold;
          }
        }
        .emptyCard{
          .image {
            transform: skew(-45deg);
          }
          .text {
            text-decoration: overline;
          }
        } 
      "
      multi
      placeholder="Select some fruits"
      value={["1", "3", "4"]}
      items={moreItems}
      onChange={action("onChange")}
      width="500px"
    />
  ));
