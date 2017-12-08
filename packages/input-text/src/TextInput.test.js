import React from "react";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import TextInput from ".";

describe("TextInput", function() {
  configure({ adapter: new Adapter() });
  jest.useFakeTimers();
  afterEach(() => {
    clearTimeout.mockClear();
  });
  test("changing the invalid property after instantiation should update the invalid state", function() {
    const component = shallow(<TextInput />);
    const state = component.state();
    expect(state.invalid).toBe(false);

    window.setTimeout(() => {
      component.setProps({ invalid: true, validationMessages: ["foo", "bar"] });
    }, 1000);

    jest.runAllTimers();

    const finalState = component.state();
    expect(finalState.invalid).toBe(true);
    expect(finalState.validationMessages[0]).toBe("foo");
  });
  test("default onChange function returns null", function() {
    const component = renderer.create(<TextInput />);
    const tree = component.toTree();
    expect(tree.props.onChange()).toBeNull();
  });
  test("default onInvalid function returns null", function() {
    const component = renderer.create(<TextInput />);
    const tree = component.toTree();
    expect(tree.props.onInvalid()).toBeNull();
  });
  test("default onMouseOver function returns null", function() {
    const component = renderer.create(<TextInput />);
    const tree = component.toTree();
    expect(tree.props.onMouseOver()).toBeNull();
  });
  test("default onMouseLeave function returns null", function() {
    const component = renderer.create(<TextInput />);
    const tree = component.toTree();
    expect(tree.props.onMouseLeave()).toBeNull();
  });
  test("onChange property is called after input change", function() {
    const onChangeMock = jest.fn();
    const component = shallow(<TextInput onChange={onChangeMock} />);
    component.find("input").simulate("change", { target: { value: "foo" } });
    expect(onChangeMock).toBeCalled();
  });
  test("onMouseOver property is called on mouse over", function() {
    const onMouseOverMock = jest.fn();
    const component = shallow(<TextInput onMouseOver={onMouseOverMock} />);
    component.find("input").simulate("mouseover", {});
    expect(onMouseOverMock).toBeCalled();
  });
  test("onMouseLeave property is called on mouse leave", function() {
    const onMouseLeaveMock = jest.fn();
    const component = shallow(<TextInput onMouseLeave={onMouseLeaveMock} />);
    component.find("input").simulate("mouseleave", {});
    expect(onMouseLeaveMock).toBeCalled();
  });
  test("onChange event change value", function() {
    const component = shallow(<TextInput />);
    component.find("input").simulate("change", { target: { value: "foo" } });
    const newState = component.state();
    expect(newState.value).toBe("foo");
  });
  test("onChange event clears invalid state if built-in validity says it is valid", function() {
    const component = shallow(<TextInput />);
    component.find("input").simulate("change", {
      target: { value: "foo", validity: { valid: true } }
    });
    const newState = component.state();
    expect(newState.invalid).toBe(false);
  });
  test("mouseover and mouseleave events should change showTooltip state on disabled fields", function() {
    let component = shallow(<TextInput disabled />);
    const inputElement = component.find("input");
    const defaultState = component.state();

    inputElement.simulate("mouseover", {});
    const mouseOverState = component.state();

    inputElement.simulate("mouseleave", {});
    const mouseLeaveState = component.state();

    expect(defaultState.showTooltip).toBe(false);
    expect(mouseOverState.showTooltip).toBe(true);
    expect(mouseLeaveState.showTooltip).toBe(false);
  });
  test("onInvalid property is called after input change", function() {
    const onInvalidMock = jest.fn();
    const preventDefaultMock = jest.fn();
    const component = shallow(<TextInput onInvalid={onInvalidMock} />);
    component
      .find("input")
      .simulate("invalid", { preventDefault: preventDefaultMock, target: {} });
    expect(preventDefaultMock).toBeCalled();
    expect(onInvalidMock).toBeCalled();
  });
  test("onInvalid event change the state to invalid and display the browser provided message if the custom validationMessages property is empty", function() {
    const component = shallow(<TextInput />);
    component.find("input").simulate("invalid", {
      preventDefault: () => null,
      target: { validationMessage: "bar" }
    });
    const newState = component.state();
    expect(newState.invalid).toBe(true);
    expect(newState.validationMessages[0]).toBe("bar");
  });
});
