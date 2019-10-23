# Farmblocks Tooltip

A simple tooltip component.

![image](https://user-images.githubusercontent.com/17936244/41741170-b479620e-7570-11e8-9941-7c6f276704c6.png)

## Installation

```
npm install @crave/farmblocks-tooltip
```

## API

A text or children must be supplied, otherwise the tooltip won't be rendered.

| Property             | Description                                                                                                                                                     | Type                                               | Default    |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ---------- |
| children             | content to be rendered inside the tooltip                                                                                                                       | React.Node                                         |
| text                 | tooltip text                                                                                                                                                    | string                                             |
| isVisible            | controls its visibility                                                                                                                                         | bool                                               | `true`     |
| positionX            | controls its position on axis X relatively to the parent                                                                                                        | one of `"left"`, `"right"`, `"center"` or `"auto"` | `"left"`   |
| positionY            | controls its position on axis Y relatively to the parent                                                                                                        | one of `"top"`, `"bottom"`, or `"auto"`            | `"bottom"` |
| boundariesSelector   | (only for `align="auto"`) A CSS selector for a container which will define the limits for the tooltip. If not defined, the limit will be the browser's viewport | string                                             |
| zIndex               | zIndex value                                                                                                                                                    | number                                             | `1000`     |
| hideArrow            | controls arrow visibility                                                                                                                                       | bool                                               | `false`    |
| padding              | content padding                                                                                                                                                 | string                                             | `"8px"`    |
| offset               | distance from the container to the tooltip                                                                                                                      | string                                             | `"15px"`   |
| overflow             | overrides the default overflow property. Note that when overflow=hidden the arrow will be hidden as well                                                        | string                                             |            |
| fullScreenBreakpoint | up to this window width, the tooltip will take the whole screen. Note that you must provide a way to close the tooltip                                          | string                                             |            |

## License

MIT
