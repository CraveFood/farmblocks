import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TextInput from "./TextInput";

describe("TextInput", () => {
  let onUncover, onBlur;

  beforeEach(() => {
    onUncover = jest.fn();
    onBlur = jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("protected", () => {
    const INITIAL_VALUE = "initial value";
    const NEW_VALUE = "lorem ipsum";

    it("click on pencil icon should uncover protected field", () => {
      render(<TextInput protected onUncover={onUncover} />);
      expect(onUncover).not.toBeCalled();
      expect(screen.queryByTestId("protected-input-cover")).toBeInTheDocument();

      userEvent.click(screen.getByTestId("edit-link"));

      expect(
        screen.queryByTestId("protected-input-cover"),
      ).not.toBeInTheDocument();
      expect(onUncover).toBeCalled();
    });

    it("should commit changes on ENTER", () => {
      render(<TextInput protected value={INITIAL_VALUE} />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveValue(INITIAL_VALUE);
      expect(screen.queryByTestId("protected-input-cover")).toBeInTheDocument();

      // Remove cover
      userEvent.click(screen.getByTestId("edit-link"));
      expect(
        screen.queryByTestId("protected-input-cover"),
      ).not.toBeInTheDocument();

      // Enter new value
      fireEvent.change(input, { target: { value: NEW_VALUE } });
      expect(input).toHaveValue(NEW_VALUE);

      // After pressing the enter key, the value should be commited
      fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

      expect(input).toHaveValue(NEW_VALUE);
      expect(screen.getByTestId("protected-input-cover")).toBeInTheDocument();
    });

    it("should cancel changes and call onBlur after clicking on an outer element", () => {
      render(
        <>
          <button>click me</button>
          <TextInput protected value={INITIAL_VALUE} onBlur={onBlur} />
        </>,
      );
      const input = screen.getByRole("textbox");
      expect(input).toHaveValue(INITIAL_VALUE);
      expect(screen.queryByTestId("protected-input-cover")).toBeInTheDocument();

      // Remove cover
      userEvent.click(screen.getByTestId("edit-link"));
      expect(
        screen.queryByTestId("protected-input-cover"),
      ).not.toBeInTheDocument();

      // Enter new value
      fireEvent.change(input, { target: { value: NEW_VALUE } });
      expect(input).toHaveValue(NEW_VALUE);

      // click on outer element to input loose its focus
      userEvent.click(screen.getByRole("button", { name: "click me" }));

      expect(onBlur).toBeCalled();
      expect(input).toHaveValue(INITIAL_VALUE);
      expect(screen.getByTestId("protected-input-cover")).toBeInTheDocument();
    });

    it("should cancel changes on ESC", () => {
      render(<TextInput protected value={INITIAL_VALUE} />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveValue(INITIAL_VALUE);
      expect(screen.queryByTestId("protected-input-cover")).toBeInTheDocument();

      // Remove cover
      userEvent.click(screen.getByTestId("edit-link"));
      expect(
        screen.queryByTestId("protected-input-cover"),
      ).not.toBeInTheDocument();

      // Enter new value
      fireEvent.change(input, { target: { value: NEW_VALUE } });
      expect(input).toHaveValue(NEW_VALUE);

      // After pressing the esc key, the value should go back to the initial
      userEvent.type(input, "{esc}");

      expect(input).toHaveValue(INITIAL_VALUE);
      expect(screen.getByTestId("protected-input-cover")).toBeInTheDocument();
    });

    it("should update input value through props", () => {});
  });
});
