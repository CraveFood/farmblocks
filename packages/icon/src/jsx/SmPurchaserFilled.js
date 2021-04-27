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
      d="M19.5 9a.5.5 0 01.5.5V18h1a1 1 0 01.117 1.993L21 20H3a1 1 0 01-.117-1.993L3 18h1V9.5a.5.5 0 01.5-.5h15zM10 12a2 2 0 00-1.995 1.85L8 14v3.5a.5.5 0 00.41.492L8.5 18h3a.5.5 0 00.492-.41L12 17.5V14a2 2 0 00-2-2zm7.5 0h-2a.5.5 0 00-.492.41L15 12.5v2a.5.5 0 00.41.492l.09.008h2a.5.5 0 00.492-.41L18 14.5v-2a.5.5 0 00-.41-.492L17.5 12zM21 4a1 1 0 01.993.883L22 5v2a1 1 0 01-.883.993L21 8H3a1 1 0 01-.993-.883L2 7V5a1 1 0 01.883-.993L3 4h18z"
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
const SmPurchaserFilled = withWrapper(Vector);
SmPurchaserFilled.groupName = "Business";
export default SmPurchaserFilled;
