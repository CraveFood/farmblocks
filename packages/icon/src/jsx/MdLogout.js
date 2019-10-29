import React from "react";
import PropTypes from "prop-types";

const MdLogout = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M29 8a1 1 0 0 1 0 2H12.235C11.55 10 11 10.54 11 11.2v17.6c0 .66.549 1.2 1.235 1.2H29a1 1 0 0 1 0 2H12.235C10.451 32 9 30.571 9 28.8V11.2C9 9.429 10.451 8 12.235 8H29zm-6.707 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L27.586 20l-5.293-5.293z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdLogout.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdLogout.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdLogout.groupName = "Actions";
export default MdLogout;
