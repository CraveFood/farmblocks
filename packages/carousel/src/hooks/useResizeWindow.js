import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";

import debounce from "lodash.debounce";

const getWidth = () => window.innerWidth;

const useResizeWindow = ({
  setDisplayNumber,
  setCurrentIndex,
  dotIndex,
  numberOfCards,
  qtyOfSlidesPerSet,
  breakpoints,
  infiniteLoop,
}) => {
  const RESIZE_DELAY = 300;
  const [screendWidth, setScreenWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth);
  };

  function handleResize() {
    const screenSize = getWidth();
    for (let i = 0; i < breakpoints.length; i += 1) {
      if (screenSize <= breakpoints[i].width) {
        setDisplayNumber(breakpoints[i].slidesToShow);
        if (infiniteLoop)
          setCurrentIndex(dotIndex + breakpoints[i].slidesToShow);
        else
          setCurrentIndex(
            breakpoints[i].slidesToShow < numberOfCards ? dotIndex : 0,
          );
        return;
      }
    }
    setDisplayNumber(qtyOfSlidesPerSet);

    if (infiniteLoop) {
      setCurrentIndex(
        qtyOfSlidesPerSet < numberOfCards ? dotIndex + qtyOfSlidesPerSet : 0,
      );
    } else setCurrentIndex(qtyOfSlidesPerSet < numberOfCards ? dotIndex : 0);
  }

  function sortBreakpoints() {
    breakpoints.sort((a, b) => (a.width > b.width ? 1 : -1));
  }

  useEffect(() => {
    sortBreakpoints();
  }, []);

  const debouncedFunctionRef = useRef();
  debouncedFunctionRef.current = () => handleResize();

  const debouncedChange = useCallback(
    debounce(() => debouncedFunctionRef.current(), RESIZE_DELAY),
    [],
  );

  useEffect(() => {
    debouncedChange();
  }, [screendWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
};

useResizeWindow.propTypes = {
  setDisplayNumber: PropTypes.func,
  setCurrentIndex: PropTypes.func,
  dotIndex: PropTypes.number,
  numberOfCards: PropTypes.number,
  qtyOfSlidesPerSet: PropTypes.number,
  breakpoints: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number,
      slidesToShow: PropTypes.number,
    }),
  ),
  infiniteLoop: PropTypes.bool,
};

export default useResizeWindow;
