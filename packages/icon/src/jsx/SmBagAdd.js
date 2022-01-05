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
      d="M12 3a4 4 0 0 1 3.995 3.8L16 7 18 7a1 1 0 0 1 .96.718l.026.118 1.612 9.67a3 3 0 0 1-2.794 3.49L17.64 21H6.361a3 3 0 0 1-2.982-3.33l.023-.163 1.612-9.671a1 1 0 0 1 .865-.829L6 7l2-.001.005-.199A4 4 0 0 1 12 3Zm5.152 5.999H16V10a1 1 0 0 1-1.993.117L14 10V8.999h-4V10a1 1 0 0 1-1.993.117L8 10V8.999H6.847l-1.478 8.877L5.36 18a1 1 0 0 0 .883.993l.117.007h11.278a1 1 0 0 0 .999-1.048l-.013-.116-1.473-8.837ZM12 11a1 1 0 0 1 .993.883L13 12v1h1a1 1 0 0 1 .117 1.993L14 15h-1v1a1 1 0 0 1-1.993.117L11 16v-1h-1a1 1 0 0 1-.117-1.993L10 13h1v-1a1 1 0 0 1 1-1Zm0-6a2 2 0 0 0-1.995 1.85L10 7h4l-.005-.148A2 2 0 0 0 12 5Z"
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
const SmBagAdd = withWrapper(Vector);
SmBagAdd.groupName = "Cart";
export default SmBagAdd;
