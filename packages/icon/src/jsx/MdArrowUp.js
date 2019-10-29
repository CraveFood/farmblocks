import React from "react";
import PropTypes from "prop-types";

const MdArrowUp = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M19 16.07l-3.763 4.106a1 1 0 1 1-1.474-1.352l5.5-6a1 1 0 0 1 1.474 0l5.5 6a1 1 0 1 1-1.474 1.352L21 16.07V26.5a1 1 0 1 1-2 0V16.07z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdArrowUp.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdArrowUp.groupName = "Actions";
export default MdArrowUp;
