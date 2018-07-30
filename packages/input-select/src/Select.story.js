import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Image from "@crave/farmblocks-image";
import MoreInfo from "@crave/farmblocks-more-info";

import Select from ".";

const items = [
  { value: "1", label: "Apple" },
  { value: "2", label: "Banana" },
  { value: "3", label: "Pear" }
];

const moreItems = [
  ...items,
  { value: "4", label: "Strawberry" },
  { value: "5", label: "Peach" },
  { value: "6", label: "Coconut" }
];

const imgSrc = "https://picsum.photos/100";

storiesOf("Select Input", module)
  .add(
    "Default",
    withInfo()(() => (
      <Select
        placeholder="Select fruit"
        label="Fruit"
        items={items}
        onChange={action("onChange")}
      />
    ))
  )
  .add(
    "With value",
    withInfo()(() => (
      <Select
        placeholder="Select fruit"
        label="Fruit"
        items={items}
        onChange={action("onChange")}
        value={items[1].value}
      />
    ))
  )
  .add(
    "With errors",
    withInfo()(() => (
      <Select
        placeholder="Select fruit"
        label="Fruit"
        items={items}
        onChange={action("onChange")}
        validationMessages={["Select at least one option"]}
      />
    ))
  )
  .add(
    "Custom items",
    withInfo()(() => (
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
              alignItems: "center"
            }}
          >
            <span
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
                marginRight: 16
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
  )
  .add(
    "Disabled",
    withInfo()(() => (
      <Select
        placeholder="Select fruit"
        label="Fruit"
        items={items}
        onChange={action("onChange")}
        value={items[1].value}
        disabled
      />
    ))
  )
  .add(
    "Search (autocomplete) disabled",
    withInfo()(() => (
      <Select
        placeholder="Select fruit"
        label="Fruit"
        items={items}
        onChange={action("onChange")}
        disableSearch
      />
    ))
  )
  .add(
    "With Images",
    withInfo()(() => (
      <Select
        placeholder="Select fruit"
        label="Fruit"
        items={items.map((item, index) => ({
          ...item,
          image: `${imgSrc}?image=${index + 1080}`
        }))}
        onChange={action("onChange")}
      />
    ))
  )
  .add(
    "With Selected Image",
    withInfo()(() => (
      <Select
        placeholder="Select fruit"
        label="Fruit"
        items={items.map((item, index) => ({
          ...item,
          image: `${imgSrc}?image=${index + 1080}`
        }))}
        value={items[1].value}
        onChange={action("onChange")}
      />
    ))
  )
  .add(
    "Custom width",
    withInfo()(() => (
      <Select
        placeholder="Select fruit"
        label="Fruit"
        items={items}
        onChange={action("onChange")}
        width="400px"
      />
    ))
  )
  .add(
    "Empty items",
    withInfo()(() => (
      <Select
        placeholder="Select fruit"
        label="Fruit"
        value={1}
        onChange={action("onChange")}
        width="400px"
      />
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
            background: "blue"
          }}
        >
          Z-index: 12
        </div>
      </div>
    ))
  )
  .add(
    "With max height",
    withInfo()(() => (
      <Select
        placeholder="Select fruit"
        label="Fruit"
        value={1}
        items={moreItems}
        onChange={action("onChange")}
        maxHeight="150px"
      />
    ))
  )
  .add(
    "Receiving new value",
    withInfo()(() => {
      class SelectStory extends React.Component {
        state = {
          itemValue: null
        };

        items = [
          {
            value: 0,
            label: "zero"
          },
          {
            value: 1,
            label: "one"
          }
        ];

        changeToOne = () => {
          this.setState({
            itemValue: this.items[1].value
          });
        };

        changeToZero = () => {
          this.setState({
            itemValue: this.items[0].value
          });
        };

        onSelectChange = value => {
          this.setState({
            itemValue: value
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
  )
  .add(
    "With several examples of types of labels",
    withInfo()(() => (
      <div>
        <div style={{ paddingTop: "20px" }}>
          <Select
            placeholder="Select fruit"
            label={<Image src={imgSrc} />}
            value={1}
            items={items}
            onChange={action("onChange")}
            width="300px"
          />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <Select
            placeholder="Select fruit"
            label="This is a string"
            value={1}
            items={items}
            onChange={action("onChange")}
            width="300px"
          />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <Select
            placeholder="Select fruit"
            label={
              <MoreInfo text="This is a more info component">
                More info
              </MoreInfo>
            }
            value={1}
            items={items}
            onChange={action("onChange")}
            width="500px"
          />
        </div>
      </div>
    ))
  );
