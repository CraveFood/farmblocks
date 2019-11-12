![logo-farmblocks](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Farmblocks Search Field

Search input with results dropdown list.  
The main difference between this and the [Select](https://www.npmjs.com/package/@crave/farmblocks-input-select) component is that while Select searches among the available items, this component gives you the ability to fetch for new items on an external API.

## Installation

```
npm install @crave/farmblocks-search-field
```

## Usage

```jsx
import React, { Component } from "react";
import { render } from "react-dom";
import Select from "@crave/farmblocks-search-field";

const items = [
  { value: "1", label: "Apple" },
  { value: "2", label: "Banana" },
  { value: "3", label: "Pear" },
];

class App extends Component {
  render() {
    return (
      <Select
        placeholder="Select fruit"
        label="Fruit"
        items={items}
        onSearchChange={value => console.log("onSearchChange", value)}
        onChange={value => console.log("onChange", value)}
      />
    );
  }
}

render(<App />, document.getElementById("root"));
```

## API

- **items** (_Array_)

  > Items to be rendered as options
  > The elements of the array should follow this shape:
  > `{ value: String, label: String, image: String(optional) }`

- **value** (_String_)

  > Selected option. It's expected that `items` have an element with the same value

- **footer** (_React node_)

  > Component to render at the menu bottom

- **width** (_Number_ or _String_) = `200`

  > Width of the component

- **maxMenuHeight** (_Number_ or _String_) = `353`

  > Maximum height of the menu. After that, the menu will have a scroll bar

- **debounceDelay** (_Number_) = `500`

  > Time in milliseconds to wait for new key presses before dispatching `onSearchChange`

- **onSearchChange** (_(value:String) => void_) = `noop`

  > Function to handle changes in the search term. It usually uses the value to search in an external API and updates the `items` prop with the received results

- **onScrollReachEnd** (_() => void_) = `noop`

  > Function to handle the end of the scroll. Useful for pagination

- **onBeforeChange** (_(args:Object) => void_) = `noop`

  > Function that runs before `onChange`. It has the ability to decide wether `onChange` will be triggered or not. When this prop is not defined, `onChange` will trigger immediately
  >
  > The arguments are sent as an Object, so you can destructure it to get only the needed ones. It wil contain:

  - **value** (_String_)
    > The value for the selected item
  - **selectedItem** (_Object_)
    > The whole selected item
  - **inputDOMElement** (_Element_)
    > The input element. You can use it to give back the focus after the uses click on an item
  - **proceed** (_(item: Object) => void_)
    > Function to trigger the `onChange` handler. Optionally, you can modify the item that onChange will pass

- **onChange** (_(value:String, item:Object) => void_) = `noop`

  > Function to handle selection of an item

- **valueKey** (_String_) = `"value"`

  > Custom name to be used as the items value key

- **labelKey** (_String_) = `"label"`

  > Custom name to be used as the items label key

- **imageKey** (_String_) = `"image"`

  > Custom name to be used as the items image key

**Note**: to listen to clicks on items or footer, use `onMouseDown` event over
`onClick`.

## License

MIT
