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
      d="M20 16a1 1 0 0 1 .117 1.993L20 18H4a1 1 0 0 1-.117-1.993L4 16h16Zm0-5a1 1 0 0 1 .117 1.993L20 13H4a1 1 0 0 1-.117-1.993L4 11h16Zm0-5a1 1 0 0 1 .117 1.993L20 8H4a1 1 0 0 1-.117-1.993L4 6h16Z"
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
const SmHamburger = withWrapper(Vector);
SmHamburger.groupName = "Actions";
export default SmHamburger;
