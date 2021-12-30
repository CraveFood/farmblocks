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
      d="M12 5a7 7 0 1 1-.001 14.001A7 7 0 0 1 12 5Zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1a1 1 0 0 1 .993.883L13 9v1.999L14 11a1 1 0 0 1 .993.883L15 12a1 1 0 0 1-.883.993L14 13h-2a1 1 0 0 1-.993-.883L11 12V9a1 1 0 0 1 1-1Z"
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
const SmPending = withWrapper(Vector);
SmPending.groupName = "Actions";
export default SmPending;
