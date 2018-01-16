import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

describe("Dropdown", function() {
  Enzyme.configure({ adapter: new Adapter() });

  test("default handle selection function returns null", function() {
    const component = renderer.create(
      <Dropdown>
        <DropdownItem value={1}>Option 1</DropdownItem>
        <DropdownItem value={2}>Option 2</DropdownItem>
      </Dropdown>
    );
    let tree = component.toTree();

    expect(tree.props.handleSelection()).toBeFalsy();
  });

  test("click on an option should call handle selection", function() {
    const handleSelectionMock = jest.fn();

    const tree = mount(
      <Dropdown handleSelection={handleSelectionMock}>
        <DropdownItem value={1}>Option 1</DropdownItem>
        <DropdownItem value={2}>Option 2</DropdownItem>
      </Dropdown>
    );

    // dropdown items should be hidden after mounting component
    expect(tree.find("DropdownMenuWrapper").length).toBe(0);

    // click on trigger button should open the dropdown items
    tree.find("Button").simulate("click");
    expect(tree.find("DropdownMenuWrapper").length).toBe(1);

    // click on the first option of the dropdown items
    tree
      .find("AriaMenuButtonMenuItem")
      .first()
      .childAt(0)
      .simulate("click");

    expect(handleSelectionMock).toBeCalledWith(1, expect.anything());
  });

  test("should align options to the right and set zIndex", function() {
    const align = "right";
    const zIndex = 10;
    const tree = mount(
      <Dropdown align={align} zIndex={zIndex}>
        <DropdownItem value={1}>Option 1</DropdownItem>
        <DropdownItem value={2}>Option 2</DropdownItem>
      </Dropdown>
    );

    // dropdown items should be hidden after mounting component
    expect(tree.find("DropdownMenuWrapper").length).toBe(0);

    // click on trigger button should open the dropdown items
    tree.find("Button").simulate("click");
    expect(tree.find("DropdownMenuWrapper").length).toBe(1);

    const props = tree.find("DropdownMenuWrapper").props();
    expect(props.align).toBe(align);
    expect(props.zIndex).toBe(zIndex);
  });
});
