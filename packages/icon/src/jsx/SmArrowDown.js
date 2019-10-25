import React from "react";
import PropTypes from "prop-types";

const SmArrowDown = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M13 14.086l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 14.086V8a1 1 0 0 1 2 0v6.086z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
SmArrowDown.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmArrowDown.groupName = "Actions";
export default SmArrowDown;
