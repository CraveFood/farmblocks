import React from "react";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import { Checkbox, Switch } from ".";

// @TODO the functionality of the tests below
// are very similar to functionality that the hoc-input
// implements, but I am not using the hoc input for this version of the checkbox
// because they include some styling features not used by checkbox, we should file an issue to split the hoc-input

describe("Checkbox", () => {
  configure({ adapter: new Adapter() });

  test("default onChange function returns null", () => {
    const component = renderer.create(<Checkbox />);
    const tree = component.toTree();
    expect(tree.props.onChange()).toBeNull();
  });

  test("default onMouseUp function returns null", () => {
    const component = renderer.create(<Checkbox />);
    const tree = component.toTree();
    expect(tree.props.onMouseUp()).toBeNull();
  });

  test("onMouseUp event on a Switch set clicked flag", () => {
    const component = mount(<Switch />);
    component.find("label").simulate("mouseUp", {});
    const newState = component.state();
    expect(newState.clicked).toBe(true);
  });

  test("onMouseUp event on a Checkbox dont set clicked flag", () => {
    const component = mount(<Checkbox />);
    component.find("label").simulate("mouseUp", {});
    const newState = component.state();
    expect(newState.clicked).toBe(false);
  });

  test("Switch loses focus after a mouse-initiated change event", () => {
    const blurMock = jest.fn();
    const component = mount(<Switch />);
    component.find("label").simulate("mouseUp", {});
    component
      .find("input")
      .simulate("change", { target: { blur: blurMock, checked: true } });
    expect(blurMock).toBeCalled();
  });

  test("After a mouse-initiated onChange on a Switch the clicked flag is cleared", () => {
    const component = mount(<Switch />);
    component.find("label").simulate("mouseUp", {});
    component
      .find("input")
      .simulate("change", { target: { blur: () => null, checked: true } });
    const newState = component.state();
    expect(newState.clicked).toBe(false);
  });

  test("onChange property is called after input change", () => {
    const onChangeMock = jest.fn();
    const component = mount(<Checkbox onChange={onChangeMock} />);
    component.find("input").simulate("change", { target: { checked: true } });
    expect(onChangeMock).toBeCalled();
  });
});
