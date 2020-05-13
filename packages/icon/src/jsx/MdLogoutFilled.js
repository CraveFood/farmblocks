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
      d="M27 10v20h2a1 1 0 010 2H12.235C10.451 32 9 30.571 9 28.8V11.2C9 9.429 10.451 8 12.235 8H29a1 1 0 010 2h-2zm-11.707 4.707L20.586 20l-5.293 5.293a1 1 0 001.414 1.414l6-6a1 1 0 000-1.414l-6-6a1 1 0 00-1.414 1.414z"
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
const MdLogoutFilled = withWrapper(Vector);
MdLogoutFilled.groupName = "Actions";
export default MdLogoutFilled;
