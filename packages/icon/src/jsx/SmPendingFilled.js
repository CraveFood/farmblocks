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
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 100 14 7 7 0 000-14zm0 2a5 5 0 11-.001 10.001A5 5 0 0112 7zm0 1a1 1 0 00-.993.883L11 9v3l.007.117a1 1 0 00.876.876L12 13h2l.117-.007a1 1 0 00.876-.876L15 12l-.007-.117a1 1 0 00-.876-.876L14 11l-1-.001V9l-.007-.117A1 1 0 0012 8z"
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
const SmPendingFilled = withWrapper(Vector);
SmPendingFilled.groupName = "Actions";
export default SmPendingFilled;
