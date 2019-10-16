import React from "react";
import PropTypes from "prop-types";
import { colors } from "@crave/farmblocks-theme";

import { IconButton, CloseButton, ToggleButton } from "./NavButton.styled";
import { PUSH, FULLSCREEN, OVERLAY } from "./constants/variants";

const NavButton = React.memo(({ component: Component, icon, ...props }) => (
  <Component role="button" {...props}>
    <i className={icon} />
  </Component>
));

export const NavToggle = React.memo(props => (
  <NavButton component={ToggleButton} icon="wg-list" {...props} />
));

export const NavClose = React.memo(props => (
  <NavButton component={CloseButton} icon="wg-close" {...props} />
));

NavButton.defaultProps = {
  highlightColor: colors.RED_ORANGE,
  component: IconButton,
  variant: PUSH,
};

NavButton.propTypes = {
  /**
   icon class name
  */
  icon: PropTypes.string,
  /**
    used as "button", the icon container
  */
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.func,
  ]),
  /**
   When true add highlight color and background
   */
  active: PropTypes.bool,
  /**
   Color used on the active icon and tranparentized for the hover background-color
   */
  highlightColor: PropTypes.string,
  /**
   The sidebar style
   */
  variant: PropTypes.oneOf([PUSH, FULLSCREEN, OVERLAY]),
  onClick: PropTypes.func,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default NavButton;
