import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { colors } from "@crave/farmblocks-theme";
import Image from "@crave/farmblocks-image";

import { PUSH } from "./constants/variants";
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
};

NavItem.propTypes = {
  children: PropTypes.node,
  highlightColor: PropTypes.string,
  background: PropTypes.string,
  activated: PropTypes.bool,
  variant: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string,
  textProps: PropTypes.shape(Text.propTypes),
  imageProps: PropTypes.shape(Image.propTypes),
};

export default NavItem;
