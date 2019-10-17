import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import emojiSupport from "detect-emoji-support";
import "react-virtualized-auto-sizer";

import PhoneInput from "./PhoneInput";

jest.mock("detect-emoji-support", () => jest.fn().mockReturnValue(true));

jest.mock("react-virtualized-auto-sizer", () => props =>
  props.children({ width: 300, height: 340 }),
);

describe("PhoneInput", () => {
  describe("country prefix", () => {
    test("should get the country from the RFC3966 value", () => {
      const { getByText, rerender } = render(
        <PhoneInput value="tel:+4407400123456" />,
      );
      expect(getByText("🇬🇧+44")).toBeInTheDocument();

      rerender(<PhoneInput value="tel:+819012345678" />);
      expect(getByText("🇯🇵+81")).toBeInTheDocument();
    });

    test("should get show the 2 letter country code when emoji is not available", () => {
      emojiSupport.mockReturnValueOnce(false);

      const { getByText } = render(<PhoneInput value="tel:+4407400123456" />);
      expect(getByText("GB +44")).toBeInTheDocument();
    });

    test("should open popover when clicked", async () => {
      const { getByText } = render(<PhoneInput />);
      fireEvent.click(getByText("🇺🇸+1"));

      await waitForElement(() => getByText("Select Country"));
      expect(getByText("Select Country")).toBeInTheDocument();
    });

    describe("defaultCountry", () => {
      test("should set the input prefix", () => {
        const { getByText } = render(<PhoneInput defaultCountry="CA" />);
        expect(getByText("🇨🇦+1")).toBeInTheDocument();
      });

      test("should be ignored when there's a value", () => {
        const { getByText } = render(
          <PhoneInput defaultCountry="CA" value="tel:+5511987654321" />,
        );
        expect(getByText("🇧🇷+55")).toBeInTheDocument();
      });
    });
  });

  describe("number input", () => {
    test("should fill the input with the number in the national format", () => {
      const { getByDisplayValue, rerender } = render(
        <PhoneInput value="tel:+12015550123" />,
      );
      expect(getByDisplayValue("(201) 555-0123")).toBeInTheDocument();

      rerender(<PhoneInput value="tel:+5511987654321" />);
      expect(getByDisplayValue("(11) 98765-4321")).toBeInTheDocument();
    });

    test("should trigger onChange with the value formated to RFC3966", () => {
      const onChangeSpy = jest.fn();

      const { getByTestId } = render(<PhoneInput onChange={onChangeSpy} />);
      fireEvent.change(getByTestId("national-number-input"), {
        target: { value: "(888) 88" },
      });

      expect(onChangeSpy).toHaveBeenCalledWith("tel:+188888");
    });
  });

  describe("country popover", () => {
    let onChangeSpy, getByText, queryByText, getByTestId, rerender;
    beforeEach(async () => {
      onChangeSpy = jest.fn();
      ({ getByText, queryByText, getByTestId, rerender } = render(
        <PhoneInput onChange={onChangeSpy} />,
      ));
      fireEvent.click(getByText("🇺🇸+1"));
      await waitForElement(() => getByText("Select Country"));
    });

    test("should change the code when country is selected", async () => {
      fireEvent.click(getByText("Albania", { exact: false }));
      await waitForElementToBeRemoved(() => getByText("Select Country"));

      expect(getByText("🇦🇱+355")).toBeInTheDocument();
      expect(onChangeSpy).toHaveBeenCalledWith("tel:+355");
    });

    test("should search for country", async () => {
      expect(queryByText("+260")).not.toBeInTheDocument();
      // ASCII search
      fireEvent.change(getByTestId("country-search-input"), {
        target: { value: "Zambia" },
      });
      expect(getByText("+260")).toBeInTheDocument();

      // Unicode search
      expect(queryByText("Japan", { exact: false })).not.toBeInTheDocument();
      fireEvent.change(getByTestId("country-search-input"), {
        target: { value: "日本" },
      });
      expect(getByText("Japan", { exact: false })).toBeInTheDocument();
    });

    test("should show priority countries on top", async () => {
      expect(
        queryByText("New Zealand", { exact: false }),
      ).not.toBeInTheDocument();
      expect(
        queryByText("San Marino", { exact: false }),
      ).not.toBeInTheDocument();

      rerender(<PhoneInput priorityCountries="NZ,SM" />);

      expect(getByText("New Zealand", { exact: false })).toBeInTheDocument();
      expect(getByText("San Marino", { exact: false })).toBeInTheDocument();
    });

    test("should select countries by keyboard arrows", async () => {
      const down = () =>
        fireEvent.keyDown(getByTestId("country-search-input"), {
          key: "ArrowDown",
        });
      const up = () =>
        fireEvent.keyDown(getByTestId("country-search-input"), {
          key: "ArrowUp",
        });

      const enter = () =>
        fireEvent.keyDown(getByTestId("country-search-input"), {
          key: "Enter",
        });

      rerender(<PhoneInput priorityCountries="NZ,SM,FR,AR" />);

      down();
      enter();
      await waitForElementToBeRemoved(() => getByText("Select Country"));
      expect(getByText("🇳🇿+64")).toBeInTheDocument();

      fireEvent.click(getByText("🇳🇿+64"));
      await waitForElement(() => getByText("Select Country"));
      down();
      down();
      down();
      down();
      up();
      up();
      enter();
      await waitForElementToBeRemoved(() => getByText("Select Country"));
      expect(getByText("🇸🇲+378")).toBeInTheDocument();
    });
  });
});
