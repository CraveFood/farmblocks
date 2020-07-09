import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M17.778 4C19.005 4 20 4.995 20 6.222v11.556A2.222 2.222 0 0117.778 20H6.222A2.222 2.222 0 014 17.778V6.222C4 4.995 4.995 4 6.222 4h11.556zm-1.445 2H7.667C6.747 6 6 6.746 6 7.667v8.666C6 17.253 6.746 18 7.667 18h8.666c.92 0 1.667-.746 1.667-1.667V7.667C18 6.747 17.254 6 16.333 6z"
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
const SmPlaceholder = withWrapper(Vector);
SmPlaceholder.groupName = "Placeholder";
export default SmPlaceholder;
