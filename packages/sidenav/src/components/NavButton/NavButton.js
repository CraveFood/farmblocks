import React from "react";
import PropTypes from "prop-types";
import { colors } from "@crave/farmblocks-theme";

import NavButtonStyled from "./NavButton.styled";
import { PUSH, FULLSCREEN, OVERLAY } from "../../constants/variants";

const NavButton = React.memo(({ component: Component, icon, ...props }) => (
  <Component role="button" {...props}>
    <i className={icon} />
  </Component>
));

NavButton.defaultProps = {
  highlightColor: colors.RED_ORANGE,
  component: NavButtonStyled,
  variant: PUSH,
};

NavButton.propTypes = {
  icon: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.func,
  ]),
  active: PropTypes.bool,
  highlightColor: PropTypes.string,
  variant: PropTypes.oneOf([PUSH, FULLSCREEN, OVERLAY]),
  onClick: PropTypes.func,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default NavButton;
