import { useState } from "react";
import PropTypes from "prop-types";

const useTouch = ({ nextSlide, prevSlide }) => {
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
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextSlide();
    }

    if (diff < -5) {
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
