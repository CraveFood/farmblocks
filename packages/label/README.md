# Farmblocks Label

Label to be used along with form inputs

> ### ⚠️ Legacy
>
> This package was completely rewritten in v2
> If you're looking for documentation of the old version, check: <https://www.npmjs.com/package/@crave/farmblocks-label/v/1.0.26>

## Installation

```bash
npm install @crave/farmblocks-label
```

## Usage

It's a customised `label` html tag that changes its color accordingly with its predefined props.

```jsx
import Label from "@crave/farmblocks-label";

export default () => (
  <div>
    <Label for="default">Default Label</Label>
    <input id="default" />
  </div>
);
```

For more examples and details on the available props, [read the docs](https://cravefood.github.io/farmblocks/?path=/docs/form-label--labels)

## License

MIT
