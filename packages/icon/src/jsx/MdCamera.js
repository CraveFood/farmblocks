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
      d="M27 12v-1a1 1 0 012 0v1h1.589a2.411 2.411 0 012.41 2.411v13.178A2.411 2.411 0 0130.59 30H9.41A2.411 2.411 0 017 27.589V14.411A2.411 2.411 0 019.41 12H27zm3.589 16a.411.411 0 00.41-.411V14.411a.411.411 0 00-.41-.411H9.41a.411.411 0 00-.411.411v13.178c0 .227.184.411.41.411H30.59zM23 21a3 3 0 10-6 0 3 3 0 006 0zm2 0a5 5 0 11-10 0 5 5 0 0110 0zm-14-4a1 1 0 010-2h3a1 1 0 010 2h-3z"
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
const MdCamera = withWrapper(Vector);
MdCamera.groupName = "Actions";
export default MdCamera;
