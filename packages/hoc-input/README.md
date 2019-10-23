# Farmblocks Input HOC

A High Order Component that adds behaviour of label support, different styles
for focus and errors, and validation error messages.

## Installation

```
npm install @crave/farmblocks-hoc-input
```

## Properties

This component uses the html `input` element. So the APIs are very similar.

For example, `value`, `placeholder`, `disabled`, `maxLength`, `onChange` and
others not listed here, should work as expected, you can assume that the
property will be forwarded to the core html input element. Ref.:
[MDN &lt;input&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

### Extra properties

| Property                | Description                                                                                                                                                                                           | Type    | Required | Default      |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- | ------------ |
| label                   | Text to display over the input                                                                                                                                                                        | string  |          |              |
| fontSize                | Size for the input text and addons                                                                                                                                                                    | number  |          |              |
| focused                 | Sets focus to the input                                                                                                                                                                               | bool    |          | false        |
| active                  | Applies the same visuals as the `focused` prop, but won't try to focus the input                                                                                                                      | bool    |          | false        |
| invalid                 | Changes the colors of the component to indicate an error                                                                                                                                              | boolean |          | false        |
| innerRef                | Set the ref for the internal `input` element                                                                                                                                                          | func    |          |              |
| clearable               | Adds a clear button to the field when it has value (`type="search"`)                                                                                                                                  | bool    |          | false        |
| clearIcon               | The class for the clear icon                                                                                                                                                                          | string  |          | wg-close-int |
| leftIcon                | The class for the left icon                                                                                                                                                                           | string  |          |              |
| moreInfoContent         | Content to display in a MoreInfo in the label                                                                                                                                                         | node    |          |              |
| moreInfoAlign           | Alignment for the MoreInfo content. Use one of the [alignments](https://github.com/CraveFood/farmblocks/blob/master/packages/tooltip/src/constants/alignments.js) constants from `farmblocks-tooltip` | string  |          |              |
| prefix                  | Text to display at left of the input                                                                                                                                                                  | string  |          |              |
| autoControlFocusedStyle | When set to `false` the focused state will not change. It will respect the received `focused` property                                                                                                | bool    |          | true         |

## License

MIT
