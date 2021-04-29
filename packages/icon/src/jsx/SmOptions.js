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
      d="M12 16a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
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
const SmOptions = withWrapper(Vector);
SmOptions.groupName = "Actions";
export default SmOptions;
