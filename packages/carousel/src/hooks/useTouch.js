import { useState } from "react";
import PropTypes from "prop-types";

const useTouch = ({ nextSlide, prevSlide }) => {
  const TOUCH_THRESHOLD = 5;
  const [touchPosition, setTouchPosition] = useState(null);
  const handleTouchStart = (event) => {
    const touchDown = event.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (event) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }
    const currentTouch = event.touches[0].clientX;
    const touchDragDiff = touchDown - currentTouch;

    if (touchDragDiff > TOUCH_THRESHOLD) {
      nextSlide();
    }

    if (touchDragDiff < -TOUCH_THRESHOLD) {
      prevSlide();
    }
    setTouchPosition(null);
  };
  return { handleTouchStart, handleTouchMove };
};

useTouch.propTypes = {
  nextSlide: PropTypes.func,
  prevSlide: PropTypes.func,
};

export default useTouch;
