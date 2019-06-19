import * as React from "react";
import PropTypes from "prop-types";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Container from "../styledComponents/Text";

const Text = props => <Container {...props} />;

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  type: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paragraph: PropTypes.bool,
  letterSpacing: PropTypes.string,
  truncate: PropTypes.bool,
  upper: PropTypes.bool,
};

Text.defaultProps = {
  size: fontSizes.LARGE,
  type: fontTypes.NORMAL,
  align: "left",
  paragraph: false,
  fontWeight: "inherit",
};

export default Text;
