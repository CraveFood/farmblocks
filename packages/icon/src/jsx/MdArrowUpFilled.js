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
      d="M7 20c0-7.179 5.821-13 13-13 7.18 0 13 5.82 13 13s-5.82 13-13 13S7 27.18 7 20Zm6.763-1.676a1 1 0 1 0 1.474 1.352L19 15.57V26a1 1 0 0 0 .883.993L20 27a1 1 0 0 0 1-1V15.572l3.763 4.104a1 1 0 0 0 1.315.14l.098-.079a1 1 0 0 0 .061-1.413l-5.5-6a1 1 0 0 0-1.474 0Z"
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
const MdArrowUpFilled = withWrapper(Vector);
MdArrowUpFilled.groupName = "Actions";
export default MdArrowUpFilled;
