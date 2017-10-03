// @flow
import * as React from "react";
import PropTypes from "prop-types";

import { Container, StyledTooltip } from "./styledComponents/Tooltip";

// @FIXME annotating props as Object while we dont have a way to prevent redundant type anotation.
// see issue #22
const Tooltip = (props: Object) => (
  <Container>
    <StyledTooltip {...props}>{props.text}</StyledTooltip>
  </Container>
);

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  isVisible: PropTypes.bool
};

Tooltip.defaultProps = {
  isVisible: true
};

export default Tooltip;
