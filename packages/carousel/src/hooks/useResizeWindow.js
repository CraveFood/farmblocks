import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const getWidth = () => window.innerWidth;

const useResizeWindow = ({
  setDisplayNumber,
  displayNumber,
  setCurrentIndex,
  dotIndex,
  numberOfCards,
  slidesToShow,
  breakpoints,
  infiniteLoop,
}) => {
  const [screendWidth, setScreenWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth);
  };

  const handleResize = () => {
    const screenSize = getWidth();
    let incrementIndex = infiniteLoop ? 2 : 0;

    if (screenSize < 768) {
      setDisplayNumber(breakpoints[0]);
      if (infiniteLoop) incrementIndex = 1;
      setCurrentIndex(
        dotIndex + incrementIndex < numberOfCards
          ? dotIndex + incrementIndex
          : 0,
      );
    } else if (displayNumber < numberOfCards) {
      if (screenSize < 1200) {
        setDisplayNumber(breakpoints[1]);
        setCurrentIndex(numberOfCards > 2 ? dotIndex + incrementIndex : 0);
      } else if (
        slidesToShow > breakpoints[1] &&
        numberOfCards >= slidesToShow
      ) {
        setDisplayNumber(slidesToShow);
        if (infiniteLoop) incrementIndex = slidesToShow;
        setCurrentIndex(dotIndex + incrementIndex);
      } else {
        setDisplayNumber(breakpoints[1]);
        setCurrentIndex(dotIndex + incrementIndex);
      }
    }
  };

  useEffect(() => {
    handleResize();
  }, [screendWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
};

useResizeWindow.propTypes = {
  displayNumber: PropTypes.number,
  setDisplayNumber: PropTypes.func,
  setCurrentIndex: PropTypes.func,
  dotIndex: PropTypes.number,
  numberOfCards: PropTypes.number,
  slidesToShow: PropTypes.number,
  breakpoints: PropTypes.arrayOf(PropTypes.number),
  infiniteLoop: PropTypes.bool,
};

export default useResizeWindow;
