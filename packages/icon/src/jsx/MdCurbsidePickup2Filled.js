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
      d="M19.139 32v-2h-10v2h10zm2 0H24v-3a1 1 0 011-1h3v-7.514a13.948 13.948 0 01-1.847-2.197C24.812 16.34 24 14.18 24 11.865 24 9.03 26.156 7 28.954 7h.092C31.845 7 34 9.03 34 11.865c0 2.314-.812 4.474-2.153 6.424-.66.96-1.323 1.702-1.847 2.197V28h2.238a1 1 0 010 2H26v3a1 1 0 01-1 1H6a1 1 0 010-2H7.14v-2.226A3.375 3.375 0 015 26.626V20h18v6.626a3.378 3.378 0 01-1.861 3.024V32zM5 19v-.875C5 14.745 7.713 12 11.064 12h5.872C20.287 12 23 14.746 23 18.125V19H5zm4 8h10a.5.5 0 100-1H9a.5.5 0 100 1zm2-4a1 1 0 10-2 0 1 1 0 002 0zm8 0a1 1 0 10-2 0 1 1 0 002 0zm12-11a2 2 0 10-3.999-.001A2 2 0 0031 12z"
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
const MdCurbsidePickup2Filled = withWrapper(Vector);
MdCurbsidePickup2Filled.groupName = "Delivery";
export default MdCurbsidePickup2Filled;
