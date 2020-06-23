import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { render, screen } from "@testing-library/react";

import { useTableMap, Table, TBody, TR, TD } from "..";

/* eslint-disable react/prop-types */

describe("Table Hooks / useTableMap", () => {
  it("should return a function", () => {
    const { result } = renderHook(() => useTableMap());

    expect(result.current).toBeInstanceOf(Function);
  });

  it("should memoize", () => {
    const { result, rerender } = renderHook(() => useTableMap());

    const previous = result.current;
    rerender();

    expect(result.current).toEqual(previous);
  });

  it("should replace the result when the columns change", () => {
    const { result, rerender } = renderHook(() =>
      useTableMap({ columns: ["first"] }),
    );

    const previous = result.current;
    rerender({ columns: ["first", "second"] });

    expect(result.current).not.toEqual(previous);
  });

  describe("resulting function", () => {
    const renderTable = ({ options, data }) => {
      const { result } = renderHook(() => useTableMap(options));
      render(
        <Table>
          <TBody>{data.map(result.current)}</TBody>
        </Table>,
      );
    };

    it("should render each data row", async () => {
      renderTable({
        options: { columns: ["value"] },
        data: [{ value: "first" }, { value: "second" }],
      });

      expect(screen.getByText("first")).toBeInTheDocument();
      expect(screen.getByText("second")).toBeInTheDocument();
    });

    it("should render each column", async () => {
      renderTable({
        options: { columns: ["column1", "column2"] },
        data: [
          { column1: "r1c1", column2: "r1c2" },
          { column1: "r2c1", column2: "r2c2" },
        ],
      });

      expect(screen.getByText("r1c1")).toBeInTheDocument();
      expect(screen.getByText("r1c2")).toBeInTheDocument();
      expect(screen.getByText("r2c1")).toBeInTheDocument();
      expect(screen.getByText("r2c2")).toBeInTheDocument();
    });

    it("should NOT render data not listed as column", async () => {
      renderTable({
        options: { columns: ["column1", "column2"] },
        data: [{ column1: "a", column2: "b", another: "ignoreThis" }],
      });

      expect(screen.getByText("a")).toBeInTheDocument();
      expect(screen.getByText("b")).toBeInTheDocument();
      expect(screen.queryByText("ignoreThis")).not.toBeInTheDocument();
    });

    it("should use the given rowComponent", () => {
      const Row = props => <TR data-testid="customRow" {...props} />;

      renderTable({
        options: {
          columns: ["column"],
          rowComponent: Row,
        },
        data: [{ column: "a" }],
      });

      expect(screen.getByTestId("customRow")).toBeInTheDocument();
    });

    it("should use the given cellComponents", () => {
      const cellComponents = {
        column1: props => <TD data-testid="customCell" {...props} />,
        $default: props => <TD data-testid="defaultCell" {...props} />,
      };

      renderTable({
        options: {
          columns: ["column1", "other"],
          cellComponents,
        },
        data: [{ column1: "a", other: "b" }],
      });

      expect(screen.getByTestId("customCell")).toBeInTheDocument();
      expect(screen.getByTestId("defaultCell")).toBeInTheDocument();
    });

    it("should replace falsy values with placeholders", () => {
      const placeholders = {
        column1: "column1Placeholder",
        column2: "column2Placeholder",
        $default: "defaultPlaceholder",
      };

      renderTable({
        options: {
          columns: ["column1", "column2", "column3"],
          placeholders,
        },
        data: [{ column1: "a" }],
      });

      // data is valid
      expect(screen.queryByText("column1Placeholder")).not.toBeInTheDocument();

      // placeholder is given
      expect(screen.getByText("column2Placeholder")).toBeInTheDocument();

      // placeholder is not given, fall back to $default
      expect(screen.getByText("defaultPlaceholder")).toBeInTheDocument();
    });

    it("should pass the equivalent data to the row component", () => {
      const Row = ({ $rowData, $rowIndex, ...props }) => (
        <TR {...props}>
          <TD>rowIndex: {$rowIndex}</TD>
          <TD>rowData: {JSON.stringify($rowData)}</TD>
        </TR>
      );

      renderTable({
        options: {
          columns: ["column1"],
          rowComponent: Row,
        },
        data: [{ column1: "a" }],
      });

      expect(screen.getByText("rowIndex: 0")).toBeInTheDocument();
      expect(screen.getByText(`rowData: {"column1":"a"}`)).toBeInTheDocument();
    });

    it("should pass the row data to the cell component", () => {
      const Cell = ({
        $rowData,
        $rowIndex,
        $columnName,
        $columnIndex,
        ...props
      }) => (
        <TD {...props}>
          <pre>rowIndex: {$rowIndex}</pre>
          <pre>rowData: {JSON.stringify($rowData)}</pre>
          <pre>columnName: {$columnName}</pre>
          <pre>columnIndex: {$columnIndex}</pre>
        </TD>
      );

      renderTable({
        options: {
          columns: ["column1"],
          cellComponents: { $default: Cell },
        },
        data: [{ column1: "a" }],
      });

      expect(screen.getByText("rowIndex: 0")).toBeInTheDocument();
      expect(screen.getByText('rowData: {"column1":"a"}')).toBeInTheDocument();
      expect(screen.getByText("columnName: column1")).toBeInTheDocument();
      expect(screen.getByText("columnIndex: 0")).toBeInTheDocument();
    });
  });
});
