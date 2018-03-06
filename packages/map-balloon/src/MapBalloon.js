import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";

import Wrapper from "./styledComponents/Wrapper";
import Pin from "./styledComponents/Pin";
import Balloon from "./styledComponents/Balloon";
import FarmInfo from "./styledComponents/FarmInfo";
import ProductImages, { productsPropType } from "./ProductImages";
import alignments from "./constants/alignments";

const MapBalloon = ({ x, y, open, align, products, farm }) => (
  <Wrapper x={x} y={y}>
    <Pin />
    {open && (
      <Balloon align={align}>
        <ProductImages products={products} />
        <FarmInfo name={farm} />
      </Balloon>
    )}
  </Wrapper>
);
MapBalloon.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  align: PropTypes.oneOf(values(alignments)),
  farm: PropTypes.string,
  products: productsPropType,
  open: PropTypes.bool
};
MapBalloon.defaultProps = {
  align: alignments.LEFT,
  open: false
};

export default MapBalloon;
