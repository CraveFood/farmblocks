import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import Image from "@crave/farmblocks-image";

import Select from ".";

const items = [
  { value: "1", label: "Apple" },
  { value: "2", label: "Banana" },
  { value: "3", label: "Pear" }
];

const imgSrc = "https://picsum.photos/100";

storiesOf("Select Input", "module")
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
  );
