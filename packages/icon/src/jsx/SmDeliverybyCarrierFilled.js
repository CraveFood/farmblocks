import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M16.323 5a2 2 0 011.79 1.108l.067.148 1.544 3.853a1 1 0 00.224.338l.103.09.751.563a3 3 0 011.191 2.198l.007.201v3.503a1 1 0 01-.883.993l-.117.007h-1.55a2.502 2.502 0 01-4.9 0L10.45 18a2.502 2.502 0 01-4.9.001h-.549a2.999 2.999 0 01-2.997-2.822L2 15.003 2 7a2 2 0 011.85-1.995L4 5h12.323zm1.202 5l-1.202-3H13L13 10h4.525z"
      fill={color}
      fillRule="evenodd"
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
const SmDeliverybyCarrierFilled = withWrapper(Vector);
SmDeliverybyCarrierFilled.groupName = "Cart";
export default SmDeliverybyCarrierFilled;
