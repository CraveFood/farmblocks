import * as React from "react";
import PropTypes from "prop-types";
import values from "object.values";
import { fontSizes } from "@crave/farmblocks-theme";

import linkTypes from "../constants/linkTypes";
import StyledLink from "../styledComponents/Link";

const Link = props => {
  const {
    size,
    lineHeight,
    type,
    disabled,
    leftIcon,
    rightIcon,
    external,
    children,
    ...linkProps
  } = props;

  const containerProps = {
    size,
    lineHeight,
    type,
    disabled
  };

  const componentType = linkProps.href && !disabled ? "a" : "span";

  return (
    <StyledLink {...containerProps}>
      {leftIcon && <i className={`${leftIcon} margin-right }`} />}
      {React.createElement(componentType, { ...linkProps }, children)}
      {rightIcon && <i className={`${rightIcon} margin-left }`} />}
      {external && <i className="wg-external-link margin-left" />}
    </StyledLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(values(linkTypes)),
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  external: PropTypes.bool,
  size: PropTypes.number,
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool
  //... and all properties of html <a>
};

Link.defaultProps = {
  type: linkTypes.FEATURED,
  size: fontSizes.MEDIUM,
  lineHeight: 1,
  disabled: false,
  external: false
};

export default Link;
