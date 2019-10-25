import React from "react";
import PropTypes from "prop-types";

const MdListFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-11 4h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zm0-5h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zm0-5h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zm5 10h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm0-5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zm0-5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdListFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdListFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdListFilled.groupName = "Menu";
export default MdListFilled;
