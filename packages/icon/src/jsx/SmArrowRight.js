import React from "react";
import PropTypes from "prop-types";

const SmArrowRight = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M14.086 11l-2.293-2.293a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.086 13H8a1 1 0 0 1 0-2h6.086z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
SmArrowRight.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmArrowRight.groupName = "Actions";
export default SmArrowRight;
