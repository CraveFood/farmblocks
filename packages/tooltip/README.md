# Farmblocks Tooltip

A simple tooltip component.

![image](https://user-images.githubusercontent.com/17936244/41741170-b479620e-7570-11e8-9941-7c6f276704c6.png)

## Installation

```
npm install @crave/farmblocks-tooltip
```

## API

A text or children must be supplied, otherwise the tooltip won't be rendered.

| Property          | Description                                                                                                                                                     | Type                                               | Default  |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | -------- |
| children          | content to be rendered inside the tooltip                                                                                                                       | React.Node                                         |
| text              | tooltip text                                                                                                                                                    | string                                             |
| isVisible         | controls its visibility                                                                                                                                         | bool                                               | `true`   |
| align             | controls its alignment to the parent                                                                                                                            | one of `"left"`, `"right"`, `"center"` or `"auto"` | `"left"` |
| bondariesSelector | (only for `align="auto"`) A CSS selector for a container which will define the limits for the tooltip. If not defined, the limit will be the browser's viewport | string                                             |
| zIndex            | zIndex value                                                                                                                                                    | number                                             | `1000`   |
| hideArrow         | controls arrow visibility                                                                                                                                       | bool                                               | `false`  |
| padding           | content padding                                                                                                                                                 | string                                             | `"8px"`  |
| top               | distance from the top of the container to the tip                                                                                                               | string                                             | `"15px"` |
| overflow          | overrides the default overflow property.                                                                                                                        | string                                             |          |

## License

MIT
