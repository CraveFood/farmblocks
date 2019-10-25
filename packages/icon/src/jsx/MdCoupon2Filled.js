import React from "react";
import PropTypes from "prop-types";

const MdCoupon2Filled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M14.5 12.477L16.442 10H33a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H16.442L14.5 27.523 12.56 30H7a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3h5.56l1.94 2.477zm9.348 5.288a2.001 2.001 0 0 0-2.613-2.612 2 2 0 1 0 2.613 2.612zm6 6a2.001 2.001 0 0 0-2.613-2.612 2 2 0 1 0 2.613 2.612zm-9.12 1.334a.724.724 0 0 0 .516-.214l8.735-8.736a.725.725 0 0 0 .007-1.036.726.726 0 0 0-1.036.007l-8.736 8.736a.728.728 0 0 0 .515 1.243zM14 24v3h1v-3h-1zm0-11v3h1v-3h-1zm0 5v4h1v-4h-1z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdCoupon2Filled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCoupon2Filled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCoupon2Filled.groupName = "Misc";
export default MdCoupon2Filled;
