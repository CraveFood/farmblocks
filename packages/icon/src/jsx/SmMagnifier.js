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
      d="M10 3a7 7 0 104.201 12.6l.009.013.083.094 5 5a1 1 0 001.497-1.32l-.083-.094-5-5a1.009 1.009 0 00-.108-.094A7 7 0 0010 3zm0 2a5 5 0 110 10 5 5 0 010-10z"
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
const SmMagnifier = withWrapper(Vector);
SmMagnifier.groupName = "Actions";
export default SmMagnifier;
