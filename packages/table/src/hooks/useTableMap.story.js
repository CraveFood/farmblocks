/* eslint-disable react/prop-types */
/* eslint-disable storybook/story-exports */
import React from "react";
import { action } from "@storybook/addon-actions";

import { Table, THead, TBody, TR, TH, useTableMap, TD } from "..";

const fruits = [
  { id: 0, name: "Apple", price: "$ 0.50" },
  { id: 1, name: "Banana", price: "$ 0.60" },
  { id: 2, name: "Cherry", price: "$ 9,999.99" },
  { id: 3, name: "Coconut" },
];

const Actions = ({ $rowData }) => (
  <TD>
    <button
      onClick={action(`Added ${$rowData.name} to cart`)}
      disabled={!$rowData.price}
    >
      Add to cart
    </button>
  </TD>
);

const FruitTable = () => {
  const mapData = useTableMap({
    columns: ["name", "price", "actions"],
    keyProp: "id",
    placeholders: { price: "N/A" },
    cellComponents: { actions: Actions },
  });

  return (
    <Table>
      <THead>
        <TR>
          <TH>Fruit</TH>
          <TH>Price</TH>
          <TH /> {/* actions column, we don't want to label it */}
        </TR>
      </THead>
      <TBody>{fruits.map(mapData)}</TBody>
    </Table>
  );
};

export default {
  title: "Layout/Table/hooks",
  includeStories: [], // don't load this to storybook, we import it in the MDX file
};

export const example = () => <FruitTable />;
