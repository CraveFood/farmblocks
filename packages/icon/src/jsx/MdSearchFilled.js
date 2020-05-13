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
      d="M21.036 20.834a4.194 4.194 0 11.132-.144 1.016 1.016 0 00-.132.144zm2.135.526a6.194 6.194 0 10-1.366 1.462l4.367 4.367a1 1 0 001.415-1.415L23.17 21.36zM33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13z"
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
const MdSearchFilled = withWrapper(Vector);
MdSearchFilled.groupName = "Actions";
export default MdSearchFilled;
