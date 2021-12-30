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
      d="M19 3a2 2 0 0 1 1.995 1.85L21 5v6a2 2 0 0 1-1.85 1.995L19 13h-1v6a2 2 0 0 1-1.85 1.995L16 21H8a2 2 0 0 1-1.995-1.85L6 19v-6H5a2 2 0 0 1-1.995-1.85L3 11V5a2 2 0 0 1 1.85-1.995L5 3h14Zm-3 9H8v7h8v-7Zm-2 4a1 1 0 0 1 .117 1.993L14 18h-4a1 1 0 0 1-.117-1.993L10 16h4Zm-1-3a1 1 0 0 1 .117 1.993L13 15h-3a1 1 0 0 1-.117-1.993L10 13h3Zm6-8H5v6h1.268a2 2 0 0 1 1.563-.993L8 10h8a2 2 0 0 1 1.732 1H19V5Zm-2 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
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
const SmPrint = withWrapper(Vector);
SmPrint.groupName = "Misc";
export default SmPrint;
