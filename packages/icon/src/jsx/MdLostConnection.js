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
      d="M16.63 17H27a1 1 0 0 1 0 2H14c-.92 0-1.352-1.136-.665-1.747l11.246-10a1 1 0 1 1 1.329 1.494L16.63 17Zm7.658 6H13a1 1 0 0 1 0-2h14c.93 0 1.356 1.157.65 1.76l-11.714 10a1 1 0 1 1-1.299-1.52L24.288 23Z"
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
const MdLostConnection = withWrapper(Vector);
MdLostConnection.groupName = "States";
export default MdLostConnection;
