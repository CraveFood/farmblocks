import React from "react";
import PropTypes from "prop-types";

const SmCheck = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M10.721 14.453l5.49-7.066a1 1 0 0 1 1.579 1.226l-6.215 8a1 1 0 0 1-1.526.064l-2.785-3.03a1 1 0 0 1 1.472-1.354l1.985 2.16z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
SmCheck.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmCheck.groupName = "Actions";
export default SmCheck;
