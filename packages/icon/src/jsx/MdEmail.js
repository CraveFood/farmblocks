import React from "react";
import PropTypes from "prop-types";

const MdEmail = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M10 14.22V27h20V14.22l-9.427 6.6a1 1 0 0 1-1.146 0L10 14.22zM11.744 13L20 18.78 28.256 13H11.744zM9 29a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H9z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdEmail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdEmail.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdEmail.groupName = "Misc";
export default MdEmail;
