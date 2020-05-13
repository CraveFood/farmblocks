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
      d="M20 8c6.626 0 12 5.374 12 12 0 6.628-5.374 12-12 12-6.628 0-12-5.372-12-12 0-6.626 5.372-12 12-12zm7 11H13a1 1 0 000 2h14a1 1 0 000-2z"
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
const MdMinusFilled = withWrapper(Vector);
MdMinusFilled.groupName = "Actions";
export default MdMinusFilled;
