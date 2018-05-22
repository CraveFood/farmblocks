import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AmountSelectors from "./AmountSelectors";

Enzyme.configure({ adapter: new Adapter() });

describe("Amount selectors", () => {
  describe("Buttons", () => {
    test("decrement button should decrease the state value by 1", () => {
      const initialValue = 2;
      const expectedValue = 1;
      const component = shallow(<AmountSelectors value={initialValue} />);
      component.children(".decreaseButton").simulate("click");

      expect(component.state("value")).toBe(expectedValue);
    });
    test("increment button should increase the state value by 1", () => {
      const initialValue = 1;
      const expectedValue = 2;
      const component = shallow(<AmountSelectors value={initialValue} />);
      component.children(".increaseButton").simulate("click");

      expect(component.state("value")).toBe(expectedValue);
    });
  });
  describe("onChange function", () => {
    test("should add to state a value between min and max values", () => {
      const initialValue = 0;
      const onChangeValue = 2;

      const component = shallow(
        <AmountSelectors min={initialValue} value={initialValue} />
      );
      const { onChange } = component.instance();

      onChange(onChangeValue);

      expect(component.state("value")).toBe(onChangeValue);
      expect(component.state("validationMessages")).toEqual([]);
    });
    test("should not add to state a value below min value", () => {
      const initialValue = 1;
      const onChangeValue = 0;

      const component = shallow(
        <AmountSelectors min={initialValue} value={initialValue} />
      );
      const { onChange } = component.instance();

      onChange(onChangeValue);

      expect(component.state("value")).toBe(initialValue);
      expect(component.state("validationMessages")).toEqual(["Invalid value"]);
    });
    test("should not add to state a value above max value", () => {
      const initialValue = 1;
      const onChangeValue = 2;

      const component = shallow(
        <AmountSelectors max={initialValue} value={initialValue} />
      );
      const { onChange } = component.instance();

      onChange(onChangeValue);

      expect(component.state("value")).toBe(initialValue);
      expect(component.state("validationMessages")).toEqual(["Invalid value"]);
    });
    test("should handle an event fired by input", () => {
      const initialValue = 0;
      const event = {
        target: {
          value: 1
        }
      };
      const component = shallow(<AmountSelectors value={initialValue} />);
      const { onChange } = component.instance();

      onChange(event);

      expect(component.state("value")).toBe(event.target.value);
    });
  });
});
