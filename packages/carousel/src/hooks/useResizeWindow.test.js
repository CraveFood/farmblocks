import React from "react";
import { render } from "@testing-library/react";
import PropTypes from "prop-types";
import useResizeWindow from "./useResizeWindow";

const CompWithResizeHook = ({
  displayNumber,
  setDisplayNumber,
  setCurrentIndex,
  dotIndex,
  numberOfCards,
  defaultQtyOfSlides,
  breakpoints,
  infiniteLoop,
}) => {
  useResizeWindow({
    displayNumber,
    setDisplayNumber,
    setCurrentIndex,
    dotIndex,
    numberOfCards,
    defaultQtyOfSlides,
    breakpoints,
    infiniteLoop,
  });

  return (
    <div>
      <img src="image1.png" alt="image1.png" />
    </div>
  );
};

CompWithResizeHook.propTypes = {
  displayNumber: PropTypes.number,
  setDisplayNumber: PropTypes.func,
  setCurrentIndex: PropTypes.func,
  dotIndex: PropTypes.number,
  numberOfCards: PropTypes.number,
  defaultQtyOfSlides: PropTypes.number,
  breakpoints: PropTypes.arrayOf(PropTypes.number),
  infiniteLoop: PropTypes.bool,
};

describe("(Carousel/hooks) useResizeWindow", () => {
  const setDisplayNumberMock = jest.fn();
  const setCurrentIndexMock = jest.fn();
  const spy = jest.fn();
  const testSmallWidth = 700;
  const testMediumWidth = 900;
  const testLargeWidth = 1600;

  beforeEach(() => {
    window.addEventListener("resize", spy);
  });

  afterAll(() => {
    jest.restoreAllMocks();
    window.removeEventListener("resize", spy);
  });

  const makeSut = ({ ...props }) => render(<CompWithResizeHook {...props} />);

  it("should not fire resize event by default", () => {
    const initialValues = {
      displayNumber: 3,
      setDisplayNumber: setDisplayNumberMock,
      setCurrentIndex: setCurrentIndexMock,
      dotIndex: 0,
      numberOfCards: 5,
      defaultQtyOfSlides: 3,
      breakpoints: [1, 2],
      infiniteLoop: true,
    };
    makeSut(initialValues);

    expect(spy).not.toHaveBeenCalled();
    expect(window.innerWidth).not.toBeLessThanOrEqual(testSmallWidth);
    expect(window.innerWidth).toBeGreaterThan(testMediumWidth);
    expect(window.innerWidth).toBeLessThanOrEqual(testLargeWidth);
  });

  xdescribe("when resize event is fired", () => {
    const initialDotIndex = 0;

    beforeAll(() => {
      window.dispatchEvent(new Event("resize"));
    });

    it("should update the values relevant for a width lower than 768px", () => {
      const initialValues = {
        displayNumber: 3,
        setDisplayNumber: setDisplayNumberMock,
        setCurrentIndex: setCurrentIndexMock,
        dotIndex: initialDotIndex,
        numberOfCards: 5,
        defaultQtyOfSlides: 3,
        breakpoints: [1, 2],
        infiniteLoop: true,
      };
      // Set screenwidth to be 700
      window.innerWidth = testSmallWidth;

      makeSut(initialValues);

      expect(spy).toHaveBeenCalled();
      expect(window.innerWidth).toBe(testSmallWidth);
      // Need to set de diplsay to 1
      expect(setDisplayNumberMock).toBeCalledWith(1);
      // Current index will be dotIndex + 1 < numberOfCards ? dotIndex + 1 : 0
      expect(setCurrentIndexMock).toBeCalledWith(initialDotIndex + 1);
    });

    it("should update the values relevant for a width lower than 1200px", () => {
      const initialValues = {
        displayNumber: 3,
        setDisplayNumber: setDisplayNumberMock,
        setCurrentIndex: setCurrentIndexMock,
        dotIndex: initialDotIndex,
        numberOfCards: 5,
        defaultQtyOfSlides: 3,
        breakpoints: [1, 2],
        infiniteLoop: true,
      };
      // Set screenwidth to be 900
      window.innerWidth = testMediumWidth;

      makeSut(initialValues);

      expect(spy).toHaveBeenCalled();
      expect(window.innerWidth).toBe(testMediumWidth);
      // Need to set de diplsay to 2
      expect(setDisplayNumberMock).toBeCalledWith(2);
      // Current index will be numberOfCards > 2 ? dotIndex + 2 : 0
      expect(setCurrentIndexMock).toBeCalledWith(initialDotIndex + 2);
    });

    it("should update the values relevant for a width greater or equal than 1200px", () => {
      const slidesToShowMock = 3;
      const initialValues = {
        displayNumber: 3,
        setDisplayNumber: setDisplayNumberMock,
        setCurrentIndex: setCurrentIndexMock,
        dotIndex: initialDotIndex,
        numberOfCards: 5,
        defaultQtyOfSlides: slidesToShowMock,
        breakpoints: [1, 2],
        infiniteLoop: true,
      };
      // Set screenwidth to be 1600
      window.innerWidth = testLargeWidth;

      makeSut(initialValues);

      expect(spy).toHaveBeenCalled();
      expect(window.innerWidth).toBe(testLargeWidth);
      // Need to set de diplsay to slidesToShowMock
      expect(setDisplayNumberMock).toBeCalledWith(slidesToShowMock);
      // Current index will be dotIndex + slidesToShowMock
      expect(setCurrentIndexMock).toBeCalledWith(
        initialDotIndex + slidesToShowMock,
      );
    });
  });
});
