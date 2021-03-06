import { renderHook } from "@testing-library/react-hooks";

import { LEFT, RIGHT, AUTO, TOP, BOTTOM } from "./constants/positions";
import useAutoAlign from "./useAutoAlign";

describe("useAutoAlign", () => {
  it("should return the given align and position when they are not set to auto", () => {
    const originalPositionX = RIGHT;
    const originalPositionY = TOP;
    const { result } = renderHook(() =>
      useAutoAlign({ originalPositionX, originalPositionY, tooltipRef: {} }),
    );

    expect(result.current).toEqual({
      positionX: originalPositionX,
      positionY: originalPositionY,
      ready: false,
      triggerHeight: undefined,
    });
  });
  it("should return the trigger height when available and isVisible", () => {
    const originalPositionX = RIGHT;
    const originalPositionY = TOP;
    const { result } = renderHook(() =>
      useAutoAlign({
        originalPositionX,
        originalPositionY,
        isVisible: true,
        tooltipRef: {
          current: {
            getBoundingClientRect: () => ({}),
            parentElement: {
              previousElementSibling: {
                getBoundingClientRect: () => ({ height: 100 }),
              },
            },
          },
        },
      }),
    );

    expect(result.current).toEqual({
      positionX: originalPositionX,
      positionY: originalPositionY,
      ready: true,
      triggerHeight: 100,
    });
  });

  describe("Auto align", () => {
    it("should return default align and position for auto aligned when no tooltipRef is given ", () => {
      const { result } = renderHook(() =>
        useAutoAlign({
          originalPositionX: AUTO,
          originalPositionY: AUTO,
          tooltipRef: {},
          isVisible: true,
        }),
      );

      expect(result.current).toEqual({
        positionX: LEFT,
        positionY: BOTTOM,
        ready: true,
        triggerHeight: undefined,
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
            originalPositionX: AUTO,
            originalPositionY: AUTO,
            tooltipRef,
            isVisible: true,
            offset: "15px",
          }),
        );
        expect(result.current).toEqual({
          positionX: LEFT,
          positionY: BOTTOM,
          ready: true,
          triggerHeight: undefined,
        });
      });

      it("should return RIGHT and TOP if tooltip is outside the viewport", () => {
        const tooltipRef = {
          current: {
            getBoundingClientRect: () => ({ right: 1001, y: 1001, height: 10 }),
            closest: () => false,
          },
        };

        const { result } = renderHook(() =>
          useAutoAlign({
            originalPositionX: AUTO,
            originalPositionY: AUTO,
            tooltipRef,
            isVisible: true,
            offset: "15px",
          }),
        );
        expect(result.current).toEqual({
          positionX: RIGHT,
          positionY: TOP,
          ready: true,
          triggerHeight: undefined,
        });
      });

      it("should return RIGHT and BOTTOM if tooltip is outside the viewport and the tooltip doesn't fit the screen on the top", () => {
        const tooltipRef = {
          current: {
            getBoundingClientRect: () => ({
              right: 1001,
              y: 1001,
              height: 990,
            }),
            closest: () => false,
          },
        };

        const { result } = renderHook(() =>
          useAutoAlign({
            originalPositionX: AUTO,
            originalPositionY: AUTO,
            tooltipRef,
            isVisible: true,
            offset: "15px",
          }),
        );
        expect(result.current).toEqual({
          positionX: RIGHT,
          positionY: BOTTOM,
          ready: true,
          triggerHeight: undefined,
        });
      });
    });
  });
});
