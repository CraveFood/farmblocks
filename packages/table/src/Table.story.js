import React from "react";
import { storiesOf } from "@storybook/react";

import { Table } from "./index";

// eslint-disable-next-line no-unused-vars
const fruits = [
  { id: 0, name: "Apple", price: "$ 0.50" },
  { id: 1, name: "Banana", price: "$ 0.60" },
  { id: 2, name: "Cherry", price: "$ 9,999.99" },
  { id: 3, name: "Coconut", price: "$ 2.30" },
];

storiesOf("Table/Basic", module).add("Simple usage", () => <Table />);
