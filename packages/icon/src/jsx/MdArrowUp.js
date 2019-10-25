import React from "react";
import PropTypes from "prop-types";

const MdArrowUp = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M19 16.07l-3.763 4.106a1 1 0 1 1-1.474-1.352l5.5-6a1 1 0 0 1 1.474 0l5.5 6a1 1 0 1 1-1.474 1.352L21 16.07V26.5a1 1 0 1 1-2 0V16.07z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdArrowUp.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdArrowUp.groupName = "Actions";
export default MdArrowUp;
