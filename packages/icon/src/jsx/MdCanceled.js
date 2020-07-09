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
      d="M28.254 12.728L12.728 28.254A10.958 10.958 0 0020 31c6.075 0 11-4.925 11-11 0-2.788-1.037-5.333-2.746-7.272zM26.8 11.353A10.953 10.953 0 0020 9C13.925 9 9 13.924 9 20c0 2.567.88 4.929 2.353 6.8L26.8 11.353zM33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7s13 5.82 13 13z"
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
const MdCanceled = withWrapper(Vector);
MdCanceled.groupName = "States";
export default MdCanceled;
