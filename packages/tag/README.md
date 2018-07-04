# Farmblocks Tag

A styled and removable tag.

## Installation

```
npm install @crave/farmblocks-tags
```

## API

| Property        | Description                                                                       | Type                    |
| --------------- | --------------------------------------------------------------------------------- | ----------------------- |
| text (required) | tag text                                                                          | string                  |
| onRemove        | function to be called when the tag is closed - its absence hide the remove button | function                |
| value           | a value to be passed with onRemove when the function is called                    | any                     |
| type            | will set the colors of the tag                                                    | string, oneOf(tagTypes) |

## License

MIT
