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
      d="M16.323 5a2 2 0 0 1 1.79 1.108l.067.148 1.544 3.853a1 1 0 0 0 .224.338l.103.09.751.563a3 3 0 0 1 1.191 2.198l.007.201v3.503a1 1 0 0 1-.883.993l-.117.007h-1.55a2.502 2.502 0 0 1-4.9 0L10.45 18a2.502 2.502 0 0 1-4.9.001h-.549a2.999 2.999 0 0 1-2.997-2.822L2 15.003 2 7a2 2 0 0 1 1.85-1.995L4 5h12.323ZM11 7H4v8.003c0 .512.385.935.883.992L5 16h.999C6.455 15.393 7.18 15 8 15c.818 0 1.545.393 2 1.001H15C15.455 15.393 16.18 15 17 15c.818 0 1.545.393 2 1.001l1 .001v-2.503a1 1 0 0 0-.23-.64l-.08-.084-.09-.076-.75-.564-.166-.134L12 12a1 1 0 0 1-.993-.883L11 11V7Zm6.526 3-1.202-3H13L13 10h4.525Z"
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
const SmDeliverybyCarrier = withWrapper(Vector);
SmDeliverybyCarrier.groupName = "Cart";
export default SmDeliverybyCarrier;
