import React from "react";
import PropTypes from "prop-types";

import { PUSH, FULLSCREEN, OVERLAY } from "./constants/variants";
import { Content as StyledContent } from "./SideNav.styled";

const Content = React.memo(props => (
  <StyledContent data-testid="content-navbar" {...props} />
));

Content.defaultProps = {
  expanded: false,
  offsetTop: "0",
  collapsedWidth: "56px",
  expandedWidth: "270px",
  variant: PUSH,
};

Content.propTypes = {
  children: PropTypes.node,
  /**
   Sidebar state value (collapsed/extended)
  */
  expanded: PropTypes.bool,
  /**
   The "margin-top" style value. e.g. used to add offset gap of a top bar
  */
  offsetTop: PropTypes.string,
  /**
    PUSH= sidebar offset("margin-left") on collapsed state(!expanded)
  */
  collapsedWidth: PropTypes.string,
  /**
    PUSH=  sidebar offset("margin-left") on expanded state(expanded)
  */
  expandedWidth: PropTypes.string,
  /**
   The sidebar style
  */
  variant: PropTypes.oneOf([PUSH, FULLSCREEN, OVERLAY]),
};

export default Content;
