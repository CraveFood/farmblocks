# Farmblocks Carousel

Images carousel that changes the active item automatically from times to times.
See storybook

## Installation

```
npm install @crave/farmblocks-carousel
```

## Usage

```jsx
import React, { Component } from "react";
import { render } from "react-dom";
import Carousel from "@crave/farmblocks-carousel";

const imageSet = [
  {
    image: "https://picsum.photos/640/?image=1080",
    name: "Organic Pepper"
  },
  {
    image: "https://picsum.photos/640/?image=824",
    name: "Tomato"
  },
  {
    image: "https://picsum.photos/640/?image=889",
    name: "Grapefruit"
  }
];

const App = () => <Carousel imageSet={imageSet} />;

render(<App />, document.getElementById("root"));
```

## API

| Property   | Description                                                                                  | Type                                                                                                                                                                             | Default                                                                                                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| imageSet   | The image set to be displayed                                                                | arrayOf({ image: string, name: string})                                                                                                                                          |                                                                                                                                                                             |
| onChange   | Function to be called when the current image changes. It passes the image index as parameter | function                                                                                                                                                                         | () => null                                                                                                                                                                  |
| onEnd      | Function to be called when the last image has been displayed as active                       | function                                                                                                                                                                         | () => null                                                                                                                                                                  |
| itemConfig | Configs to be applied on the image cards                                                     | `object({ width: number, height: number, margin: number, fontSize: string, displayTime: number, transitionTime: number, border: { width: string, radius: string, color: string}` | `{ width: 656, height: 328, margin: 20, fontSize: "88px", displayTime: 4, transitionTime: 2, border: { radius: "16px", width: "4px", color: "rgba(255, 255, 255, 0.56)" }}` |

## License

MIT
