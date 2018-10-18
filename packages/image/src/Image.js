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
  border: PropTypes.shape({
    radius: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string
  }),
  width: PropTypes.string,
  height: PropTypes.string,
  fit: PropTypes.string,
  css: PropTypes.object
};

Image.defaultProps = {
  badge: false,
  size: MEDIUM,
  fit: COVER
};

export default Image;
