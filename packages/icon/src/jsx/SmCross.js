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
      d="m13.414 12 2.829-2.828a1 1 0 0 0-1.415-1.415L12 10.586 9.172 7.757a1 1 0 0 0-1.415 1.415L10.586 12l-2.829 2.828a1 1 0 0 0 1.415 1.415L12 13.414l2.828 2.829a1 1 0 0 0 1.415-1.415L13.414 12Z"
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
const SmCross = withWrapper(Vector);
SmCross.groupName = "Actions";
export default SmCross;
