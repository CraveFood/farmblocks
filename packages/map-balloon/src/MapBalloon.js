import * as React from "react";
import PropTypes from "prop-types";

import Wrapper from "./styledComponents/Wrapper";
import Pin from "./styledComponents/Pin";
import Balloon from "./styledComponents/Balloon";
import FarmInfo from "./styledComponents/FarmInfo";
import ProductImages, { productsPropType } from "./ProductImages";

const MapBalloon = props => {
  const { open, products, farm } = props;

  return (
    <Wrapper {...props}>
      <Pin />
      {open && (
        <Balloon>
          <ProductImages products={products} />
          <FarmInfo name={farm} />
        </Balloon>
      )}
    </Wrapper>
  );
};
MapBalloon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  farm: PropTypes.string,
  products: productsPropType,
  open: PropTypes.bool
};

export default MapBalloon;
