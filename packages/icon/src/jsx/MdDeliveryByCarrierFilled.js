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
      d="M20.5 9v8.5a.5.5 0 00.5.5h11.57l.95.558A3 3 0 0135 21.145V28a1 1 0 01-1 1h-2.763a3.002 3.002 0 01-5.574 0H17c-.049 0-.096-.003-.143-.01a3.002 3.002 0 01-5.578.01H9a4 4 0 01-4-4V12a3 3 0 013-3H20.5zm1 0h4.605a3 3 0 012.794 1.909L31.28 17H21.5V9zm-6.434 18.888a1 1 0 10-2 0 1 1 0 002 0zm14.384 0a1 1 0 10-2 0 1 1 0 002 0zM31 21.5V23a.5.5 0 101 0v-1.5a.5.5 0 10-1 0z"
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
const MdDeliveryByCarrierFilled = withWrapper(Vector);
MdDeliveryByCarrierFilled.groupName = "Delivery";
export default MdDeliveryByCarrierFilled;
