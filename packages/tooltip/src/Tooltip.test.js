import { LEFT, RIGHT } from "./constants/alignments";
import { getAutoAlign } from "./Tooltip";

describe("Tooltip", () => {
  describe("getAutoAlign", () => {
    let containerRef, getBoundingClientRectMock, getAlign;
    const bodyWidth = 1000;
    beforeEach(() => {
      getBoundingClientRectMock = jest.fn();
      getBoundingClientRectMock.mockReturnValue({ x: 0 });
      containerRef = {
        getBoundingClientRect: getBoundingClientRectMock
      };
      getAlign = getAutoAlign(bodyWidth);
    });
    it("should get element position in document", () => {
      getAlign(containerRef);
      expect(containerRef.getBoundingClientRect).toHaveBeenCalledTimes(1);
    });
    it("should return left when element is on left side of the document", () => {
      expect(getAlign(containerRef)).toBe(LEFT);
    });
    it("should return right when element is on the right side of the document", () => {
      getBoundingClientRectMock.mockReturnValue({ x: 800 });
      expect(getAlign(containerRef)).toBe(RIGHT);
    });
  });
});
