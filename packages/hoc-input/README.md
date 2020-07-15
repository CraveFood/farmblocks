# Farmblocks Input HOC

A High Order Component that adds behaviour of label support, different styles
for focus and errors, and validation error messages.

## Installation

```bash
npm install @crave/farmblocks-hoc-input
```

## Usage

```jsx
import formInput from "@crave/farmblocks-hoc-input";
const FbInput = formInput(props => React.createElement("input", props));
const Form = () => <FbInput label="Label" placeholder="Helpful placeholder" />;
```

For more examples and details on the available props, [read the docs](https://cravefood.github.io/farmblocks/?path=/docs/form-hoc-forminput--basic#hoc-input).

## License

MIT
