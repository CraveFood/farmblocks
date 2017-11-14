import * as React from "react";
import PropTypes from "prop-types";

import StyledImage from "./styledComponents/Image";
import { MEDIUM } from "./constants/thumbnailSizes";

const Image = props => {
  return <StyledImage {...props} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  badge: PropTypes.bool,
  size: PropTypes.number
};

Image.defaultProps = {
  badge: false,
  size: MEDIUM
};

export default Image;
