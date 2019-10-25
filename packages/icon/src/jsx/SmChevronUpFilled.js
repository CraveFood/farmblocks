import React from "react";
import PropTypes from "prop-types";

const SmChevronUpFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M22 12c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10C2 6.478 6.477 2 12 2c5.522 0 10 4.478 10 10zm-10-1.086l3.293 3.293a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L12 10.914z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
SmChevronUpFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
SmChevronUpFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmChevronUpFilled.groupName = "Actions";
export default SmChevronUpFilled;
