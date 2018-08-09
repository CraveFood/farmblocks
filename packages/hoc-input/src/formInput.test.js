import React from "react";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";

import formInput from ".";
import Wrapper from "./styledComponents/Wrapper";

describe("formInput", function() {
  configure({ adapter: new Adapter() });

  const EnhancedInput = formInput("input");

  describe("receiving new props", () => {
    const value = "some value";
    let component, setStateSpy;

    beforeEach(() => {
      component = mount(<EnhancedInput value={value} />);
      setStateSpy = jest.spyOn(component.instance(), "setState");
    });

    afterEach(() => {
      setStateSpy.mockClear();
    });

    test("passing the same value on props should leave value state as it is", () => {
      component.setProps({ value });
      component.update();

      expect(setStateSpy).not.toHaveBeenCalled();
    });

    test("changing the value property should update value state", () => {
      const newValue = "New value";

      component.setProps({ value: newValue });
      expect(setStateSpy).toHaveBeenCalledWith({ value: newValue });
    });

    test("not changing the input.value property should not update value state", () => {
      component.setProps({ input: { value } });
      expect(setStateSpy).not.toHaveBeenCalled();
    });

    test("changing the input.value property should update value state", () => {
      const newValue = "Other value";

      component.setProps({ input: { value: newValue } });
      expect(setStateSpy).toHaveBeenCalledWith({ value: newValue });
    });
  });

  describe("(with value focused)", () => {
    test("changing focused property from false to true should focus", function() {
      const originalFocused = false;
      const focused = true;
      const setInputFocusMock = jest.fn();
      const component = shallow(<EnhancedInput focused={originalFocused} />);
      component.instance().setInputFocus = setInputFocusMock;
      component.setProps({ focused });
      expect(setInputFocusMock).toBeCalled();
    });

    test("changing focused property from true to false should remove input focus", function() {
      const originalFocused = true;
      const focused = false;
      const onBlurMock = jest.fn();
      const component = shallow(<EnhancedInput focused={originalFocused} />);
      component.instance().inputRef = { blur: onBlurMock };
      component.setProps({ focused });
      expect(onBlurMock).toBeCalled();
    });
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

  test("input.onChange property is called after input change", function() {
    const onChangeMock = jest.fn();
    const component = mount(
      <EnhancedInput input={{ onChange: onChangeMock, value: "foo" }} />
    );

    component.find("input").simulate("change", { target: { value: "bar" } });
    expect(onChangeMock).toBeCalled();
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
  test("click on the button to clear the input should not remove input's focus", function() {
    const value = "tomato";
    const component = mount(<EnhancedInput clearable value={value} />);
    const event = { preventDefault: jest.fn() };

    component.find("div.input").simulate("mousedown", event);
    component.find(".clear i").simulate("mousedown", event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });

  test("click on the dropdown icon should remove input's focus", () => {
    const value = "tomato";
    const component = mount(<EnhancedInput role="combobox" value={value} />);
    const event = { preventDefault: jest.fn() };

    component.find("div.input").simulate("mousedown", event);
    component.find("i").simulate("mousedown", event);
    expect(event.preventDefault).toHaveBeenCalledTimes(0);
  });
});
