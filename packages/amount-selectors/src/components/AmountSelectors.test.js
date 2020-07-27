import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AmountSelectors from "./AmountSelectors";

describe("Amount selectors", () => {
  let onChange;
  beforeEach(() => {
    onChange = jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  describe("Buttons", () => {
    const value = 2.5;
    it("decrement button should decrease value by 1", () => {
      render(<AmountSelectors value={value} onChange={onChange} />);
      const input = screen.getByRole("spinbutton");

      expect(input).toHaveValue(value);

      userEvent.click(screen.getByTestId("button--decrease"));
      expect(onChange).toBeCalledWith(value - 1);
      expect(input).toHaveValue(value - 1);
    });
    it("increment button should increase value by 1", () => {
      render(<AmountSelectors value={value} onChange={onChange} />);
      const input = screen.getByRole("spinbutton");

      expect(input).toHaveValue(value);

      userEvent.click(screen.getByTestId("button--increase"));
      expect(onChange).toBeCalledWith(value + 1);
      expect(input).toHaveValue(value + 1);
    });

    it("should increase and decrease with custom step", () => {
      const step = 0.5;
      render(<AmountSelectors value={value} onChange={onChange} step={step} />);
      const input = screen.getByRole("spinbutton");

      expect(input).toHaveValue(value);

      userEvent.click(screen.getByTestId("button--increase"));
      expect(onChange).toBeCalledWith(value + step);
      expect(input).toHaveValue(value + step);

      userEvent.click(screen.getByTestId("button--decrease"));
      expect(onChange).toBeCalledWith(value);
      expect(input).toHaveValue(value);
    });

    it("click on remove button should fire onRemoveClick", () => {
      const onRemoveClick = jest.fn();
      render(
        <AmountSelectors
          value={value}
          min={value}
          onChange={onChange}
          onRemoveClick={onRemoveClick}
          removable
        />,
      );
      const input = screen.getByRole("spinbutton");
      expect(input).toHaveValue(value);

      userEvent.click(screen.getByTestId("button--remove"));

      expect(onRemoveClick).toBeCalled();
    });
  });

  describe("Formatting", () => {
    it("value should be formatted after onBlur", () => {
      render(
        <>
          <AmountSelectors onChange={onChange} value={1} />
          <button>Click me so input will loose focus</button>
        </>,
      );

      const input = screen.getByRole("spinbutton");

      userEvent.type(input, "{backspace}{backspace}abc99.8");
      userEvent.click(
        screen.getByRole("button", {
          name: "Click me so input will loose focus",
        }),
      );

      expect(onChange).toHaveBeenLastCalledWith(99.8);
      expect(input).toHaveValue(99.8);
    });

    it("value should be capped at max and min after onBlur", () => {
      const max = 10;
      const min = 4;

      render(
        <>
          <AmountSelectors onChange={onChange} max={max} min={min} />
          <button>Click me so input will loose focus</button>
        </>,
      );
      const button = screen.getByRole("button", {
        name: "Click me so input will loose focus",
      });

      const input = screen.getByRole("spinbutton");
      expect(input).toHaveValue(0);

      userEvent.type(input, "{backspace}{backspace}999");
      userEvent.click(button);
      expect(input).toHaveValue(max);
      expect(onChange).toBeCalledWith(max);

      userEvent.type(input, "{backspace}{backspace}3");
      userEvent.click(button);
      expect(input).toHaveValue(min);
      expect(onChange).toBeCalledWith(min);
    });
  });

  describe("component update", () => {
    it("should update value when prop value is set after mount", () => {
      const { rerender } = render(<AmountSelectors value={5} />);
      const input = screen.getByRole("spinbutton");

      expect(input).toHaveValue(5);

      rerender(<AmountSelectors value={7} />);
      expect(input).toHaveValue(7);
    });
  });

  describe("max and minimum messages", () => {
    it("should show maximum amount tooltip when component mounts", () => {
      render(<AmountSelectors max={1} value={3} />);
      expect(screen.getByText("Reached maximum amount")).toBeInTheDocument();
    });

    it("should show minimum amount tooltip when component mounts", () => {
      render(<AmountSelectors min={5} value={3} />);
      expect(screen.getByText("Reached minimum amount")).toBeInTheDocument();
    });
  });
});
