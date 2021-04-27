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
      d="M15.586 2a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h10.586zM16 14H8l-.117.007a1 1 0 000 1.986L8 16h8l.117-.007a1 1 0 000-1.986L16 14zm0-4H8l-.117.007a1 1 0 000 1.986L8 12h8l.117-.007a1 1 0 000-1.986L16 10zm-3-4H8l-.117.007a1 1 0 000 1.986L8 8h5l.117-.007a1 1 0 000-1.986L13 6z"
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
const SmOrderFilled = withWrapper(Vector);
SmOrderFilled.groupName = "Actions";
export default SmOrderFilled;
