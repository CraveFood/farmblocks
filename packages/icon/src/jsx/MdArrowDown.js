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
      d="m21 23.93 3.763-4.106a1 1 0 1 1 1.474 1.352l-5.5 6a1 1 0 0 1-1.474 0l-5.5-6a1 1 0 1 1 1.474-1.352L19 23.93V13.5a1 1 0 0 1 2 0v10.43Z"
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
const MdArrowDown = withWrapper(Vector);
MdArrowDown.groupName = "Actions";
export default MdArrowDown;
