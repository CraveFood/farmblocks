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
      d="M33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13Zm-11 4h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2Zm0-5h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2Zm0-5h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2Zm5 10h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm0-5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm0-5h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Z"
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
const MdListFilled = withWrapper(Vector);
MdListFilled.groupName = "Menu";
export default MdListFilled;
