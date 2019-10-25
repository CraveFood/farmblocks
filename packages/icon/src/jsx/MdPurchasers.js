import React from "react";
import PropTypes from "prop-types";

const MdPurchasers = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M19 28h-6v2h6v-2zm0-1v-4h-6v4h6zm11-4h-7v-1h7v-1h-6.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H30v-4zm0-7H10v14h2v-7a.5.5 0 0 1-.5-.5c0-2.345 1.76-3.5 4.5-3.5 2.739 0 4.5 1.155 4.5 3.5a.5.5 0 0 1-.5.5v7h10v-2h-6.5a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5H30v-4zm2 0v14h1c1.333 0 1.333 2 0 2H7c-1.333 0-1.333-2 0-2h1V16H7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1zm-16 4c-2.018 0-3.228.655-3.46 2h6.92c-.232-1.345-1.443-2-3.46-2zm-8-6h24v-3H8v3z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdPurchasers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdPurchasers.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdPurchasers.groupName = "Business";
export default MdPurchasers;
