import React from "react";
import PropTypes from "prop-types";

const SmArrowLeftFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M22 12c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10C2 6.478 6.477 2 12 2c5.522 0 10 4.478 10 10zM9.914 13H16a1 1 0 0 0 0-2H9.914l2.293-2.293a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L9.914 13z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmArrowLeftFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
SmArrowLeftFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmArrowLeftFilled.groupName = "Actions";
export default SmArrowLeftFilled;
