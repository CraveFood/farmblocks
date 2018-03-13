import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";
import { ThemeProvider } from "styled-components";

import alignments from "./constants/alignments";
import sizes from "./constants/sizes";
import Wrapper from "./styledComponents/Wrapper";
import Pin from "./styledComponents/Pin";
import Balloon from "./styledComponents/Balloon";
import FarmInfo from "./styledComponents/FarmInfo";
import ProductImages, { productsPropType } from "./ProductImages";
import Logo from "./styledComponents/Logo";
import themes from "./styledComponents/themes";

const MapBalloon = ({
  x,
  y,
  open,
  align,
  products,
  farm,
  logo,
  animated,
  size
}) => {
  const theme = themes[size];
  return (
    <ThemeProvider theme={theme}>
      <Wrapper x={x} y={y}>
        <Pin highlighted={!logo} />
        {(logo && <Logo src={logo} />) ||
          (open &&
            products && (
              <Balloon align={align} animated={animated}>
                <ProductImages products={products} />
                <FarmInfo name={farm} />
              </Balloon>
            ))}
      </Wrapper>
    </ThemeProvider>
  );
};

export const requiredIfNoLogo = propType => (...args) => {
  const [props] = args;
  return props["logo"] ? propType(...args) : propType.isRequired(...args);
};

MapBalloon.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  align: PropTypes.oneOf(values(alignments)),
  logo: PropTypes.string,
  farm: requiredIfNoLogo(PropTypes.string),
  products: requiredIfNoLogo(productsPropType),
  open: PropTypes.bool,
  animated: PropTypes.bool,
  size: PropTypes.oneOf(values(sizes))
};
MapBalloon.defaultProps = {
  align: alignments.LEFT,
  open: false,
  x: 0,
  y: 0,
  animated: false,
  size: sizes.MEDIUM
};

export default MapBalloon;
