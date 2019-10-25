import React from "react";
import PropTypes from "prop-types";

const SmChevronDown = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M12 12.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L12 12.586z"
      fill={props.color}
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
