import React from "react";
import PropTypes from "prop-types";

const MdCurbsidePickup2Filled = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      ref={ref}
      ariaHidden={!props.ariaLabel}
      {...props}
    >
      <path
        d="M19.139 32v-2h-10v2h10zm2 0H24v-3a1 1 0 0 1 1-1h3v-7.514a13.948 13.948 0 0 1-1.847-2.197C24.812 16.34 24 14.18 24 11.865 24 9.03 26.156 7 28.954 7h.092C31.845 7 34 9.03 34 11.865c0 2.314-.812 4.474-2.153 6.424-.66.96-1.323 1.702-1.847 2.197V28h2.238a1 1 0 0 1 0 2H26v3a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2H7.14v-2.226A3.375 3.375 0 0 1 5 26.626V20h18v6.626a3.378 3.378 0 0 1-1.861 3.024V32zM5 19v-.875C5 14.745 7.713 12 11.064 12h5.872C20.287 12 23 14.746 23 18.125V19H5zm4 8h10a.5.5 0 1 0 0-1H9a.5.5 0 1 0 0 1zm2-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm12-11a2 2 0 1 0-3.999-.001A2 2 0 0 0 31 12z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdCurbsidePickup2Filled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCurbsidePickup2Filled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCurbsidePickup2Filled.groupName = "Delivery";
export default MdCurbsidePickup2Filled;
