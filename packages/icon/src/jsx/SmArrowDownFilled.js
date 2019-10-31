import React from "react";
import PropTypes from "prop-types";

const SmArrowDownFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M22 12c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10C2 6.478 6.477 2 12 2c5.522 0 10 4.478 10 10zm-9 2.086V8a1 1 0 0 0-2 0v6.086l-2.293-2.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 14.086z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmArrowDownFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
SmArrowDownFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmArrowDownFilled.groupName = "Actions";
export default SmArrowDownFilled;
