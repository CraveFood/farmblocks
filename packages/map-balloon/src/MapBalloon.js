import * as React from "react";
import PropTypes from "prop-types";

import Wrapper from "./styledComponents/Wrapper";
import Pin from "./styledComponents/Pin";
import Balloon from "./styledComponents/Balloon";

const MapBalloon = props => {
  const { open } = props;
  return (
    <Wrapper {...props}>
      <Pin />
      {open && <Balloon {...props} />}
    </Wrapper>
  );
};
MapBalloon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  farm: PropTypes.string,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ),
  open: PropTypes.bool
};

export default MapBalloon;
