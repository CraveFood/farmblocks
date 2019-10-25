import React from "react";
import PropTypes from "prop-types";

const MdArrowDown = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M21 23.93l3.763-4.106a1 1 0 1 1 1.474 1.352l-5.5 6a1 1 0 0 1-1.474 0l-5.5-6a1 1 0 1 1 1.474-1.352L19 23.93V13.5a1 1 0 0 1 2 0v10.43z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdArrowDown.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdArrowDown.groupName = "Actions";
export default MdArrowDown;
