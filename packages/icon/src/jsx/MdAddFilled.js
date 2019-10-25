import React from "react";
import PropTypes from "prop-types";

const MdAddFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M20 7c7.179 0 13 5.821 13 13 0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7zm0 5a1 1 0 0 0-1 1v6h-6a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2h-6v-6a1 1 0 0 0-1-1z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdAddFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdAddFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdAddFilled.groupName = "Actions";
export default MdAddFilled;
