import React from "react";
import PropTypes from "prop-types";
import { Dot, DotsContainer } from "../styledComponents/Dots";

function Dots({ slides, handleClick, selectedDot }) {
  return (
    <DotsContainer data-testid="dots-container">
      {slides.map((item, index) => (
        <Dot
          key={item.id}
          onClick={() => handleClick(index)}
          className={selectedDot === index ? "active" : ""}
        />
      ))}
    </DotsContainer>
  );
}

Dots.propTypes = {
  slides: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
  selectedDot: PropTypes.number,
};

export default Dots;
