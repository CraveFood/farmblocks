import React from "react";
import PropTypes from "prop-types";

const MdMoreMenuFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-18 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm3 0a2 2 0 1 0 3.999.001A2 2 0 0 0 18 20zm7 0a2 2 0 1 0 3.999.001A2 2 0 0 0 25 20z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdMoreMenuFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdMoreMenuFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdMoreMenuFilled.groupName = "Actions";
export default MdMoreMenuFilled;
