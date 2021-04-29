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
      d="M28 14v2a1 1 0 01-2 0v-2H14v2a1 1 0 01-2 0v-2H9.905l-1.8 18h23.79l-1.8-18H28zm-15.938-2a8.001 8.001 0 0115.876 0H31a1 1 0 01.995.9l2 20A1 1 0 0133 34H7a1 1 0 01-.995-1.1l2-20A1 1 0 019 12h3.062zm2.021 0h11.834a6.002 6.002 0 00-11.834 0zM16 24a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2z"
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
const MdEmptyBag = withWrapper(Vector);
MdEmptyBag.groupName = "Cart";
export default MdEmptyBag;
