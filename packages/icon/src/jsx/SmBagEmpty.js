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
      d="M12 3a4 4 0 013.995 3.8L16 7 18 7a1 1 0 01.96.718l.026.118 1.612 9.67a3 3 0 01-2.794 3.49L17.64 21H6.361a3 3 0 01-2.982-3.33l.023-.163 1.612-9.671a1 1 0 01.865-.829L6 7l2-.001.005-.199A4 4 0 0112 3zm5.152 5.999H16V10a1 1 0 01-1.993.117L14 10V8.999h-4V10a1 1 0 01-1.993.117L8 10V8.999H6.847l-1.478 8.877L5.36 18a1 1 0 00.883.993l.117.007h11.278a1 1 0 00.999-1.048l-.013-.116-1.473-8.837zM12 5a2 2 0 00-1.995 1.85L10 7h4l-.005-.148A2 2 0 0012 5z"
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
const SmBagEmpty = withWrapper(Vector);
SmBagEmpty.groupName = "Cart";
export default SmBagEmpty;
