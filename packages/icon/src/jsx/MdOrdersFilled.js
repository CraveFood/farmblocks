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
      d="M29.666 11.437a1 1 0 01.334.746V32a1 1 0 01-1 1H11a1 1 0 01-1-1V8a1 1 0 011-1h13.313a1 1 0 01.666.254l4.687 4.183zM15 17.25h10a.75.75 0 100-1.5H15a.75.75 0 100 1.5zm0 3h10a.75.75 0 100-1.5H15a.75.75 0 100 1.5zm0 3h10a.75.75 0 100-1.5H15a.75.75 0 100 1.5z"
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
const MdOrdersFilled = withWrapper(Vector);
MdOrdersFilled.groupName = "Menu";
export default MdOrdersFilled;
