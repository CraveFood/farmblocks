![logo-farmblocks](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Farmblocks Search Field

Search input with results dropdown list

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
  { value: "3", label: "Pear" }
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

### Required Font icon

This package assumes that the application using it uses a font icon that have an
edit symbol, and that the class name to include that icon is `.wg-edit`.

## API

| Property         | Description                                                                         | Type                                                               | Required | Default     |
| ---------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -------- | ----------- |
| items            | Items to be rendered as options                                                     | ArrayOf({ value: string, label: string, image: (optional)string }) |          |             |
| value            | Selected option. It's expected that `items` have an element with the same value     | string                                                             |          |             |
| footer           | Component to render at the menu bottom                                              | node                                                               |          |             |
| width            | Width of the component                                                              | number or string                                                   |          | 200         |
| maxMenuHeight    | Maximum height of the menu. After that, the menu will have a scroll                 | number or string                                                   |          | 353         |
| debounceDelay    | Time in miliseconds to wait for new key presses before dispatching `onSearchChange` | number                                                             |          | 500         |
| onSearchChange   | Function to handle changes in the search term                                       | onSearchChange(value: string)                                      |          | () => false |
| onScrollReachEnd | Function to handle the end of the scroll. Usefull for pagination                    | onScrollReachEnd()                                                 |          | () => false |
| onChange         | Function to handle selection of an item                                             | onChange(value: string, item: object)                              |          | () => false |
| valueKey         | Custom key to be used as the item value key                                         | string                                                             |          | value       |
| labelKey         | Custom key to be used as the item label key                                         | string                                                             |          | label       |
| imageKey         | Custom key to be used as the item image key                                         | string                                                             |          | image       |

Note: to listen to clicks on items or footer, use `onMouseDown` event over
`onClick`.

## License

MIT
