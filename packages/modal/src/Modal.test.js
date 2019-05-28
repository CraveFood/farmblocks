import React from "react";
import { render, fireEvent } from "react-testing-library";

import Modal from "./Modal";

describe("Modal", () => {
  describe("render", () => {
    it("should render the content when isOpen", () => {
      const { rerender } = render(<Modal className="myModal" />);
      expect(document.querySelector(".myModal")).not.toBeInTheDocument();

      rerender(<Modal className="myModal" isOpen />);
      expect(document.querySelector(".myModal")).toBeInTheDocument();
    });
    it("should NOT render anything in the container", () => {
      const content = "this will not be rendered in the container";
      const { container } = render(
        <Modal className="myModal" isOpen>
          {content}
        </Modal>,
      );

      expect(container).not.toHaveTextContent(content);
    });
  });

  describe("onRequestClose", () => {
    let onRequestCloseSpy;
    beforeEach(() => {
      onRequestCloseSpy = jest.fn();
    });
    afterEach(() => {
      onRequestCloseSpy.mockReset();
    });

    it("should trigger on close button click", () => {
      const { getByTestId } = render(
        <Modal onRequestClose={onRequestCloseSpy} isOpen />,
      );

      expect(onRequestCloseSpy).not.toHaveBeenCalled();

      fireEvent.click(getByTestId("modal-close-button"));
      expect(onRequestCloseSpy).toHaveBeenCalledTimes(1);
    });

    it("should trigger on overlay click", () => {
      const { getByTestId } = render(
        <Modal onRequestClose={onRequestCloseSpy} isOpen />,
      );

      expect(onRequestCloseSpy).not.toHaveBeenCalled();

      fireEvent.click(getByTestId("modal-overlay"));
      expect(onRequestCloseSpy).toHaveBeenCalledTimes(1);
    });

    it("should NOT trigger on overlay click when shouldCloseOnOverlayClick is false", () => {
      const { getByTestId } = render(
        <Modal
          onRequestClose={onRequestCloseSpy}
          isOpen
          shouldCloseOnOverlayClick={false}
        />,
      );

      fireEvent.click(getByTestId("modal-overlay"));
      expect(onRequestCloseSpy).not.toHaveBeenCalled();
    });

    it("should trigger on ESC press", () => {
      const { container } = render(
        <Modal onRequestClose={onRequestCloseSpy} isOpen />,
      );

      expect(onRequestCloseSpy).not.toHaveBeenCalled();

      fireEvent.keyDown(container, { key: "Escape" });
      expect(onRequestCloseSpy).toHaveBeenCalledTimes(1);
    });

    it("should NOT trigger on ESC press when shouldCloseOnEsc is false", () => {
      const { container } = render(
        <Modal
          onRequestClose={onRequestCloseSpy}
          isOpen
          shouldCloseOnEsc={false}
        />,
      );

      fireEvent.keyDown(container, { key: "Escape" });
      expect(onRequestCloseSpy).not.toHaveBeenCalled();
    });

    it("should NOT trigger on other key press", () => {
      const { container } = render(
        <Modal onRequestClose={onRequestCloseSpy} isOpen />,
      );

      ["Enter", "Tab", " ", "Unidentified", "Alt"].forEach(key => {
        fireEvent.keyDown(container, { key });
      });
      expect(onRequestCloseSpy).not.toHaveBeenCalled();
    });

    it("should NOT trigger on ESC press after unmount", () => {
      const { container, unmount } = render(
        <Modal onRequestClose={onRequestCloseSpy} isOpen />,
      );

      unmount();
      fireEvent.keyDown(container, { key: "Escape" });
      expect(onRequestCloseSpy).not.toHaveBeenCalled();
    });
  });

  describe("scroll lock", () => {
    it("should lock scroll of underneath content by setting body overflow to hidden", () => {
      expect(document.body.style.overflow).toEqual("");

      render(<Modal className="myModal" isOpen />);
      expect(document.body.style.overflow).toEqual("hidden");
    });

    it("should roll back original overflow on unmount", () => {
      const originalOverflow = "original";
      document.body.style.overflow = originalOverflow;

      const { unmount } = render(<Modal className="myModal" isOpen />);
      expect(document.body.style.overflow).not.toEqual(originalOverflow);

      unmount();
      expect(document.body.style.overflow).toEqual(originalOverflow);
    });
  });
});