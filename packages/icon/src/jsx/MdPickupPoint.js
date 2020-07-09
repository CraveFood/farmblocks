import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M24 31v-5h-7v5h7zm2 0h3v-8.514a13.948 13.948 0 01-1.847-2.197C25.812 18.34 25 16.18 25 13.865 25 11.03 27.156 9 29.954 9h.092C32.845 9 35 11.03 35 13.865c0 2.314-.812 4.474-2.153 6.424-.66.96-1.323 1.702-1.847 2.197V31h1a1 1 0 010 2H6a1 1 0 010-2v-5.003A1 1 0 016.075 24H9v-5a1 1 0 010-2h13a1 1 0 010 2v5h3.66a1 1 0 01.34 1.941V31zm-11-5H8v5h7v-5zm-4-2h9v-5h-9v5zm20.2-4.844c1.129-1.643 1.8-3.429 1.8-5.291C33 12.162 31.766 11 30.046 11h-.092C28.234 11 27 12.162 27 13.865c0 1.862.671 3.648 1.8 5.29.383.556.791 1.056 1.2 1.492.409-.436.817-.936 1.2-1.491zM31 14a1 1 0 11-2 0 1 1 0 012 0z"
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
const MdPickupPoint = withWrapper(Vector);
MdPickupPoint.groupName = "Delivery";
export default MdPickupPoint;
