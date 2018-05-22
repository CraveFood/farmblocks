import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
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
  describe("Formatting", () => {
    test("value should be formatted after onBlur", () => {
      const component = mount(<AmountSelectors />);
      const newValue = "2";
      const expectedDisplayValue = "2.00";
      component
        .find("input")
        .simulate("change", { target: { value: newValue } });
      component.find("input").simulate("blur", {});
      expect(component.state("displayValue")).toBe(expectedDisplayValue);
    });

    test("empty input should display 0", () => {
      const component = mount(<AmountSelectors value={10} />);
      const newValue = "";
      const expectedDisplayValue = "0.00";
      component
        .find("input")
        .simulate("change", { target: { value: newValue } });
      component.find("input").simulate("blur", {});
      expect(component.state("displayValue")).toBe(expectedDisplayValue);
    });

    test("value should be capped at max and min fter onBlur", () => {
      const maxValue = 10;
      const minValue = 4;
      const bigVaalue = "300";
      const smallValue = "1";
      const expectedMaxDisplayValue = "10.00";
      const expectedMinDisplayValue = "4.00";
      const component = mount(
        <AmountSelectors max={maxValue} min={minValue} />
      );
      const input = component.find("input");
      input.simulate("change", { target: { value: bigVaalue } });
      input.simulate("blur", {});
      expect(component.state("displayValue")).toBe(expectedMaxDisplayValue);
      input.simulate("change", { target: { value: smallValue } });
      input.simulate("blur", {});
      expect(component.state("displayValue")).toBe(expectedMinDisplayValue);
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
