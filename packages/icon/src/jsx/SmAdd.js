import React from "react";
import PropTypes from "prop-types";

const SmAdd = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M22 12c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10C2 6.478 6.477 2 12 2c5.522 0 10 4.478 10 10zm-9-1V7a1 1 0 0 0-2 0v4H7a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2h-4z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
SmAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
SmAdd.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmAdd.groupName = "Actions";
export default SmAdd;
