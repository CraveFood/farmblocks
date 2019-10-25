import React from "react";
import PropTypes from "prop-types";

const MdArrowRight = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M20.676 13.763l6 5.5a1 1 0 0 1 0 1.474l-6 5.5a1 1 0 1 1-1.352-1.474L23.43 21H14a1 1 0 0 1 0-2h9.429l-4.105-3.763a1 1 0 1 1 1.352-1.474z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdArrowRight.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdArrowRight.groupName = "Actions";
export default MdArrowRight;
