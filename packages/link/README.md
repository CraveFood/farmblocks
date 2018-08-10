![logo-farmblocks](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Farmblocks-Links

A React component to create links. See
[Storybook](https://cravefood.github.io/farmblocks/index.html?selectedKind=Link%2FFeatured)

## Installation

```
npm install @crave/farmblocks-link
```

## Design Spec

See it on zeplin:
https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59ee42d9ed214b77c54c4e1f
https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59ee42d9b95cec4ea9ed4e14
https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59ee42dab95cec4ea9ed4e48
https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59ee42dac5418ce9dc27ffa2
https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59ee42da064e270badd9be38

## Usage

A Link renders a stylized `<a>` tag, which has to have a `href` value or a
function to handle `onClick`, as well as a `children` element.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Link from "@crave/farmblocks-link";
import { linkTypes } from "@crave/farmblocks-link";

const root = document.createElement("div");

ReactDOM.render(
  <Link href="#" type={linkTypes.NEUTRAL} size="14" lineHeight="1.14">
    This is a link!
  </Link>,
  root
);

document.body.appendChild(root);
```

## API

| Property   | Description                                                                              | Type                                                                |
| ---------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| children   | the contents of the card                                                                 | React.Node                                                          |
| href       | an URI to a desired destination                                                          | string                                                              |
| type       | the type of link (reflects on color and text-decoration)                                 | one of "FEATURED", "NEUTRAL", "NORMAL" or "WHITE" from linkTypes.js |
| disabled   | indicates a disabled link                                                                | boolean                                                             |
| onClick    | a function to handle an onClick event                                                    | function                                                            |
| leftIcon   | an icon to be placed on the left side of the link                                        | string                                                              |
| rightIcon  | an icon to be placed on the right side of the link                                       | string                                                              |
| external   | an indication of an external link (an icon will be placed on the right side of the link) | boolean                                                             |
| size       | a `font-size` css value for `children`                                                   | number                                                              |
| lineHeight | a `line-height` css value for `children`                                                 | number or string                                                    |

## License

MIT
