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
      d="M15.586 2a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10.586Zm-.415 2H6v16h12V6.829L15.171 4ZM16 14l.117.007a1 1 0 0 1 0 1.986L16 16H8l-.117-.007a1 1 0 0 1 0-1.986L8 14h8Zm0-4 .117.007a1 1 0 0 1 0 1.986L16 12H8l-.117-.007a1 1 0 0 1 0-1.986L8 10h8Zm-3-4 .117.007a1 1 0 0 1 0 1.986L13 8H8l-.117-.007a1 1 0 0 1 0-1.986L8 6h5Z"
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
const SmOrder = withWrapper(Vector);
SmOrder.groupName = "Actions";
export default SmOrder;
