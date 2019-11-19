import React from "react";
import PropTypes from "prop-types";
import { colors } from "@crave/farmblocks-theme";

import NavButtonStyled from "./NavButton.styled";
import { PUSH, FULLSCREEN, OVERLAY } from "../../constants/variants";

const NavButton = ({ component: Component, children, ...props }) => (
  <Component role="button" {...props}>
    {children}
  </Component>
);

NavButton.defaultProps = {
  highlightColor: colors.RED_ORANGE,
  component: NavButtonStyled,
  variant: PUSH,
};

NavButton.propTypes = {
  children: PropTypes.node,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.func,
  ]),
  active: PropTypes.bool,
  highlightColor: PropTypes.string,
  variant: PropTypes.oneOf([PUSH, FULLSCREEN, OVERLAY]),
  onClick: PropTypes.func,
  zIndex: PropTypes.number,
};

export default NavButton;
