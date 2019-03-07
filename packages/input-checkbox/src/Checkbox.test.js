import React from "react";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";

import { Checkbox, Switch } from ".";

// @TODO the functionality of the tests below
// are very similar to functionality that the hoc-input
// implements, but I am not using the hoc input for this version of the checkbox
// because they include some styling features not used by checkbox, we should file an issue to split the hoc-input

describe("Checkbox", function() {
  configure({ adapter: new Adapter() });

  test("changing checked property should update the checked state", function() {
    const component = shallow(<Checkbox checked />);
    const state = component.state();
    expect(state.checked).toBe(true);

    const expectedNewState = {
      ...state,
      checked: false,
    };
    component.setProps({ checked: false });
    expect(component.state()).toEqual(expectedNewState);
  });

  test("changing other properties should keep checked state unchanged", function() {
    const component = shallow(<Checkbox checked />);
    const state = component.state();
    component.setProps({ disabled: true });
    expect(state.checked).toBe(true);
  });

  test("default onChange function returns null", function() {
    const component = renderer.create(<Checkbox />);
    const tree = component.toTree();
    expect(tree.props.onChange()).toBeNull();
  });

  test("default onMouseUp function returns null", function() {
    const component = renderer.create(<Checkbox />);
    const tree = component.toTree();
    expect(tree.props.onMouseUp()).toBeNull();
  });

  test("onMouseUp event on a Switch set clicked flag", function() {
    const component = mount(<Switch />);
    component.find("label").simulate("mouseUp", {});
    const newState = component.state();
    expect(newState.clicked).toBe(true);
  });

  test("onMouseUp event on a Checkbox dont set clicked flag", function() {
    const component = mount(<Checkbox />);
    component.find("label").simulate("mouseUp", {});
    const newState = component.state();
    expect(newState.clicked).toBe(false);
  });

  test("Switch loses focus after a mouse-initiated change event", function() {
    const blurMock = jest.fn();
    const component = mount(<Switch />);
    component.find("label").simulate("mouseUp", {});
    component
      .find("input")
      .simulate("change", { target: { blur: blurMock, checked: true } });
    expect(blurMock).toBeCalled();
  });

  test("After a mouse-initiated onChange on a Switch the clicked flag is cleared", function() {
    const component = mount(<Switch />);
    component.find("label").simulate("mouseUp", {});
    component
      .find("input")
      .simulate("change", { target: { blur: () => null, checked: true } });
    const newState = component.state();
    expect(newState.clicked).toBe(false);
  });

  test("onChange property is called after input change", function() {
    const onChangeMock = jest.fn();
    const component = mount(<Checkbox onChange={onChangeMock} />);
    component.find("input").simulate("change", { target: { checked: true } });
    expect(onChangeMock).toBeCalled();
  });

  test("onChange event change value", function() {
    const component = mount(<Checkbox />);
    component.find("input").simulate("change", { target: { checked: true } });
    const newState = component.state();
    expect(newState.checked).toBe(true);
  });
});
