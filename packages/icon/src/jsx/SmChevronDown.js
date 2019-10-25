import React from "react";
import PropTypes from "prop-types";

const SmChevronDown = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M12 12.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L12 12.586z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmChevronDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
SmChevronDown.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmChevronDown.groupName = "Actions";
export default SmChevronDown;
