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
      d="m16.57 21 4.106 3.763a1 1 0 1 1-1.352 1.474l-6-5.5a1 1 0 0 1 0-1.474l6-5.5a1 1 0 1 1 1.352 1.474L16.57 19H26a1 1 0 0 1 0 2h-9.43Z"
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
const MdArrowLeft = withWrapper(Vector);
MdArrowLeft.groupName = "Actions";
export default MdArrowLeft;
