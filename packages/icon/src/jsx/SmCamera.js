import React from "react";
import PropTypes from "prop-types";

const SmCamera = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M14 5V4a1 1 0 0 1 2 0v1h3a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h9zm4 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0zM5 9h3a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmCamera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
SmCamera.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmCamera.groupName = "Actions";
export default SmCamera;
