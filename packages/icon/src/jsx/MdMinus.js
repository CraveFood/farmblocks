import React from "react";
import PropTypes from "prop-types";

const MdMinus = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M27 19H13a1 1 0 1 0 0 2h14a1 1 0 0 0 0-2z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdMinus.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdMinus.groupName = "Actions";
export default MdMinus;
