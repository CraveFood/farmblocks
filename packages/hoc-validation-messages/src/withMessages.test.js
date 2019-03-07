import React from "react";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";

import withMessages from ".";

describe("withMessages", () => {
  configure({ adapter: new Adapter() });

  const EnhancedInput = withMessages(props =>
    React.createElement("input", props),
  );

  describe("receiving new props", () => {
    test("changing the validationMessages property after instantiation should update the validationMessages state and leave value state as it is", () => {
      const component = shallow(<EnhancedInput value="some value" />);
      const state = component.state();

      const validationMessages = ["foo", "bar"];
      component.setProps({ validationMessages });

      const expectedState = { ...state, messages: validationMessages };
      expect(component.state()).toEqual(expectedState);
    });

    test("passing the same validationMessages property should maintain the state", () => {
      const messages = ["Error message"];
      const component = shallow(
        <EnhancedInput validationMessages={messages} />,
      );

      component.setProps({ validationMessages: messages });

      expect(component.state().messages).toEqual(messages);
    });
  });

  describe("onInvalid", () => {
    test("default onInvalid function returns null", () => {
      const component = renderer.create(<EnhancedInput />);
      const tree = component.toTree();

      expect(tree.props.onInvalid()).toBeNull();
    });

    test("onInvalid property is called after input change", () => {
      const onInvalidMock = jest.fn();
      const preventDefaultMock = jest.fn();
      const component = mount(<EnhancedInput onInvalid={onInvalidMock} />);
      component.find("input").simulate("invalid", {
        preventDefault: preventDefaultMock,
        target: {},
      });
      expect(preventDefaultMock).toBeCalled();
      expect(onInvalidMock).toBeCalled();
    });

    test("onInvalid event change the state to invalid and display the browser provided message if the custom validationMessages property is empty", () => {
      const component = mount(<EnhancedInput />);
      component.find("input").simulate("invalid", {
        preventDefault: () => null,
        target: { validationMessage: "bar" },
      });
      const newState = component.state();
      expect(newState.messages).toEqual(["bar"]);
    });
  });

  describe("onChange", () => {
    test("onChange event clears invalid state if built-in validity says it is valid", () => {
      const component = mount(<EnhancedInput />);

      // invalid event
      component.find("input").simulate("invalid", {
        preventDefault: () => null,
        target: { validationMessage: "bar" },
      });
      let state = component.state();
      expect(state.messages).toEqual(["bar"]);

      // onchange with valid event
      component.find("input").simulate("change", {
        target: { value: "foo", validity: { valid: true } },
      });

      state = component.state();
      expect(state.messages).toEqual([]);
    });

    test("onChange event clears invalid state if built-in validity says it is valid", () => {
      const messages = ["Error message"];
      const component = mount(<EnhancedInput validationMessages={messages} />);

      // onchange with valid event
      component.find("input").simulate("change", {
        target: { value: "foo", validity: { valid: true } },
      });

      const state = component.state();
      expect(state.messages).toEqual(messages);
    });

    test("onChange prop must be called", () => {
      const onChangeMock = jest.fn();
      const component = mount(<EnhancedInput onChange={onChangeMock} />);

      const event = {
        target: { value: "foo", validity: { valid: true } },
      };
      component.find("input").simulate("change", event);

      expect(onChangeMock.mock.calls.length).toBe(1);
    });
  });
});
