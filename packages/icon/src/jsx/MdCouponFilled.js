import React from "react";
import PropTypes from "prop-types";

const MdCouponFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M17.24 33.423a3 3 0 0 1-3.754-1.367l-1.217-2.266a1 1 0 0 0-.568-.476l-2.443-.805a3 3 0 0 1-1.998-3.46l.524-2.519a1 1 0 0 0-.128-.73l-1.354-2.187a3 3 0 0 1 .694-3.935l2.02-1.592a1 1 0 0 0 .37-.642l.37-2.545a3 3 0 0 1 3.06-2.568l2.57.078a1 1 0 0 0 .698-.253l1.918-1.713a3 3 0 0 1 3.996 0l1.918 1.713a1 1 0 0 0 .697.253l2.57-.078a3 3 0 0 1 3.062 2.568l.368 2.545a1 1 0 0 0 .371.642l2.02 1.592a3 3 0 0 1 .694 3.935L32.344 21.8a1 1 0 0 0-.128.73l.524 2.518a3 3 0 0 1-1.998 3.46l-2.443.806a1 1 0 0 0-.568.476l-1.217 2.266a3 3 0 0 1-3.755 1.367l-2.388-.954a1 1 0 0 0-.742 0l-2.388.954zm1.608-15.658a2.001 2.001 0 0 0-2.613-2.612 2 2 0 1 0 2.613 2.612zm6 6a2.001 2.001 0 0 0-2.613-2.612 2 2 0 1 0 2.613 2.612zm-9.12 1.334a.724.724 0 0 0 .516-.214l8.735-8.736a.725.725 0 0 0 .007-1.036.726.726 0 0 0-1.036.007l-8.736 8.736a.728.728 0 0 0 .515 1.243z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdCouponFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCouponFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCouponFilled.groupName = "Misc";
export default MdCouponFilled;
