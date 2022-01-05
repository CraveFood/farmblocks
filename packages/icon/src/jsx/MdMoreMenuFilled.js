import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13Zm-18 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm3 0a2 2 0 1 0 3.999.001A2 2 0 0 0 18 20Zm7 0a2 2 0 1 0 3.999.001A2 2 0 0 0 25 20Z"
      fill={color}
      fillRule="nonzero"
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
const MdMoreMenuFilled = withWrapper(Vector);
MdMoreMenuFilled.groupName = "Actions";
export default MdMoreMenuFilled;
