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
      d="M15 19a1 1 0 01-1.993.117L13 19V6H4v13a1 1 0 01-1.993.117L2 19V6a2 2 0 011.85-1.995L4 4h9a2 2 0 011.995 1.85L15 6v5h5a2 2 0 011.995 1.85L22 13v6a1 1 0 01-1.993.117L20 19v-6h-5v6zm-5-5a1 1 0 01.117 1.993L10 16H7a1 1 0 01-.117-1.993L7 14h3zm0-3a1 1 0 01.117 1.993L10 13H7a1 1 0 01-.117-1.993L7 11h3zm0-3a1 1 0 01.117 1.993L10 10H7a1 1 0 01-.117-1.993L7 8h3z"
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
const SmBusinesses = withWrapper(Vector);
SmBusinesses.groupName = "Business";
export default SmBusinesses;
