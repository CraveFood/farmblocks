import React from "react";
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";
import emojiSupport from "detect-emoji-support";
import "react-virtualized-auto-sizer";
import userEvent from "@testing-library/user-event";

import PhoneInput from "./PhoneInput";

jest.mock("detect-emoji-support", () => jest.fn().mockReturnValue(true));

jest.mock("react-virtualized-auto-sizer", () => props =>
  props.children({ width: 300, height: 340 }),
);

describe("PhoneInput", () => {
  describe("country prefix", () => {
    test("should get the country from the RFC3966 value", () => {
      const { rerender } = render(<PhoneInput value="tel:+4407400123456" />);
      expect(screen.getByText("🇬🇧 +44")).toBeInTheDocument();

      rerender(<PhoneInput value="tel:+819012345678" />);
      expect(screen.getByText("🇯🇵 +81")).toBeInTheDocument();
    });

    test("should get show the 2 letter country code when emoji is not available", () => {
      emojiSupport.mockReturnValueOnce(false);

      render(<PhoneInput value="tel:+4407400123456" />);
      expect(screen.getByText("GB +44")).toBeInTheDocument();
    });

    test("should open popover when clicked", async () => {
      render(<PhoneInput />);
      userEvent.click(screen.getByText("🇺🇸 +1"));

      await screen.findByText("Select Country");
    });

    describe("defaultCountry", () => {
      test("should set the input prefix", () => {
        render(<PhoneInput defaultCountry="CA" />);
        expect(screen.getByText("🇨🇦 +1")).toBeInTheDocument();
      });

      test("should be ignored when there's a value", () => {
        render(<PhoneInput defaultCountry="CA" value="tel:+5511987654321" />);
        expect(screen.getByText("🇧🇷 +55")).toBeInTheDocument();
      });
    });
  });

  describe("number input", () => {
    test("should fill the input with the number in the national format", () => {
      const { rerender } = render(<PhoneInput value="tel:+12015550123" />);
      expect(screen.getByDisplayValue("(201) 555-0123")).toBeInTheDocument();

      rerender(<PhoneInput value="tel:+5511987654321" />);

      expect(screen.getByDisplayValue("11 98765-4321")).toBeInTheDocument();
    });

    test("should trigger onChange with the value formated to RFC3966", () => {
      const onChangeSpy = jest.fn();

      render(<PhoneInput onChange={onChangeSpy} />);
      userEvent.type(screen.getByTestId("national-number-input"), "(888) 88");

      expect(onChangeSpy).toHaveBeenCalledWith("tel:+188888");
    });
  });

  describe("country popover", () => {
    let onChangeSpy, rerender;
    beforeEach(async () => {
      onChangeSpy = jest.fn();
      ({ rerender } = render(<PhoneInput onChange={onChangeSpy} />));
      userEvent.click(screen.getByText("🇺🇸 +1"));
      await screen.findByText("Select Country");
    });

    test("should change the code when country is selected", async () => {
      userEvent.click(screen.getByText("Albania", { exact: false }));
      await waitForElementToBeRemoved(() => screen.getByText("Select Country"));

      expect(screen.getByText("🇦🇱 +355")).toBeInTheDocument();
      expect(onChangeSpy).toHaveBeenCalledWith("tel:+355");
    });

    test("should search for country", async () => {
      expect(screen.queryByText("+260")).not.toBeInTheDocument();
      // ASCII search
      userEvent.type(screen.getByTestId("country-search-input"), "Zambia");
      expect(screen.getByText("+260")).toBeInTheDocument();

      // Unicode search
      expect(
        screen.queryByText("Japan", { exact: false }),
      ).not.toBeInTheDocument();
      fireEvent.change(screen.getByTestId("country-search-input"), {
        target: { value: "日本" },
      });
      expect(screen.getByText("Japan", { exact: false })).toBeInTheDocument();
    });

    test("should show priority countries on top", async () => {
      expect(
        screen.queryByText("New Zealand", { exact: false }),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("San Marino", { exact: false }),
      ).not.toBeInTheDocument();

      rerender(<PhoneInput priorityCountries="NZ,SM" />);

      expect(
        screen.getByText("New Zealand", { exact: false }),
      ).toBeInTheDocument();
      expect(
        screen.getByText("San Marino", { exact: false }),
      ).toBeInTheDocument();
    });

    test("should select countries by keyboard arrows", async () => {
      const down = () =>
        fireEvent.keyDown(screen.getByTestId("country-search-input"), {
          key: "ArrowDown",
        });
      const up = () =>
        fireEvent.keyDown(screen.getByTestId("country-search-input"), {
          key: "ArrowUp",
        });

      const enter = () =>
        fireEvent.keyDown(screen.getByTestId("country-search-input"), {
          key: "Enter",
        });

      rerender(<PhoneInput priorityCountries="NZ,SM,FR,AR" />);

      down();
      enter();
      await waitForElementToBeRemoved(() => screen.getByText("Select Country"));
      expect(screen.getByText("🇳🇿 +64")).toBeInTheDocument();

      userEvent.click(screen.getByText("🇳🇿 +64"));
      await screen.findByText("Select Country");

      down();
      down();
      down();
      down();
      up();
      up();
      enter();
      await waitForElementToBeRemoved(() => screen.getByText("Select Country"));
      expect(screen.getByText("🇸🇲 +378")).toBeInTheDocument();
    });
  });
});
