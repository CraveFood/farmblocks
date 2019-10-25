import React from "react";
import PropTypes from "prop-types";

const MdArrowUpFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M7 20c0-7.179 5.821-13 13-13 7.18 0 13 5.82 13 13s-5.82 13-13 13S7 27.18 7 20zm6.763-1.676a1 1 0 1 0 1.474 1.352L19 15.57V26a1 1 0 0 0 .883.993L20 27a1 1 0 0 0 1-1V15.572l3.763 4.104a1 1 0 0 0 1.315.14l.098-.079a1 1 0 0 0 .061-1.413l-5.5-6a1 1 0 0 0-1.474 0z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdArrowUpFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdArrowUpFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdArrowUpFilled.groupName = "Actions";
export default MdArrowUpFilled;
