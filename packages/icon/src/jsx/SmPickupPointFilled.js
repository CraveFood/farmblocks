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
      d="M19.023 4C20.692 4 22 5.232 22 6.933c0 1.27-.44 2.443-1.165 3.495A7.77 7.77 0 0120 11.453V16a1 1 0 01.117 1.993L20 18H3a1 1 0 01-.117-1.993L3 16h.998v-3l-.115-.007a1 1 0 010-1.986L4 11h12a1 1 0 01.117 1.993l-.119.007v3H18l.001-4.546a7.768 7.768 0 01-.836-1.026C16.44 9.376 16 8.202 16 6.932c0-1.64 1.217-2.843 2.8-2.927L19.023 4zM11 13h-1v3h1v-3zm3-7a1 1 0 01.117 1.993L13.998 8v2h-8V8l-.115-.007a1 1 0 010-1.986L6 6h8z"
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
const SmPickupPointFilled = withWrapper(Vector);
SmPickupPointFilled.groupName = "Cart";
export default SmPickupPointFilled;
