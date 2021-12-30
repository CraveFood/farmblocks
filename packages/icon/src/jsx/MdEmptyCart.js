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
      d="M10.867 11.009A1.01 1.01 0 0 1 11 11h18.396l.474-1.334a1 1 0 1 1 1.885.668l-4.613 13a1 1 0 0 1-.943.666H14.061a1 1 0 0 1-.942-.666L8.742 11H6a1 1 0 0 1 0-2h3.448a1 1 0 0 1 .943.666l.476 1.343ZM11.574 13l3.193 9h10.727l3.193-9H11.574ZM18 28.5a2.5 2.5 0 1 1-5 .002 2.5 2.5 0 0 1 5-.003Zm9 0a2.5 2.5 0 1 1-5.001 0 2.5 2.5 0 0 1 5.001 0Z"
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
const MdEmptyCart = withWrapper(Vector);
MdEmptyCart.groupName = "Cart";
export default MdEmptyCart;
