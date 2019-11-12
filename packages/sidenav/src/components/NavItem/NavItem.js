import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { colors } from "@crave/farmblocks-theme";
import Image from "@crave/farmblocks-image";

import { PUSH, FULLSCREEN, OVERLAY } from "../../constants/variants";
import NavItemStyled from "./NavItem.styled";

const NavItem = ({
  icon,
  children,
  active,
  image,
  textProps,
  imageProps,
  ...props
}) => (
  <NavItemStyled className={active && "active"} {...props}>
    {(image || icon) && (
      <div className="thumb-container">
        {image && <Image size={36} src={image} badge {...imageProps} />}
        {icon && <i className={`icon ${icon}`} />}
      </div>
    )}
    <Text type="inherit" fontWeight="title" {...textProps}>
      {children}
    </Text>
  </NavItemStyled>
);

NavItem.defaultProps = {
  highlightColor: colors.RED_ORANGE,
  variant: PUSH,
  iconSize: "24px",
};

NavItem.propTypes = {
  /**
    Whether the item is with active style or not. 
  */
  active: PropTypes.bool,
  /**
    On "fullScreen" variant set rounded style, the other ones don't affect this component. 
  */
  variant: PropTypes.oneOf([PUSH, FULLSCREEN, OVERLAY]),
  /**
    Text content. 
  */
  children: PropTypes.node,
  /**
   Color used to highlight active/hover items. 
  */
  highlightColor: PropTypes.string,
  /**
    NavItem background color. 
  */
  backgroundColor: PropTypes.string,
  /**
    Icon class name (don't use `icon` prop along with `image` prop) 
  */
  icon: PropTypes.string,
  /**
    Font size for the icon 
  */
  iconSize: PropTypes.string,
  /**
   Image src url (don't use `image` prop along with `icon` prop) 
  */
  image: PropTypes.string,
  /**
   Props for image component, accept any farmblocks-image prop 
 */
  imageProps: PropTypes.shape(Image.propTypes),
  /**
  Props for children(text) component, accept any farmblocks-text prop 
  */
  textProps: PropTypes.shape(Text.propTypes),
};

export default NavItem;
