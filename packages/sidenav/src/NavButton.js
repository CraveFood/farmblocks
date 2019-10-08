import React from "react";
import PropTypes from "prop-types";
import { colors } from "@crave/farmblocks-theme";
import { IconButton } from "./SideNav.styled";

const NavButton = React.memo(({ icon, ...props }) => (
  <IconButton {...props}>
    <i className={icon} />
  </IconButton>
));

NavButton.defaultProps = {
  icon: "wg-list",
  highlightColor: colors.RED_ORANGE,
};

NavButton.propTypes = {
  icon: PropTypes.string,
  highlightColor: PropTypes.string,
};

export default NavButton;
