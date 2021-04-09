import React, { useCallback } from "react";

import { TR, TD } from "../components.styled";

const defaultCellComponents = {};
const defaultPlaceholders = {};

export default ({
  columns,
  keyProp,
  rowComponent: Row = TR,
  cellComponents = defaultCellComponents,
  placeholders = defaultPlaceholders,
} = {}) =>
  useCallback(
    (row, index) => (
      <Row key={row[keyProp] || index} $rowData={row} $rowIndex={index}>
        {columns.map((columnName, columnIndex) => {
          const Cell =
            cellComponents[columnName] || cellComponents.$default || TD;

          const content =
            row[columnName] ||
            placeholders[columnName] ||
            placeholders.$default;

          return (
            <Cell
              key={columnName}
              $rowData={row}
              $rowIndex={index}
              $columnName={columnName}
              $columnIndex={columnIndex}
            >
              {content}
            </Cell>
          );
        })}
      </Row>
    ),
    [columns, keyProp, Row, cellComponents, placeholders],
  );
