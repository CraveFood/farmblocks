# Farmblocks Icon

A SVG icon library for React

## Installation

```
npm install @crave/farmblocks-icon
```

## Usage

```jsx
import { SmPlaceholder } from "@crave/farmblocks-icon";

export default () => <SmPlaceholder />;
```

You can see a list of all available icons in https://cravefood.github.io/farmblocks/iframe.html?id=assets-icons--all-icons

For more examples and details on the available props, [read the docs](https://cravefood.github.io/farmblocks/?path=/docs/assets-icons--basic).

## Contributing

To add new icons, add the files to the `src/svg/{group name}/` folder and run `yarn buildJSX`.
Be sure to follow the naming rules:

- [ ] It should starts with `Sm`, `Md`, or `Lg`. This indicates the designed size (`24px`, `40px`, or `110px`, respectively). Albeit the vector files can be rendered at any size, they can vary in the level of details.
- [ ] Don't use special characters in the name and follow the `CamelCase` convention. The filenames will be used to create the React components.
- [ ] Variations (e.g. Filled versions) can be added to the end of the filename.

## License

MIT
