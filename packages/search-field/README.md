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
        onChange={value => console.log("onChange", value)}
        onSelect={value => console.log("onSelect", value)}
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

| Property         | Description                                                                                           | Type                                                               | Required | Default     |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -------- | ----------- |
| items            | Items to be rendered as options                                                                       | ArrayOf({ value: string, label: string, image: (optional)string }) |          |             |
| value            | Selected option                                                                                       | string                                                             |          |             |
| displayValue     | Use this whenever you need a human friendly value while keeping the original `value` as an id or slug | string                                                             |          |             |
| footer           | Component to render at the menu bottom                                                                | node                                                               |          |             |
| width            | Width of the component                                                                                | number or string                                                   |          | 200         |
| maxMenuHeight    | Maximum height of the menu. After that, the menu will have a scroll                                   | number or string                                                   |          | 353         |
| debounceDelay    | Time in miliseconds to wait for new key presses before dispatching `onChange`                         | number                                                             |          | 500         |
| onChange         | Function to handle changes in the search term                                                         | onChange(event: SyntethicEvent)                                    |          | () => false |
| onScrollReachEnd | Function to handle the end of the scroll. Usefull for pagination                                      | onScrollReachEnd()                                                 |          | () => false |
| onSelect         | Function to handle selection of an item                                                               | onSelect(value: string)                                            |          | () => false |

## License

MIT
