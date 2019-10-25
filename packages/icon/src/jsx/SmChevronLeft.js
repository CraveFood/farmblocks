import React from "react";
import PropTypes from "prop-types";

const SmChevronLeft = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M11.414 12l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L11.414 12z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
SmChevronLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
SmChevronLeft.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmChevronLeft.groupName = "Actions";
export default SmChevronLeft;
