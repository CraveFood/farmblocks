import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M16.57 21l4.106 3.763a1 1 0 11-1.352 1.474l-6-5.5a1 1 0 010-1.474l6-5.5a1 1 0 111.352 1.474L16.57 19H26a1 1 0 010 2h-9.43z"
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
