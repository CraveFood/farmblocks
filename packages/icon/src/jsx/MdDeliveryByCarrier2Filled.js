import React from "react";
import PropTypes from "prop-types";

const MdDeliveryByCarrier2Filled = React.forwardRef(
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
        d="M20 5c6.061 0 11 4.703 11 10.525 0 1.749-.457 3.441-1.315 4.966a1 1 0 0 1-.871.509H26.96l-4.879 5H27a1 1 0 0 1 .117 1.993L27 28v6a1 1 0 0 1-1 1h-5.5v-5a.5.5 0 0 0-.41-.492L20 29.5a.5.5 0 0 0-.5.5v5H14a1 1 0 0 1-1-1v-6a1 1 0 0 1 0-2h4.817l-4.88-5h-1.76a1 1 0 0 1-.872-.51 10.075 10.075 0 0 1-1.304-4.965C9 9.7 13.933 5 20 5zm-.5 16h-5.165l4.878 5h.287v-5zm6.064 0H20.5v5h.184l4.88-5z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdDeliveryByCarrier2Filled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdDeliveryByCarrier2Filled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdDeliveryByCarrier2Filled.groupName = "Delivery";
export default MdDeliveryByCarrier2Filled;
