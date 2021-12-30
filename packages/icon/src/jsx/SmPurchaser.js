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
      d="M3 20a1 1 0 0 1-.117-1.993L3 18h1v-8H3a1 1 0 0 1-.993-.883L2 9V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v8h1a1 1 0 0 1 .117 1.993L21 20H3Zm15-10H6v8h1v-4a3 3 0 0 1 2.824-2.995L10 11a3 3 0 0 1 3 3v4h5v-1h-3a1 1 0 0 1-.993-.883L14 16v-4a1 1 0 0 1 1-1h3v-1Zm-8 3a1 1 0 0 0-1 1v4h2v-4a1 1 0 0 0-.883-.993Zm8 0h-2v2h2v-2Zm2-7H4v2h.967L5 7.998 5.033 8h13.934L19 7.998l.033.001H20V6Z"
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
const SmPurchaser = withWrapper(Vector);
SmPurchaser.groupName = "Business";
export default SmPurchaser;
