import React from "react";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";

import formInput from ".";
import Wrapper from "./styledComponents/Wrapper";

describe("formInput", function() {
  configure({ adapter: new Adapter() });

  const EnhancedInput = formInput(props => React.createElement("input", props));

  test("passing the same value on props should leave value state as it is", function() {
    const value = "some value";
    const component = shallow(<EnhancedInput value={value} />);

    const setStateMock = jest.fn();
    component.instance().setState = setStateMock;

    component.setProps({ value });

    expect(setStateMock.mock.calls.length).toBe(0);
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

  test("get focus on wrapper click", function() {
    const focusMock = jest.fn();
    const component = mount(<EnhancedInput />);
    const wrapper = component.find(Wrapper);
    const input = component.find("input").instance();
    input.focus = focusMock;
    wrapper.simulate("click");
    expect(focusMock).toHaveBeenCalledTimes(1);
  });

  test("no value when clear button is clicked", function() {
    const value = "tomato";
    const component = mount(<EnhancedInput type="search" value={value} />);
    expect(component.state("value")).toBe(value);

    component.find("span.clear").simulate("click");
    expect(component.state("value")).toBe("");
  });
});
