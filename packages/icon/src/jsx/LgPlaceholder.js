import React from "react";
import PropTypes from "prop-types";

const LgPlaceholder = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M76 14c5.523 0 10 4.477 10 10v52c0 5.523-4.477 10-10 10H24c-5.523 0-10-4.477-10-10V24c0-5.523 4.477-10 10-10h52zm-2.889 4H26.89A8.889 8.889 0 0 0 18 26.889V73.11C18 78.021 21.98 82 26.889 82H73.11C78.021 82 82 78.02 82 73.111V26.89C82 21.979 78.02 18 73.111 18z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
LgPlaceholder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgPlaceholder.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgPlaceholder.groupName = "Placeholder";
export default LgPlaceholder;
