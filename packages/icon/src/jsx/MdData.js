import React from "react";
import PropTypes from "prop-types";

const MdData = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M25 24h6V11h-6v13zm0 1v2a1 1 0 0 1-2 0v-2h-6v2a1 1 0 0 1-2 0v-2H9v2a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1h7v-4a1 1 0 0 1 1-1h7v-4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17a1 1 0 0 1-2 0v-2h-6zm-2-1v-8h-6v8h6zm-8 0v-3H9v3h6zm-7 8a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2H8z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdData.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdData.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdData.groupName = "Misc";
export default MdData;
