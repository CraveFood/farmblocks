import React from "react";
import PropTypes from "prop-types";

const MdOrdersFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M29.666 11.437a1 1 0 0 1 .334.746V32a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h13.313a1 1 0 0 1 .666.254l4.687 4.183zM15 17.25h10a.75.75 0 1 0 0-1.5H15a.75.75 0 1 0 0 1.5zm0 3h10a.75.75 0 1 0 0-1.5H15a.75.75 0 1 0 0 1.5zm0 3h10a.75.75 0 1 0 0-1.5H15a.75.75 0 1 0 0 1.5z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdOrdersFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdOrdersFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdOrdersFilled.groupName = "Menu";
export default MdOrdersFilled;
