import * as React from "react";
import PropTypes from "prop-types";

import StyledImage from "./styledComponents/Image";
import { MEDIUM } from "./constants/thumbnailSizes";
import { COVER } from "./constants/fitModes";

const Image = props => {
  return <StyledImage {...props} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  badge: PropTypes.bool,
  size: PropTypes.number,
  borderRadius: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fit: PropTypes.string,
  alt: PropTypes.string,
  css: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
  ]),
};

Image.defaultProps = {
  badge: false,
  size: MEDIUM,
  borderRadius: "4px",
  fit: COVER,
  alt: "",
};

export default Image;
