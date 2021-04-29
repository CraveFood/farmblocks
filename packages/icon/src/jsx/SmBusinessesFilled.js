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
      d="M13 4a2 2 0 011.995 1.85L15 6v13a1 1 0 01-.883.993L14 20H3a1 1 0 01-.993-.883L2 19V6a2 2 0 011.85-1.995L4 4h9zm7 7a2 2 0 011.995 1.85L22 13v6a1 1 0 01-.883.993L21 20h-4a1 1 0 01-.993-.883L16 19v-7a1 1 0 01.883-.993L17 11h3zm-10 3H7l-.117.007a1 1 0 000 1.986L7 16h3l.117-.007A1 1 0 0010 14zm0-3H7l-.117.007a1 1 0 000 1.986L7 13h3l.117-.007A1 1 0 0010 11zm0-3H7l-.117.007a1 1 0 000 1.986L7 10h3l.117-.007A1 1 0 0010 8z"
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
const SmBusinessesFilled = withWrapper(Vector);
SmBusinessesFilled.groupName = "Business";
export default SmBusinessesFilled;
