import React from "react";
import PropTypes from "prop-types";

const MdArrowDownFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M19 24.43l-3.763-4.106a1 1 0 1 0-1.474 1.352l5.5 6a1 1 0 0 0 1.474 0l5.5-6a1 1 0 1 0-1.474-1.352L21 24.43V14a1 1 0 0 0-2 0v10.43zM20 33c-7.18 0-13-5.82-13-13S12.82 7 20 7s13 5.82 13 13c0 7.179-5.821 13-13 13z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdArrowDownFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdArrowDownFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdArrowDownFilled.groupName = "Actions";
export default MdArrowDownFilled;
