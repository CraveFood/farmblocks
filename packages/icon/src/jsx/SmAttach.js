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
      d="M13.004 13.005V8.48a1 1 0 1 1 2 0v5.525a1 1 0 0 1-1 1H12.49l-1.498-.015a1 1 0 0 1-.99-1V5a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v12a1 1 0 0 1-.527.881l-4.5 2.416a1 1 0 0 1-.946 0l-4.5-2.416A1 1 0 0 1 7 17V5.194a1 1 0 1 1 2 0v11.208l3.5 1.88 3.5-1.88V6h-3.998v7l.498.005h.504Z"
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
const SmAttach = withWrapper(Vector);
SmAttach.groupName = "Actions";
export default SmAttach;
