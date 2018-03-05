import * as React from "react";
import PropTypes from "prop-types";

import Wrapper from "./styledComponents/Wrapper";
import Pin from "./styledComponents/Pin";

const MapBalloon = props => {
  return (
    <Wrapper {...props}>
      <Pin />
    </Wrapper>
  );
};
MapBalloon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default MapBalloon;
