import { renderHook } from "@testing-library/react-hooks";

import { LEFT, RIGHT, AUTO } from "./constants/alignments";
import { TOP, BOTTOM } from "./constants/positions";
import useAutoAlign from "./useAutoAlign";

describe("useAutoAlign", () => {
  it("should return the given align and position when they are not set to auto", () => {
    const originalAlign = RIGHT;
    const originalPosition = TOP;
    const { result } = renderHook(() =>
      useAutoAlign({ originalAlign, originalPosition, tooltipRef: {} }),
    );

    expect(result.current).toEqual({
      align: originalAlign,
      position: originalPosition,
    });
  });

  describe("Auto align", () => {
    it("should return default align and position for auto aligned when no tooltipRef is given ", () => {
      const { result } = renderHook(() =>
        useAutoAlign({
          originalAlign: AUTO,
          originalPosition: AUTO,
          tooltipRef: {},
        }),
      );

      expect(result.current).toEqual({
        align: LEFT,
        position: BOTTOM,
      });
    });

    describe("with boundariesSelector", () => {
      it("should return RIGHT and TOP when tooltip is outside boundaries", () => {
        const container = {
          getBoundingClientRect: () => ({ right: 90, y: 40 }),
        };

        const tooltipRef = {
          current: {
            getBoundingClientRect: () => ({ right: 100, y: 50 }),
            closest: () => container,
          },
        };
        const boundariesSelector = ".myContainer";

        const { result } = renderHook(() =>
          useAutoAlign({
            originalAlign: AUTO,
            originalPosition: AUTO,
            tooltipRef,
            boundariesSelector,
          }),
        );
        expect(result.current).toEqual({ align: RIGHT, position: TOP });
      });
      it("should return LEFT and BOTTOM when tooltip is inside boundaries", () => {
        const container = {
          getBoundingClientRect: () => ({ right: 150, y: 140 }),
        };

        const tooltipRef = {
          current: {
            getBoundingClientRect: () => ({ right: 100, y: 50 }),
            closest: () => container,
          },
        };
        const boundariesSelector = ".myContainer";

        const { result } = renderHook(() =>
          useAutoAlign({
            originalAlign: AUTO,
            originalPosition: AUTO,
            tooltipRef,
            boundariesSelector,
          }),
        );
        expect(result.current).toEqual({ align: LEFT, position: BOTTOM });
      });
    });

    describe("without boundariesSelector", () => {
      let originalWindowWidth;
      beforeEach(() => {
        originalWindowWidth = window.innerWidth;
        window.innerWidth = 1000;
        window.innerHeight = 1000;
      });
      afterEach(() => {
        window.innerWidth = originalWindowWidth;
      });

      it("should return LEFT and BOTTOM if tooltip is inside the viewport", () => {
        const tooltipRef = {
          current: {
            getBoundingClientRect: () => ({ right: 100, y: 50 }),
            closest: () => false,
          },
        };

        const { result } = renderHook(() =>
          useAutoAlign({
            originalAlign: AUTO,
            originalPosition: AUTO,
            tooltipRef,
          }),
        );
        expect(result.current).toEqual({ align: LEFT, position: BOTTOM });
      });

      it("should return LEFT and BOTTOM if tooltip is outside the viewport", () => {
        const tooltipRef = {
          current: {
            getBoundingClientRect: () => ({ right: 1001, y: 1001 }),
            closest: () => false,
          },
        };

        const { result } = renderHook(() =>
          useAutoAlign({
            originalAlign: AUTO,
            originalPosition: AUTO,
            tooltipRef,
          }),
        );
        expect(result.current).toEqual({ align: RIGHT, position: TOP });
      });
    });
  });
});
