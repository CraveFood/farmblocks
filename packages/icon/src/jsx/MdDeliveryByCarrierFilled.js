import React from "react";
import PropTypes from "prop-types";

const MdDeliveryByCarrierFilled = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      ref={ref}
      aria-hidden={!props["aria-label"]}
      {...props}
    >
      <path
        d="M20.5 9v8.5a.5.5 0 0 0 .5.5h11.57l.95.558A3 3 0 0 1 35 21.145V28a1 1 0 0 1-1 1h-2.763a3.002 3.002 0 0 1-5.574 0H17c-.049 0-.096-.003-.143-.01a3.002 3.002 0 0 1-5.578.01H9a4 4 0 0 1-4-4V12a3 3 0 0 1 3-3H20.5zm1 0h4.605a3 3 0 0 1 2.794 1.909L31.28 17H21.5V9zm-6.434 18.888a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm14.384 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zM31 21.5V23a.5.5 0 1 0 1 0v-1.5a.5.5 0 1 0-1 0z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdDeliveryByCarrierFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdDeliveryByCarrierFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdDeliveryByCarrierFilled.groupName = "Delivery";
export default MdDeliveryByCarrierFilled;
