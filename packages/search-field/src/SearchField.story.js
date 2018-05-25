import React from "react";
import { storiesOf, action } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import SearchField from ".";

const image = "https://picsum.photos/100";
const items = [
  { value: "1", label: "Apple", image },
  { value: "2", label: "Banana", image },
  { value: "3", label: "Pear", image }
];

storiesOf("Search Field", "module")
  .add("Default", withInfo()(() => <SearchField />))
  .add("withItems", withInfo()(() => <SearchField items={items} />))
  .add(
    "onChange (debounced)",
    withInfo()(() => (
      <SearchField items={items} onChange={action("onChange")} />
    ))
  )
  .add(
    "onSelect",
    withInfo()(() => (
      <SearchField items={items} onSelect={action("onSelect")} />
    ))
  )
  .add(
    "onScrollReachEnd",
    withInfo()(() => (
      <SearchField
        items={items}
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
    `)(() => <SearchField items={items} loading={<div>Loading</div>} />)
  )
  .add("disabled", withInfo()(() => <SearchField items={items} disabled />))
  .add(
    "custom debounce delay",
    withInfo()(() => (
      <SearchField
        items={items}
        onChange={action("onChange")}
        debounceDelay={500}
      />
    ))
  )
  .add(
    "custom menu height",
    withInfo()(() => <SearchField items={items} maxMenuHeight={800} />)
  );
