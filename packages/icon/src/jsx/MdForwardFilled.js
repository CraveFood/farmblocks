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
      d="M24.394 17h-6.131C15.92 17 14 18.812 14 21.078V26a1 1 0 102 0v-4.922C16 19.944 17 19 18.263 19h6.132l-3.064 2.757a1 1 0 101.338 1.486l5-4.499a1 1 0 000-1.486l-5-4.501a1 1 0 00-1.338 1.486L24.394 17zM33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13z"
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
const MdForwardFilled = withWrapper(Vector);
MdForwardFilled.groupName = "Actions";
export default MdForwardFilled;
