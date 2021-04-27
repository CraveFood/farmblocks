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
      d="M4 16a1 1 0 110 2 1 1 0 010-2zm16 0a1 1 0 01.117 1.993L20 18H7a1 1 0 01-.117-1.993L7 16h13zM4 11a1 1 0 110 2 1 1 0 010-2zm9 0a1 1 0 01.117 1.993L13 13H7a1 1 0 01-.117-1.993L7 11h6zm3-5a1 1 0 01.117 1.993L16 8H7a1 1 0 01-.117-1.993L7 6h9zM4 6a1 1 0 110 2 1 1 0 010-2z"
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
const SmHamburger2 = withWrapper(Vector);
SmHamburger2.groupName = "Actions";
export default SmHamburger2;
