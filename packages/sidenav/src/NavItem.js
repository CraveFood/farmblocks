import React from "react";
import PropTypes from "prop-types";
import Text from "@crave/farmblocks-text";
import { colors } from "@crave/farmblocks-theme";
import Image from "@crave/farmblocks-image";

import { Item } from "./SideNav.styled";

const NavItem = React.memo(
  ({
    icon,
    children,
    activated,
    image,
    textProps,
    imageProps,
    iconProps,
    ...props
  }) => (
    <Item className={activated && "activated"} {...props}>
      <div className="thumb-container">
        {image && <Image size={36} src={image} badge {...imageProps} />}
        {icon && <i className={`icon ${icon}`} />}
      </div>
      <Text type="inherit" fontWeight="title" {...textProps}>
        {children}
      </Text>
    </Item>
  ),
);

NavItem.defaultProps = {
  highlightColor: colors.RED_ORANGE,
  variant: "push",
  mobileVariant: "fullWidth",
};

NavItem.propTypes = {
  children: PropTypes.node,
  highlightColor: PropTypes.string,
  background: PropTypes.string,
  activated: PropTypes.bool,
  variant: PropTypes.string,
  mobileVariant: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string,
  iconProps: PropTypes.object, // eslint-disable-line
  textProps: PropTypes.shape(Text.propTypes),
  imageProps: PropTypes.shape(Image.propTypes),
};
export default NavItem;
