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
      d="M19 16.07l-3.763 4.106a1 1 0 11-1.474-1.352l5.5-6a1 1 0 011.474 0l5.5 6a1 1 0 11-1.474 1.352L21 16.07V26.5a1 1 0 11-2 0V16.07z"
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
const MdArrowUp = withWrapper(Vector);
MdArrowUp.groupName = "Actions";
export default MdArrowUp;
