import React from "react";
import PropTypes from "prop-types";

const SmChevronLeftFilled = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      ref={ref}
      aria-hidden={!props["aria-label"]}
      {...props}
    >
      <path
        d="M22 12c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10C2 6.478 6.477 2 12 2c5.522 0 10 4.478 10 10zm-11.586 0l3.293-3.293a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 12z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
SmChevronLeftFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
SmChevronLeftFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmChevronLeftFilled.groupName = "Actions";
export default SmChevronLeftFilled;