import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import Table from "./Table";
import Column from "./Column";

const dataFixture = [{ name: "foo" }, { name: "bar" }];

describe("Table", function() {
  configure({ adapter: new Adapter() });

  test("Checking the Select All checkbox of a table should select all it's rows", function() {
    const component = mount(
      <Table selectableRows data={dataFixture}>
        <Column title="Name" text={row => row.name} />
      </Table>
    );
    const selectAllButton = component.find("th input");
    selectAllButton.simulate("change", { target: { checked: true } });
    const newState = component.state();
    expect(newState.selectedRows.length).toBe(dataFixture.length);
  });

  test("Unchecking the Select All checkbox of a table should select all it's rows", function() {
    const component = mount(
      <Table selectableRows data={dataFixture}>
        <Column title="Name" text={row => row.name} />
      </Table>
    );
    component.setState({ selectedRows: [0, 1] });
    expect(component.state().selectedRows.length).toBe(dataFixture.length);

    const selectAllButton = component.find("th input");
    selectAllButton.simulate("change", { target: { checked: false } });
    expect(component.state().selectedRows.length).toBe(0);
  });

  test("Selecting a row should change the selectedRows state", function() {
    const component = mount(
      <Table selectableRows data={dataFixture}>
        <Column title="Name" text={row => row.name} />
      </Table>
    );
    const firstRowCheckbox = component.find("td input").first();
    expect(component.state().selectedRows.length).toBe(0);

    firstRowCheckbox.simulate("change", { target: { checked: true } });
    expect(component.state().selectedRows.length).toBe(1);
  });

  test("Deselecting a row should change the selectedRows state", function() {
    const component = mount(
      <Table selectableRows data={dataFixture}>
        <Column title="Name" text={row => row.name} />
      </Table>
    );
    component.setState({ selectedRows: [0] });
    const firstRowCheckbox = component.find("td input").first();
    expect(component.state().selectedRows.length).toBe(1);

    firstRowCheckbox.simulate("change", { target: { checked: false } });
    expect(component.state().selectedRows.length).toBe(0);
  });

  test("Clicking on a column title on a table without onTitleClick should return null", function() {
    const component = mount(
      <Table data={dataFixture}>
        <Column clickable title="Name" text={row => row.name} />
      </Table>
    );
    const firstTitleLink = component.find("th a").first();
    const preventDefaultMock = jest.fn();
    const clickReturn = firstTitleLink
      .props()
      .onClick({ preventDefault: preventDefaultMock });
    expect(preventDefaultMock).toBeCalled();
    expect(clickReturn).toBe(null);
  });

  test("Clicking on a column title on a clickable column should call onTitleClick", function() {
    const preventDefaultMock = jest.fn();
    const onTitleClickMock = jest.fn();
    const component = mount(
      <Table data={dataFixture} onTitleClick={onTitleClickMock}>
        <Column clickable title="Name" text={row => row.name} />
      </Table>
    );
    const firstTitleLink = component.find("th a").first();
    firstTitleLink.simulate("click", { preventDefault: preventDefaultMock });
    expect(preventDefaultMock).toBeCalled();
    expect(onTitleClickMock).toBeCalled();
  });

  test("Table with selection header bar should clear all selected row if the passed clearFunction is called", function() {
    const selectionHeaderRenderer = (data, clearFunction) => (
      <button id="testButton" onClick={clearFunction} />
    );
    const component = mount(
      <Table
        data={dataFixture}
        selectableRows
        selectionHeader={selectionHeaderRenderer}
      >
        <Column clickable title="Name" text={row => row.name} />
      </Table>
    );
    const firstRowCheckbox = component.find("td input").first();
    firstRowCheckbox.simulate("change", { target: { checked: true } });

    const testButton = component.find("#testButton");
    expect(component.state().selectedRows.length).toBe(1);

    testButton.simulate("click");
    expect(component.state().selectedRows.length).toBe(0);
  });
});
