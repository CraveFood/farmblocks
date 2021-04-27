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
      d="M14 5V4a1 1 0 012 0v1h3a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 013-3h9zm4 8a3 3 0 11-6 0 3 3 0 016 0zm2 0a5 5 0 10-10 0 5 5 0 0010 0zM5 9h3a1 1 0 100-2H5a1 1 0 100 2z"
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
const SmCameraFilled = withWrapper(Vector);
SmCameraFilled.groupName = "Actions";
export default SmCameraFilled;
