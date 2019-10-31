import React from "react";
import PropTypes from "prop-types";

const LgPlaceholder = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M76 14c5.523 0 10 4.477 10 10v52c0 5.523-4.477 10-10 10H24c-5.523 0-10-4.477-10-10V24c0-5.523 4.477-10 10-10h52zm-2.889 4H26.89A8.889 8.889 0 0 0 18 26.889V73.11C18 78.021 21.98 82 26.889 82H73.11C78.021 82 82 78.02 82 73.111V26.89C82 21.979 78.02 18 73.111 18z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgPlaceholder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
LgPlaceholder.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgPlaceholder.groupName = "Placeholder";
export default LgPlaceholder;
