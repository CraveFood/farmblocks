import React from "react";
import PropTypes from "prop-types";

const SmChevronRightFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M22 12c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10C2 6.478 6.477 2 12 2c5.522 0 10 4.478 10 10zm-8.414 0l-3.293 3.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 1.414L13.586 12z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
SmChevronRightFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
SmChevronRightFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmChevronRightFilled.groupName = "Actions";
export default SmChevronRightFilled;
