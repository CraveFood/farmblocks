import React from "react";
import PropTypes from "prop-types";

const SmArrowUp = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M11 10.414l-2.293 2.293a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 10.414V16.5a1 1 0 0 1-2 0v-6.086z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
SmArrowUp.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmArrowUp.groupName = "Actions";
export default SmArrowUp;
