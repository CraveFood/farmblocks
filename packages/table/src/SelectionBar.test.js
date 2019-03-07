import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import { SelectionBar } from ".";

describe("Table/SelectionBar", function() {
  configure({ adapter: new Adapter() });

  test("Click on Clear button should call clear function", function() {
    const clearFunctionMock = jest.fn();
    const component = mount(
      <SelectionBar clearSelection={clearFunctionMock} />,
    );
    const clearButton = component.find(".clear button");
    clearButton.simulate("click");
    expect(clearFunctionMock).toBeCalled();
  });
});
