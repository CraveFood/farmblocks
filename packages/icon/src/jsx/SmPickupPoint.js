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
      d="M19.023 4C20.692 4 22 5.232 22 6.933c0 1.27-.44 2.443-1.165 3.495A7.77 7.77 0 0 1 20 11.453V16a1 1 0 0 1 .117 1.993L20 18H3a1 1 0 0 1-.117-1.993L3 16h.998v-3l-.115-.007a1 1 0 0 1 0-1.986L4 11h1.998V8l-.115-.007a1 1 0 0 1 0-1.986L6 6h8a1 1 0 0 1 .117 1.993L13.998 8v3H16a1 1 0 0 1 .117 1.993l-.119.007v3H18l.001-4.546a7.768 7.768 0 0 1-.836-1.026C16.44 9.376 16 8.202 16 6.932c0-1.64 1.217-2.843 2.8-2.927L19.023 4ZM8.998 13h-3v3h3v-3Zm5 0h-3v3h3v-3Zm-2-5h-4v3h4V8Zm7.025-2h-.046c-.59 0-.977.364-.977.933 0 .736.243 1.457.665 2.137l.147.224.141.197.047.059.047-.06.14-.196C19.7 8.55 20 7.751 20 6.932c0-.568-.387-.932-.977-.932Z"
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
const SmPickupPoint = withWrapper(Vector);
SmPickupPoint.groupName = "Cart";
export default SmPickupPoint;
