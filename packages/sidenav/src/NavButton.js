import React from "react";
import PropTypes from "prop-types";
import { colors } from "@crave/farmblocks-theme";

import { IconButton, CloseButton, ToggleButton } from "./NavButton.styled";
import { PUSH, FULLWIDTH, OVERLAY } from "./constants/variants";

const NavButton = React.memo(({ component: Component, icon, ...props }) => (
  <Component {...props}>
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
  icon: PropTypes.string.required,
  component: PropTypes.element,
  highlightColor: PropTypes.string,

  variant: PropTypes.oneOf([PUSH, FULLWIDTH, OVERLAY]),
  zIndex: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default NavButton;
