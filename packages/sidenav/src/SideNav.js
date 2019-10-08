import React from "react";
import PropTypes from "prop-types";
import { colors } from "@crave/farmblocks-theme";

import { Sidebar } from "./SideNav.styled";

const SideNav = React.memo(props => <Sidebar {...props} />);

SideNav.defaultProps = {
  width: "300px",
  background: colors.SUGAR,
  zIndex: 1,
  offsetTop: "0",
  collapsedWidth: "56px",
  expandedWidth: "270px",
  expanded: true,
};

SideNav.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  background: PropTypes.string,
  zIndex: PropTypes.number,
  offsetTop: PropTypes.string,
  collapsedWidth: PropTypes.string,
  expandedWidth: PropTypes.string,
  expanded: PropTypes.bool,
};

export default SideNav;
