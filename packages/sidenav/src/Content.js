import React from "react";
import PropTypes from "prop-types";

import { PUSH } from "./constants/variants";
import { Content as StyledContent } from "./SideNav.styled";

const Content = React.memo(props => <StyledContent {...props} />);

Content.defaultProps = {
  expanded: false,
  offsetTop: "0",
  collapsedWidth: "56px",
  expandedWidth: "270px",
  variant: PUSH,
};

Content.propTypes = {
  children: PropTypes.node,
  expanded: PropTypes.bool,
  offsetTop: PropTypes.string,
  collapsedWidth: PropTypes.string,
  expandedWidth: PropTypes.string,
  variant: PropTypes.string,
};

export default Content;
