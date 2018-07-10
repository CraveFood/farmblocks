import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import protectedValue from "./protectedValue";

describe("TextInput > protectedValue", () => {
  configure({ adapter: new Adapter() });

  const Input = props => <input />;
  const EnhancedInput = protectedValue(Input);

  test("click on the pencil should uncover protected field", () => {
    const originalValue = "Foo";
    const component = mount(<EnhancedInput value={originalValue} protected />);
    const editButton = component.find("a");
    const isCovered = () => component.find("InputCover").length === 1;
    expect(isCovered()).toBe(true);
    editButton.simulate("click");
    expect(isCovered()).toBe(false);
    expect(component.state("isEditing")).toBe(true);
  });

  test("the passed onKeyDown handler should be called after executing the internal component's onKeyDown", () => {
    const onKeyDownMock = jest.fn();
    const component = mount(
      <EnhancedInput protected onKeyDown={onKeyDownMock} />
    );
    const keyDownEvent = { keyCode: 64 };
    component.instance().onKeyDown(keyDownEvent);
    expect(onKeyDownMock).toBeCalledWith(keyDownEvent);
  });

  test("pressing Esc key when editing should return the original value, call the handler and cover the field with a protection again", () => {
    const originalValue = "Foo";
    const newValue = "Bar";
    const onCancelMock = jest.fn();
    const component = mount(
      <EnhancedInput value={originalValue} protected onCancel={onCancelMock} />
    );
    const editButton = component.find("a");
    const isCovered = () => component.find("InputCover").length === 1;
    editButton.simulate("click");
    const keyDownEvent = {
      key: "Escape",
      target: { value: newValue }
    };
    component.instance().onKeyDown(keyDownEvent);
    component.update();
    expect(component.state("value")).toBe(originalValue);
    expect(onCancelMock).toBeCalled();
    expect(isCovered()).toBe(true);
  });

  test("pressing Enter key when editing should replace the original value, call the handler and cover the field with a protection again", () => {
    const originalValue = "Foo";
    const newValue = "Bar";
    const onReplaceMock = jest.fn();
    const component = mount(
      <EnhancedInput
        value={originalValue}
        protected
        onReplace={onReplaceMock}
      />
    );
    const editButton = component.find("a");
    const isCovered = () => component.find("InputCover").length === 1;
    editButton.simulate("click");
    const keyDownEvent = {
      key: "Enter",
      target: { value: newValue }
    };
    component.instance().onKeyDown(keyDownEvent);
    component.update();
    expect(component.state("value")).toBe(newValue);
    expect(onReplaceMock).toBeCalledWith(newValue);
    expect(isCovered()).toBe(true);
  });

  test("replacing the value by changing the property after mount should change state value without triggering the onReplace handler", () => {
    const originalValue = "Foo";
    const newValue = "Bar";
    const onReplaceMock = jest.fn();
    const component = mount(
      <EnhancedInput
        value={originalValue}
        protected
        onReplace={onReplaceMock}
      />
    );
    component.setProps({ value: newValue });
    expect(component.state("value")).toBe(newValue);
    expect(onReplaceMock).not.toBeCalled();
  });
});
