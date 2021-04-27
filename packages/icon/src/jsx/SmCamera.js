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
      d="M15 3a1 1 0 01.993.883L16 4v1h3a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 013-3h9V4a1 1 0 011-1zm4 4H5a1 1 0 00-.993.883L4 8v10a1 1 0 00.883.993L5 19h14a1 1 0 00.993-.883L20 18V8a1 1 0 00-.883-.993L19 7zm-4.5 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM8.002 8a1 1 0 01.117 1.993L8.002 10H6a1 1 0 01-.117-1.993L6 8h2.002z"
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
const SmCamera = withWrapper(Vector);
SmCamera.groupName = "Actions";
export default SmCamera;
