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
      d="M16 10.5a1 1 0 0 1 1 1v6.086l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L15 17.586V11.5a1 1 0 0 1 1-1ZM7.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 1 1-1.414 1.414L9 6.414V12.5a1 1 0 0 1-2 0V6.414L4.707 8.707a1 1 0 0 1-1.414-1.414Z"
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
const SmSort = withWrapper(Vector);
SmSort.groupName = "Actions";
export default SmSort;
