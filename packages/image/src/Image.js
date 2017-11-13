import * as React from "react";
import PropTypes from "prop-types";

import StyledImage from "./styledComponents/Image";
import { THUMBNAIL } from "./constants/types";
import { MEDIUM } from "./constants/thumbnailSizes";

const Image = props => {
  return <StyledImage {...props} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.number
};

Image.defaultProps = {
  type: THUMBNAIL,
  size: MEDIUM
};

export default Image;
