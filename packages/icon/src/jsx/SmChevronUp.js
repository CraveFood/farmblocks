import React from "react";
import PropTypes from "prop-types";

const SmChevronUp = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M12 11.414l-3.293 3.293a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 11.414z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmChevronUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
SmChevronUp.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmChevronUp.groupName = "Actions";
export default SmChevronUp;
