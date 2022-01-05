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
      d="M27 12v-1a1 1 0 0 1 2 0v1h1.589a2.411 2.411 0 0 1 2.41 2.411v13.178A2.411 2.411 0 0 1 30.59 30H9.41A2.411 2.411 0 0 1 7 27.589V14.411A2.411 2.411 0 0 1 9.41 12H27Zm-4 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0Zm-14-4h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2Z"
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
const MdCameraFilled = withWrapper(Vector);
MdCameraFilled.groupName = "Actions";
export default MdCameraFilled;
