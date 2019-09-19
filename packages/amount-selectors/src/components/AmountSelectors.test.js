import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";

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
      component.find("input").simulate("focus");
      expect(component.state("focused")).toBe(true);
      component
        .find("input")
        .simulate("change", { target: { value: newValue } });
      component.find("input").simulate("blur", {});
      expect(component.state("displayValue")).toBe(expectedDisplayValue);
      expect(component.state("focused")).toBe(false);
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

    test("value should be capped at max and min after onBlur", () => {
      const maxValue = 10;
      const minValue = 4;
      const bigValue = "300";
      const smallValue = "1";
      const expectedMaxDisplayValue = "10.00";
      const expectedMinDisplayValue = "4.00";
      const component = mount(
        <AmountSelectors max={maxValue} min={minValue} />,
      );
      const input = component.find("input");
      input.simulate("change", { target: { value: bigValue } });
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
        <AmountSelectors min={initialValue} value={initialValue} />,
      );
      const { onChange } = component.instance();

      expect(component.state("displayValue")).toBe("0.00");

      onChange(onChangeValue);

      expect(component.state("value")).toBe(onChangeValue);
      expect(component.state("displayValue")).toBe(onChangeValue);
    });

    test("should handle an event fired by input", () => {
      const initialValue = 0;
      const event = {
        target: {
          value: 1,
        },
      };
      const component = shallow(<AmountSelectors value={initialValue} />);
      const { onChange } = component.instance();

      onChange(event);

      expect(component.state("value")).toBe(event.target.value);
    });

    test("should disable both buttons when enforceStep is passed if browser validation fail with step mismatch", () => {
      const step = 0.5;
      const event = {
        target: {
          value: 1.2,
          validity: {
            stepMismatch: true,
          },
        },
      };
      const component = shallow(<AmountSelectors step={step} enforceStep />);
      component.instance().onChange(event);
      expect(component.state().disableBoth).toBe(true);
    });

    test("should disable both buttons if browser validation fail with bad input error", () => {
      const event = {
        target: {
          value: "aaa",
          validity: {
            stepMismatch: false,
            badInput: true,
          },
        },
      };
      const component = shallow(<AmountSelectors />);
      component.instance().onChange(event);
      expect(component.state().disableBoth).toBe(true);
    });
  });

  describe("component update", () => {
    test("should update value when prop value is set after mount", () => {
      const onChange = jest.fn();
      const component = mount(
        <AmountSelectors value={1} onChange={onChange} />,
      );
      const newValue = 2;
      component.setProps({ value: newValue });
      expect(component.state("value")).toBe(newValue);
    });

    test("should update displayed value when prop value changes", () => {
      const nextValue = 10;
      const expectedDisplayValue = "10.00";
      const component = mount(<AmountSelectors value={0} />);
      component.setProps({ value: nextValue });
      expect(component.state().displayValue).toBe(expectedDisplayValue);
    });
  });

  test("getValidValue should return a valid value with 2 decimal places", () => {
    const component = shallow(<AmountSelectors />);
    const { getValidValue } = component.instance();

    const value = 3.345678;
    const validValue = getValidValue(value);

    const expectedValue = Number(value.toFixed(2));

    expect(validValue).toBe(expectedValue);
  });

  describe("max and minimum messages", () => {
    test("should show maximum amount tooltip when component mounts", () => {
      const { queryByText } = render(<AmountSelectors max={1} value={3} />);
      expect(queryByText("Reached maximum amount")).toBeInTheDocument();
    });

    test("should show maximum amount tooltip when component gets focused", async () => {
      const { queryByText, getByTestId } = render(
        <AmountSelectors max={1} value={3} showBoundariesMessageOnlyOnFocus />,
      );
      expect(queryByText("Reached maximum amount")).not.toBeInTheDocument();

      fireEvent.focus(getByTestId("input-text"));
      expect(queryByText("Reached maximum amount")).toBeInTheDocument();

      fireEvent.change(getByTestId("input-text"), {
        target: { value: 0.5 },
      });
      await waitForElementToBeRemoved(() =>
        queryByText("Reached maximum amount"),
      );
      expect(queryByText("Reached maximum amount")).not.toBeInTheDocument();
    });

    test("should show minimum amount tooltip when component mounts", () => {
      const { queryByText } = render(<AmountSelectors min={5} value={3} />);
      expect(queryByText("Reached minimum amount")).toBeInTheDocument();
    });

    test("should show minimum amount tooltip when component gets focused", async () => {
      const { queryByText, getByTestId } = render(
        <AmountSelectors min={3} value={1} showBoundariesMessageOnlyOnFocus />,
      );
      expect(queryByText("Reached minimum amount")).not.toBeInTheDocument();

      fireEvent.focus(getByTestId("input-text"));
      expect(queryByText("Reached minimum amount")).toBeInTheDocument();

      fireEvent.change(getByTestId("input-text"), {
        target: { value: 5 },
      });
      await waitForElementToBeRemoved(() =>
        queryByText("Reached minimum amount"),
      );
      expect(queryByText("Reached minimum amount")).not.toBeInTheDocument();
    });
  });
});
