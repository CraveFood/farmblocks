import * as React from "react";
import PropTypes from "prop-types";
import { fontSizes, fontTypes } from "@crave/farmblocks-theme";

import Container from "../styledComponents/Text";

const Text = ({ children, title, ...props }) => (
  <Container isTitle={title} {...props}>
    {children}
  </Container>
);

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  type: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  paragraph: PropTypes.bool,
  title: PropTypes.bool,
  letterSpacing: PropTypes.string,
  light: PropTypes.bool,
  truncate: PropTypes.bool,
};

Text.defaultProps = {
  size: fontSizes.LARGE,
  type: fontTypes.NORMAL,
  align: "left",
  paragraph: false,
  title: false,
};

export default Text;
