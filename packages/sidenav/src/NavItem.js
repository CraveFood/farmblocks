import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { colors } from "@crave/farmblocks-theme";
import Image from "@crave/farmblocks-image";

import { PUSH, FULLSCREEN, OVERLAY } from "./constants/variants";
import { NavItem as StyledNavItem } from "./SideNav.styled";

const NavItem = React.memo(
  ({ icon, children, activated, image, textProps, imageProps, ...props }) => (
    <StyledNavItem className={activated && "activated"} {...props}>
      <div className="thumb-container">
        {image && <Image size={36} src={image} badge {...imageProps} />}
        {icon && <i className={`icon ${icon}`} />}
      </div>
      <Text type="inherit" fontWeight="title" {...textProps}>
        {children}
      </Text>
    </StyledNavItem>
  ),
);

NavItem.defaultProps = {
  highlightColor: colors.RED_ORANGE,
  variant: PUSH,
  iconSize: "24px",
};

NavItem.propTypes = {
  /**
    The navigation item text content
   */
  children: PropTypes.node,
  /**
    When true add the "active" state styles
   */
  activated: PropTypes.bool,
  /**
   Color for "active" state of the icon, left-border and tranparentized background-color
   */
  highlightColor: PropTypes.string,
  /**
   background-color of the item
   */
  background: PropTypes.string,
  /**
   icon class name (don't use along with image)
  */
  icon: PropTypes.string,
  /**
   icon font-size
  */
  iconSize: PropTypes.string,
  /**
   image src url (don't use along with icon)
  */
  image: PropTypes.string,
  /**
    The navigation item text props, accept farmblocks/Text props
   */
  textProps: PropTypes.shape(Text.propTypes),
  /**
    The image props, accept farmblocks-image props
   */
  imageProps: PropTypes.shape(Image.propTypes),
  /**
   The sidebar style
   */
  variant: PropTypes.oneOf([PUSH, FULLSCREEN, OVERLAY]),
};

export default NavItem;
