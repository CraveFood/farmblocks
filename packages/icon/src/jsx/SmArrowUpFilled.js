import React from "react";
import PropTypes from "prop-types";

const SmArrowUpFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M22 12c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10C2 6.478 6.477 2 12 2c5.522 0 10 4.478 10 10zM11 9.914V16a1 1 0 0 0 2 0V9.914l2.293 2.293a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 9.914z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
SmArrowUpFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
SmArrowUpFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmArrowUpFilled.groupName = "Actions";
export default SmArrowUpFilled;
