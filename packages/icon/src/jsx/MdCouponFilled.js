import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M17.24 33.423a3 3 0 01-3.754-1.367l-1.217-2.266a1 1 0 00-.568-.476l-2.443-.805a3 3 0 01-1.998-3.46l.524-2.519a1 1 0 00-.128-.73l-1.354-2.187a3 3 0 01.694-3.935l2.02-1.592a1 1 0 00.37-.642l.37-2.545a3 3 0 013.06-2.568l2.57.078a1 1 0 00.698-.253l1.918-1.713a3 3 0 013.996 0l1.918 1.713a1 1 0 00.697.253l2.57-.078a3 3 0 013.062 2.568l.368 2.545a1 1 0 00.371.642l2.02 1.592a3 3 0 01.694 3.935L32.344 21.8a1 1 0 00-.128.73l.524 2.518a3 3 0 01-1.998 3.46l-2.443.806a1 1 0 00-.568.476l-1.217 2.266a3 3 0 01-3.755 1.367l-2.388-.954a1 1 0 00-.742 0l-2.388.954zm1.608-15.658a2.001 2.001 0 00-2.613-2.612 2 2 0 102.613 2.612zm6 6a2.001 2.001 0 00-2.613-2.612 2 2 0 102.613 2.612zm-9.12 1.334a.724.724 0 00.516-.214l8.735-8.736a.725.725 0 00.007-1.036.726.726 0 00-1.036.007l-8.736 8.736a.728.728 0 00.515 1.243z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
Vector.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
Vector.defaultProps = {
  color: "currentColor",
  size: "1em",
};
const MdCouponFilled = withWrapper(Vector);
MdCouponFilled.groupName = "Misc";
export default MdCouponFilled;
