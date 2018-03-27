import { LEFT, RIGHT, AUTO } from "./constants/alignments";
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
      getAlign = getAutoAlign(bodyWidth)(containerRef);
    });
    it("should return the given align if it's not auto", () => {
      expect(getAlign("other")).toBe("other");
    });
    it("should get element position in document", () => {
      getAlign(AUTO);
      expect(containerRef.getBoundingClientRect).toHaveBeenCalledTimes(1);
    });
    it("should return left when element is on left side of the document", () => {
      expect(getAlign(AUTO)).toBe(LEFT);
    });
    it("should return right when element is on the right side of the document", () => {
      getBoundingClientRectMock.mockReturnValue({ x: 800 });
      expect(getAlign(AUTO)).toBe(RIGHT);
    });
  });
});
