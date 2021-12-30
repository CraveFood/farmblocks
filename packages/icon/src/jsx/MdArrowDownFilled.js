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
      d="m19 24.43-3.763-4.106a1 1 0 1 0-1.474 1.352l5.5 6a1 1 0 0 0 1.474 0l5.5-6a1 1 0 1 0-1.474-1.352L21 24.43V14a1 1 0 0 0-2 0v10.43ZM20 33c-7.18 0-13-5.82-13-13S12.82 7 20 7s13 5.82 13 13c0 7.179-5.821 13-13 13Z"
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
const MdArrowDownFilled = withWrapper(Vector);
MdArrowDownFilled.groupName = "Actions";
export default MdArrowDownFilled;
