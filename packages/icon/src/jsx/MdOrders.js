import React from "react";
import PropTypes from "prop-types";

const MdOrders = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M29.666 11.437a1 1 0 0 1 .334.746V32a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h13.313a1 1 0 0 1 .666.254l4.687 4.183zM28 13h-4V9.061L23.932 9H12v22h16V13zm-13 4.25a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H15zm0 3a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H15zm0 3a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H15z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdOrders.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdOrders.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdOrders.groupName = "Menu";
export default MdOrders;
