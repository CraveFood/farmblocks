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
      d="M20 7c7.179 0 13 5.821 13 13 0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7Zm1.676 6.763a1 1 0 1 0-1.352 1.474L24.43 19H14a1 1 0 0 0-.993.883L13 20a1 1 0 0 0 1 1h10.428l-4.104 3.763a1 1 0 0 0-.14 1.315l.079.098a1 1 0 0 0 1.413.061l6-5.5a1 1 0 0 0 0-1.474Z"
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
const MdArrowRightFilled = withWrapper(Vector);
MdArrowRightFilled.groupName = "Actions";
export default MdArrowRightFilled;
