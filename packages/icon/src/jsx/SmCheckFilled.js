import React from "react";
import PropTypes from "prop-types";

const SmCheckFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M22 12c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10C2 6.478 6.477 2 12 2c5.522 0 10 4.478 10 10zm-11.397 1.984l-1.38-1.447a1 1 0 0 0-1.447 1.38l2.166 2.273a1 1 0 0 0 1.503-.063l4.834-6a1 1 0 0 0-1.558-1.254l-4.118 5.111z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmCheckFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
SmCheckFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmCheckFilled.groupName = "Actions";
export default SmCheckFilled;
