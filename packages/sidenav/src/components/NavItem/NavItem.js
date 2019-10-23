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
  children: PropTypes.node,
  active: PropTypes.bool,
  highlightColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.string,
  image: PropTypes.string,
  textProps: PropTypes.shape(Text.propTypes),
  imageProps: PropTypes.shape(Image.propTypes),
  variant: PropTypes.oneOf([PUSH, FULLSCREEN, OVERLAY]),
};

export default NavItem;