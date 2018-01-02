import React from "react";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";

import formInput from ".";

describe("formInput", function() {
  configure({ adapter: new Adapter() });

  const EnhancedInput = formInput(props => React.createElement("input", props));
  test("changing the validationMessages property after instantiation should update the validationMessages state and leave value state as it is", function() {
    const component = shallow(<EnhancedInput value="some value" />);
    const state = component.state();
    expect(state.validationMessages.length).toBe(0);

    const validationMessages = ["foo", "bar"];
    component.setProps({ validationMessages });

    const expectedState = { ...state, validationMessages };
    expect(component.state()).toEqual(expectedState);
  });

  test("changing the value property should update value state", function() {
    const component = shallow(<EnhancedInput />);
    const state = component.state();
    const expectedState = { ...state, value: "456" };
    component.setProps({ value: "456" });
    expect(component.state()).toEqual(expectedState);
  });

  test("default onChange function returns null", function() {
    const component = renderer.create(<EnhancedInput />);
    const tree = component.toTree();
    expect(tree.props.onChange()).toBeNull();
  });

  test("default onInvalid function returns null", function() {
    const component = renderer.create(<EnhancedInput />);
    const tree = component.toTree();
    expect(tree.props.onInvalid()).toBeNull();
  });

  test("onChange property is called after input change", function() {
    const onChangeMock = jest.fn();
    const component = mount(<EnhancedInput onChange={onChangeMock} />);
    component.find("input").simulate("change", { target: { value: "foo" } });
    expect(onChangeMock).toBeCalled();
  });

  test("onChange event change value", function() {
    const component = mount(<EnhancedInput />);
    component.find("input").simulate("change", { target: { value: "foo" } });
    const newState = component.state();
    expect(newState.value).toBe("foo");
  });

  test("onChange event clears invalid state if built-in validity says it is valid", function() {
    const component = mount(<EnhancedInput />);
    component.find("input").simulate("change", {
      target: { value: "foo", validity: { valid: true } }
    });
    const newState = component.state();
    expect(newState.validationMessages.length).toBe(0);
  });

  test("onInvalid property is called after input change", function() {
    const onInvalidMock = jest.fn();
    const preventDefaultMock = jest.fn();
    const component = mount(<EnhancedInput onInvalid={onInvalidMock} />);
    component
      .find("input")
      .simulate("invalid", { preventDefault: preventDefaultMock, target: {} });
    expect(preventDefaultMock).toBeCalled();
    expect(onInvalidMock).toBeCalled();
  });

  test("onInvalid event change the state to invalid and display the browser provided message if the custom validationMessages property is empty", function() {
    const component = mount(<EnhancedInput />);
    component.find("input").simulate("invalid", {
      preventDefault: () => null,
      target: { validationMessage: "bar" }
    });
    const newState = component.state();
    expect(newState.validationMessages[0]).toBe("bar");
  });

  test("onFocus property is called after input gains focus", function() {
    const onFocusMock = jest.fn();
    const component = mount(<EnhancedInput onFocus={onFocusMock} />);
    component.find("input").simulate("focus");
    expect(onFocusMock).toBeCalled();
  });
  test("onFocus event change focused", function() {
    const component = mount(<EnhancedInput />);
    component.find("input").simulate("focus");
    const newState = component.state();
    expect(newState.focused).toBe(true);
  });

  test("onBlur property is called after input looses focus", function() {
    const onBlurMock = jest.fn();
    const component = mount(<EnhancedInput onBlur={onBlurMock} />);
    component.find("input").simulate("blur");
    expect(onBlurMock).toBeCalled();
  });

  test("onBlur event change focused", function() {
    const component = mount(<EnhancedInput />);
    component.find("input").simulate("blur");
    const newState = component.state();
    expect(newState.focused).toBe(false);
  });

  test("default onFocus function returns null", function() {
    const component = renderer.create(<EnhancedInput />);
    const tree = component.toTree();
    expect(tree.props.onFocus()).toBeNull();
  });

  test("default onBlur function returns null", function() {
    const component = renderer.create(<EnhancedInput />);
    const tree = component.toTree();
    expect(tree.props.onBlur()).toBeNull();
  });
});
