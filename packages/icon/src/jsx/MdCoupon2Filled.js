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
      d="M14.5 12.477 16.442 10H33a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H16.442L14.5 27.523 12.56 30H7a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3h5.56l1.94 2.477Zm9.348 5.288a2.001 2.001 0 0 0-2.613-2.612 2 2 0 1 0 2.613 2.612Zm6 6a2.001 2.001 0 0 0-2.613-2.612 2 2 0 1 0 2.613 2.612Zm-9.12 1.334a.724.724 0 0 0 .516-.214l8.735-8.736a.725.725 0 0 0 .007-1.036.726.726 0 0 0-1.036.007l-8.736 8.736a.728.728 0 0 0 .515 1.243ZM14 24v3h1v-3h-1Zm0-11v3h1v-3h-1Zm0 5v4h1v-4h-1Z"
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
const MdCoupon2Filled = withWrapper(Vector);
MdCoupon2Filled.groupName = "Misc";
export default MdCoupon2Filled;
