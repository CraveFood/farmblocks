# Farmblocks Label

Label to be used along with form inputs

## Installation

```
npm install @crave/farmblocks-label
```

## Usage

You can combine the text props to create a full customizable text page.

```jsx
import React from "react";
import { render } from "react-dom";

import Label from "@crave/farmblocks-label";

const App = () => (
  <div>
    <Label>Default Label</Label>
    <Label focused>Focused Label</Label>
    <Label invalid>Invalid Label</Label>
    <Label disabled>Disabled Label</Label>
    <Label moreInfoContent="More info content">With more info</Label>
  </div>
);

render(<App />, document.getElementById("root"));
```

The code above will render:
![image](https://user-images.githubusercontent.com/17936244/49942331-286fd000-fecc-11e8-94e9-460029233bef.png)

## Api

| Property        | Description                                                                                                                                                                                           | Type   | Default |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| children        | Content that will be rendered inside a farmblocks-text component                                                                                                                                      | node   |         |
| focused         | Sets INDIGO_MILK_CAP color                                                                                                                                                                            | bool   | false   |
| invalid         | Sets STRAWBERRY color                                                                                                                                                                                 | bool   | false   |
| disabled        | Sets GREY_32 color                                                                                                                                                                                    | bool   | false   |
| protected       | When this property is set to `true` along with `disabled`, the default color is used (CARBON)                                                                                                         | bool   | false   |
| moreInfoContent | Content to display in a MoreInfo in the label                                                                                                                                                         | node   |         |
| moreInfoAlign   | Alignment for the MoreInfo content. Use one of the [alignments](https://github.com/CraveFood/farmblocks/blob/master/packages/tooltip/src/constants/alignments.js) constants from `farmblocks-tooltip` | string | left    |

## License

MIT
