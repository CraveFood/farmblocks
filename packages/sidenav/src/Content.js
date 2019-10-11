import React from "react";
import PropTypes from "prop-types";

import { Content as ContentStyled } from "./SideNav.styled";

const Content = React.memo(props => <ContentStyled {...props} />);

Content.defaultProps = {
  offsetTop: "0",
  collapsedWidth: "56px",
  expandedWidth: "270px",
  variant: "push",
  mobileVariant: "fullWidth",
  expanded: false,
};

Content.propTypes = {
  children: PropTypes.node,
  offsetTop: PropTypes.string,
  collapsedWidth: PropTypes.string,
  expandedWidth: PropTypes.string,
  expanded: PropTypes.bool,
  variant: PropTypes.string,
  mobileVariant: PropTypes.string,
};

export default Content;
