import React from "react";
import PropTypes from "prop-types";
import { Dot, DotsContainer } from "../styledComponents/Dots";

function Dots({ imageSet, handleClick, selectedDot }) {
  return (
    <DotsContainer data-testid="dots-container">
      {imageSet.map((item, index) => (
        <Dot
          key={item.image}
          onClick={() => handleClick(index)}
          className={selectedDot === index ? "active" : ""}
        />
      ))}
    </DotsContainer>
  );
}

Dots.propTypes = {
  imageSet: PropTypes.arrayOf(
    PropTypes.shape({ image: PropTypes.string, name: PropTypes.string }),
  ).isRequired,
  handleClick: PropTypes.func,
  selectedDot: PropTypes.number,
};

export default Dots;
