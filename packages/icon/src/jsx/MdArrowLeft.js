import React from "react";
import PropTypes from "prop-types";

const MdArrowLeft = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M16.57 21l4.106 3.763a1 1 0 1 1-1.352 1.474l-6-5.5a1 1 0 0 1 0-1.474l6-5.5a1 1 0 1 1 1.352 1.474L16.57 19H26a1 1 0 0 1 0 2h-9.43z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdArrowLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdArrowLeft.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdArrowLeft.groupName = "Actions";
export default MdArrowLeft;
