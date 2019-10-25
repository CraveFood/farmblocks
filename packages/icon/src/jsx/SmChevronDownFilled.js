import React from "react";
import PropTypes from "prop-types";

const SmChevronDownFilled = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      ref={ref}
      ariaHidden={!props.ariaLabel}
      {...props}
    >
      <path
        d="M22 12c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10C2 6.478 6.477 2 12 2c5.522 0 10 4.478 10 10zm-10 1.086L8.707 9.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L12 13.086z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
SmChevronDownFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
SmChevronDownFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmChevronDownFilled.groupName = "Actions";
export default SmChevronDownFilled;
