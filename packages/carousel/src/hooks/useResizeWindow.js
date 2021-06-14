import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";

import debounce from "lodash.debounce";

const getWidth = () => window.innerWidth;

const useResizeWindow = ({ qtyOfSlidesPerSet, breakpoints }) => {
  const RESIZE_DELAY = 300;
  const [screendWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenThresholds, setScreenThresholds] = useState(breakpoints);
  const [displayNumber, setDisplayNumber] = useState(qtyOfSlidesPerSet);

  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth);
  };

  function handleResize() {
    const screenSize = getWidth();
    for (let i = 0; i < screenThresholds.length; i += 1) {
      if (screenSize <= screenThresholds[i].width) {
        setDisplayNumber(screenThresholds[i].slidesToShow);
        return;
      }
    }
    setDisplayNumber(qtyOfSlidesPerSet);
  }

  function sortBreakpoints() {
    setScreenThresholds(
      breakpoints.sort((a, b) => (a.width > b.width ? 1 : -1)),
    );
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

  return { displayNumber };
};

useResizeWindow.propTypes = {
  qtyOfSlidesPerSet: PropTypes.number,
  breakpoints: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number,
      slidesToShow: PropTypes.number,
    }),
  ),
};

export default useResizeWindow;
