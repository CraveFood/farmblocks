import { LEFT, RIGHT } from "./constants/alignments";
import { getAutoAlign } from "./Tooltip";

const createDOMNodeMock = (right, parentRight) => ({
  getBoundingClientRect: jest.fn().mockReturnValue({ right }),
  closest:
    parentRight && jest.fn().mockReturnValue(createDOMNodeMock(parentRight)),
});

describe("Tooltip", () => {
  describe("getAutoAlign", () => {
    it("should return LEFT if no tooltipRef is given", () => {
      expect(getAutoAlign()).toBe(LEFT);
    });
    describe("with bondariesSelector", () => {
      it("should search for the closest parent that matches the bondariesSelector", () => {
        const tooltipRef = createDOMNodeMock(250, 500);
        const selector = ".myContainer";
        getAutoAlign(tooltipRef, selector);
        expect(tooltipRef.closest).toHaveBeenCalledTimes(1);
        expect(tooltipRef.closest).toHaveBeenCalledWith(selector);
      });
      it("should return LEFT if tooltip is inside the bondaries", () => {
        const tooltipRef = createDOMNodeMock(250, 500);
        expect(getAutoAlign(tooltipRef, ".aSelector")).toBe(LEFT);
      });
      it("should return RIGHT if tooltip right border exceeds the bondaries width", () => {
        const tooltipRef = createDOMNodeMock(750, 500);
        expect(getAutoAlign(tooltipRef, ".aSelector")).toBe(RIGHT);
      });
    });
    describe("without bondariesSelector", () => {
      let originalWindowWidth;
      beforeEach(() => {
        originalWindowWidth = window.innerWidth;
        window.innerWidth = 1000;
      });
      afterEach(() => {
        window.innerWidth = originalWindowWidth;
      });
      it("should return LEFT if tooltip is inside the viewport", () => {
        const tooltipRef = createDOMNodeMock(500);
        expect(getAutoAlign(tooltipRef)).toBe(LEFT);
      });
      it("should return RIGHT if tooltip right border exceeds the viewport width", () => {
        const tooltipRef = createDOMNodeMock(1500);
        expect(getAutoAlign(tooltipRef)).toBe(RIGHT);
      });
    });
  });
});
