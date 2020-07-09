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
      d="M14 19v-4h5v4h-5zm0 2h5v4h-5v-4zm12-2h-5v-4h5v4zm0 2v4h-5v-4h5zm7-1c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-20 7h14a1 1 0 001-1V14a1 1 0 00-1-1H13a1 1 0 00-1 1v12a1 1 0 001 1z"
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
const MdViewGridFilled = withWrapper(Vector);
MdViewGridFilled.groupName = "Misc";
export default MdViewGridFilled;
