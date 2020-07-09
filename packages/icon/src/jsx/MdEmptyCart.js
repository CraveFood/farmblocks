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
      d="M10.867 11.009A1.01 1.01 0 0111 11h18.396l.474-1.334a1 1 0 111.885.668l-4.613 13a1 1 0 01-.943.666H14.061a1 1 0 01-.942-.666L8.742 11H6a1 1 0 010-2h3.448a1 1 0 01.943.666l.476 1.343zM11.574 13l3.193 9h10.727l3.193-9H11.574zM18 28.5a2.5 2.5 0 11-5 .002 2.5 2.5 0 015-.003zm9 0a2.5 2.5 0 11-5.001 0 2.5 2.5 0 015.001 0z"
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
