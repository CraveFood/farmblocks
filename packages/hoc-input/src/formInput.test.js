import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import formInput from ".";

describe("formInput", () => {
  const EnhancedInput = formInput("input");

  describe("onChange and value", () => {
    let onChangeSpy;

    beforeEach(() => {
      onChangeSpy = jest.fn();
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    const INITIAL_VALUE = "initial value";
    const UPDATED_VALUE = "uv";

    it("should update input value after receiving new value through props", () => {
      const { rerender } = render(<EnhancedInput value={INITIAL_VALUE} />);
      const input = screen.getByRole("textbox");

      expect(input).toHaveValue(INITIAL_VALUE);

      rerender(<EnhancedInput value={UPDATED_VALUE} />);
      expect(input).toHaveValue(UPDATED_VALUE);
    });

    it("should update input value after receiving new input.value through props", () => {
      const { rerender } = render(
        <EnhancedInput input={{ value: INITIAL_VALUE }} />,
      );
      const input = screen.getByRole("textbox");
      expect(input).toHaveValue(INITIAL_VALUE);

      rerender(<EnhancedInput input={{ value: UPDATED_VALUE }} />);
      expect(input).toHaveValue(UPDATED_VALUE);
    });

    it("should call onChange callback when user types in", () => {
      render(<EnhancedInput onChange={onChangeSpy} />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveValue("");

      userEvent.type(input, UPDATED_VALUE);
      expect(input).toHaveValue(UPDATED_VALUE);
      expect(onChangeSpy).toBeCalled();
    });

    it("should call input.onChange callback when user types in", () => {
      render(<EnhancedInput input={{ onChange: onChangeSpy }} />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveValue("");

      userEvent.type(input, UPDATED_VALUE);
      expect(input).toHaveValue(UPDATED_VALUE);
      expect(onChangeSpy).toBeCalled();
    });

    it("should handle clear icon click by setting input value to empty string", () => {
      render(
        <EnhancedInput
          onChange={onChangeSpy}
          type="search"
          value={INITIAL_VALUE}
        />,
      );
      const input = screen.getByRole("searchbox");
      expect(input).toHaveValue(INITIAL_VALUE);

      userEvent.click(screen.getByTestId("input-clear"));
      expect(input).toHaveValue("");
      expect(onChangeSpy).toBeCalled();
    });
  });

  describe("focus and blur", () => {
    let onFocus, onBlur;
    beforeEach(() => {
      onFocus = jest.fn();
      onBlur = jest.fn();
    });
    afterEach(() => {
      jest.resetAllMocks();
    });

    it("should call onFocus when input gets focused", () => {
      render(<EnhancedInput onFocus={onFocus} />);
      expect(onFocus).toBeCalledTimes(0);

      userEvent.click(screen.getByRole("textbox"));

      expect(onFocus).toBeCalled();
    });

    it("should call onBlur when input gets blurred", () => {
      render(
        <>
          <EnhancedInput onBlur={onBlur} focused />
          <button>click me</button>
        </>,
      );
      expect(onBlur).toBeCalledTimes(0);

      userEvent.click(screen.getByRole("button", { name: "click me" }));

      expect(onBlur).toBeCalled();
    });
    it("should set input focus when component mounts", () => {
      render(<EnhancedInput onFocus={onFocus} focused />);
      expect(onFocus).toBeCalled();
    });

    it("should set input focus when focused property changes", () => {
      const { rerender } = render(<EnhancedInput onFocus={onFocus} />);
      const input = screen.getByRole("textbox");
      expect(onFocus).toBeCalledTimes(0);
      expect(input).not.toHaveClass("focused");

      rerender(<EnhancedInput onFocus={onFocus} focused />);

      expect(onFocus).toBeCalled();
      expect(input).toHaveClass("focused");
    });

    describe("autoControlFocusedStyle", () => {
      it("should set input focused style when focused changes to true ", () => {
        const { rerender } = render(
          <EnhancedInput autoControlFocusedStyle={false} />,
        );
        const input = screen.getByRole("textbox");
        expect(input).not.toHaveClass("focused");

        // User click should not apply the focused style
        userEvent.click(input);
        expect(input).not.toHaveClass("focused");

        // Changing the property focused to true should apply the focused style
        rerender(<EnhancedInput autoControlFocusedStyle={false} focused />);
        expect(input).toHaveClass("focused");

        // Changing the property focused to false should remove the focused style
        rerender(<EnhancedInput autoControlFocusedStyle={false} />);
        expect(input).not.toHaveClass("focused");
      });
    });
  });
});
