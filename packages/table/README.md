# Farmblocks Table

A component for rendering data tables.

## Installation

```
npm install @crave/farmblocks-table
```

## Usage

```javascript
import React, { Component } from "react";
import { render } from "react-dom";
import { Table, Column } from "@crave/farmblocks-table";

const root = document.createElement("div");
document.body.appendChild(root);

const fruits = [
  { id: 0, name: "Apple", price: "$ 0.50" },
  { id: 1, name: "Banana", price: "$ 0.60" },
  { id: 2, name: "Cherry", price: "$ 9,999.99" },
  { id: 3, name: "Coconut", price: "$ 2.30" }
];

render(
  <div>
    <Table data={fruits}>
      <Column title="Fruit" text={row => row.name} />
      <Column title="Price" text={row => row.price} />
    </Table>
  </div>,
  root
);
```

See the stories source code for more usage examples.

### Required Font icon

This package assumes that the application using it uses a font icon that have a
checkmark symbol, and that the class name to include that icon is `.wg-check`.

### Required Polyfills

This package assumes it will run on an enviroment that has support for Array.includes and Object.keys, if you need to support IE and other older browsers, make sure you have those polyfills in place.

## Properties

The Table component can be used for showing data grids using text cells in like the simple example above, but it also supports
complex rendering inside the cells using the `customCell` property. The idea is to describe the columns using the Column component and map the data to columns in any way you choose using functions. The `data` property of the Table component is the
core of the whole thing, it should be an array of objects, each item representing a row of the table.

### Table

| property           | type                                                   | description                                                                                                                                                                                                                                                                                                                                      |
| ------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| data               | array of objects                                       | the data to be presented in a data table, each item should represent a row                                                                                                                                                                                                                                                                       |
| selectableRows     | boolean                                                | if set, will make the rows selectable by displaying checkboxes on the first column                                                                                                                                                                                                                                                               |
| selectionHeader    | function `(selectedRows, clearFunction) => React.node` | a function that receives an array of selected rows data plus a function to clear selection; and should return a react node to be rendered as an action bar on top of the table, there is a helper component SelectionBar that can be used as the return of this function, or you can create your own... see the stories files for usage examples |
| width              | string                                                 | use this to manually change the width of the table                                                                                                                                                                                                                                                                                               |
| rowHeight          | string                                                 | use this to manually change the height of the body rows of the table, the package exports a set of named values as `rowHeights`, you can import them and use `rowHeights.SMALL` to have a more compact table                                                                                                                                     |
| rowGroupKey        | string                                                 | if you have rows that contains sub-rows as a list under a key, you can pass this property with the name of the key, to have a table with row groups generated                                                                                                                                                                                    |
| flatGroupCondition | function `(row) => boolean`                            | if you need to display some row groups as regular rows, use a function to describe in which conditions a rowgroup should be flattened                                                                                                                                                                                                            |
| collapsed          | boolean                                                | if row groups are used, this flag will add a button column with buttons that works as expand/collapse toggle on the start of row groups. The groups will start collapsed.                                                                                                                                                                        |
| onTitleClick       | function `(columnIndex, data) => any`                  | when the option `clickable` is used on the Column children, that column title will be a link and will have the `wg-arrow-down` icon displayed, upon click such columns will trigger the function you provide in this property, it will be called with 2 arguments, the index of the clicked column from left to right and the whole table data   |
| children           | React nodes                                            | the table comopnent expect Column children that describes how to interpret and render the table data on each column for all rows                                                                                                                                                                                                                 |

### Column

Columns are components that describes what data should be rendered in a column, as well as the name of the column, the two most important properties are `title`, that is the text name for the column and `text` that is a function that receives a full row and should return the text value to print on the cells of the column. If the simple text values and text properties (`fontType`) are not enough, you can use functions that returns React nodes instead in the `customTitle` and `customCell` properties.

Other properties:

* `clickable`, a flag to make the column title clickeable
* `width`, to manually set the column width
* `align`, `left` or `right` for a particular column
* `fontType`, one of the available font types in farmblocks-theme, will work only for `text` columns, not `customCell`

## License

MIT
