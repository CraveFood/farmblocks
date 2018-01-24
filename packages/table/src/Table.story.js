import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { rowHeights } from "./constants";

import { Table, Column } from ".";

const farms = [
  {
    name: "Madeline Farms",
    address: "7 Carroll Avenue, Newport, RI 02840",
    distance: 2.8,
    created_date: "2017-07-23",
    type: "farm",
    status: "not_connected",
    slug: "madeline-farm"
  },
  {
    name: "Farm Honey",
    address: "7 Carroll Avenue, Newport, RI 02840",
    distance: 2.8,
    created_date: "2017-07-23",
    type: "food_hub",
    status: "connected",
    slug: "farm-honey"
  }
];

storiesOf("Table", "module")
  .add(
    "one column, three rows",
    withInfo()(() => (
      <Table
        data={[{ name: "Apple" }, { name: "Banana" }, { name: "Coconut" }]}
      >
        <Column title="Fruit" cell={row => <div>{row.name}</div>} />
      </Table>
    ))
  )
  .add(
    "smaller rowHeight",
    withInfo()(() => (
      <Table
        rowHeight={rowHeights.SMALL}
        data={[{ name: "Apple" }, { name: "Banana" }, { name: "Coconut" }]}
      >
        <Column title="Fruit" cell={row => <div>{row.name}</div>} />
      </Table>
    ))
  )
  .add(
    "2 columns, one with custom align and width",
    withInfo()(() => (
      <Table
        data={[
          { name: "Apple", price: "$ 0.50" },
          { name: "Banana", price: "$ 0.60" },
          { name: "Coconut", price: "$ 2.30" }
        ]}
      >
        <Column title="Fruit" cell={row => <div>{row.name}</div>} />
        <Column
          title="Price"
          options={{ align: "right", width: "300px" }}
          cell={row => <div>{row.price}</div>}
        />
      </Table>
    ))
  )
  .add(
    "4 columns with cell renderers",
    withInfo()(() => {
      const nameColumnCell = rowData => (
        <div>
          <div>{rowData.name}</div>
          <div>{rowData.address}</div>
        </div>
      );
      const distanceColumnCell = rowData => (
        <div>{rowData.distance} miles from you</div>
      );
      const formattedDateColumnCell = rowData => (
        <div>{new Date(rowData.created_date).toDateString("%d-%b-%Y")}</div>
      );
      const accountTypeColumnCell = rowData => (
        <div>
          <img
            width={100}
            src={
              rowData.type === "farm"
                ? "https://media.giphy.com/media/RrU8f9lImvJja/giphy.gif"
                : "https://media.giphy.com/media/f8k6R32qjJGV2/giphy.gif"
            }
          />
          {rowData.type}
        </div>
      );
      return (
        <Table data={farms}>
          <Column
            title="Leads"
            options={{ align: "left" }}
            cell={nameColumnCell}
          />
          <Column title="Distance" cell={distanceColumnCell} />
          <Column title="Member since" cell={formattedDateColumnCell} />
          <Column title="Account Type" cell={accountTypeColumnCell} />
        </Table>
      );
    })
  );
