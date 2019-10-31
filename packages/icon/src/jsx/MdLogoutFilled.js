import React from "react";
import PropTypes from "prop-types";

const MdLogoutFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M27 10v20h2a1 1 0 0 1 0 2H12.235C10.451 32 9 30.571 9 28.8V11.2C9 9.429 10.451 8 12.235 8H29a1 1 0 0 1 0 2h-2zm-11.707 4.707L20.586 20l-5.293 5.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 1.414z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdLogoutFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdLogoutFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdLogoutFilled.groupName = "Actions";
export default MdLogoutFilled;
