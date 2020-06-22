import React, { useCallback } from "react";

import { TR, TD } from "../components.styled";

export default ({
  columns,
  keyProp,
  rowComponent: Row = TR,
  cellComponents = {},
  placeholders = {},
} = {}) => {
  return useCallback(
    (row, index) => (
      <Row key={row[keyProp] || index}>
        {columns.map(columnName => {
          const Cell =
            cellComponents[columnName] || cellComponents.$default || TD;

          const content =
            row[columnName] ||
            placeholders[columnName] ||
            placeholders.$default;

          return <Cell key={columnName}>{content}</Cell>;
        })}
      </Row>
    ),
    [columns],
  );
};
