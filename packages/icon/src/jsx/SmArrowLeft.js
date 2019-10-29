import React from "react";
import PropTypes from "prop-types";

const SmArrowLeft = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M9.914 13l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L9.914 11H16a1 1 0 0 1 0 2H9.914z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
SmArrowLeft.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmArrowLeft.groupName = "Actions";
export default SmArrowLeft;
