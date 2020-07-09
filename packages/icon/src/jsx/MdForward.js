import React from "react";
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
      d="M23.394 16l-3.063-2.757a1 1 0 011.338-1.486l5 4.5a1 1 0 010 1.487l-5 4.5a1 1 0 11-1.338-1.487L23.395 18h-6.132C16 18 15 18.944 15 20.078V28a1 1 0 11-2 0v-7.922C13 17.812 14.92 16 17.263 16h6.13z"
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
const MdForward = withWrapper(Vector);
MdForward.groupName = "Actions";
export default MdForward;
