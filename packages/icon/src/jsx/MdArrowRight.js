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
      d="m20.676 13.763 6 5.5a1 1 0 0 1 0 1.474l-6 5.5a1 1 0 1 1-1.352-1.474L23.43 21H14a1 1 0 0 1 0-2h9.429l-4.105-3.763a1 1 0 1 1 1.352-1.474Z"
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
const MdArrowRight = withWrapper(Vector);
MdArrowRight.groupName = "Actions";
export default MdArrowRight;
