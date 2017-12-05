import React from "react";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import TextInput from ".";

describe("TextInput", function() {
  configure({ adapter: new Adapter() });
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
  test("onChange property is called after input change", function() {
    const onChangeMock = jest.fn();
    const component = shallow(<TextInput onChange={onChangeMock} />);
    component.find("input").simulate("change", { target: { value: "foo" } });
    expect(onChangeMock).toBeCalled();
  });
  test("onChange event clears invalid state and change value", function() {
    const component = shallow(<TextInput />);
    component.find("input").simulate("change", { target: { value: "foo" } });
    const newState = component.state();
    expect(newState.value).toBe("foo");
    expect(newState.invalid).toBe(false);
  });
  test("onInvalid property is called after input change", function() {
    const onInvalidMock = jest.fn();
    const preventDefaultMock = jest.fn();
    const component = shallow(<TextInput onInvalid={onInvalidMock} />);
    component
      .find("input")
      .simulate("invalid", { preventDefault: preventDefaultMock });
    expect(preventDefaultMock).toBeCalled();
    expect(onInvalidMock).toBeCalled();
  });
  test("onInvalid event change the state to invalid", function() {
    const component = shallow(<TextInput />);
    component.find("input").simulate("invalid", { preventDefault: () => null });
    expect(component.state().invalid).toBe(true);
  });
});
