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
      d="M27.052 17.606A5.967 5.967 0 0123.091 13H11.574l3.193 9h10.727l1.558-4.394zm2.012.311l-1.922 5.417a1 1 0 01-.943.666H14.061a1 1 0 01-.942-.666L8.742 11H6a1 1 0 010-2h3.448a1 1 0 01.943.666l.476 1.343A1.01 1.01 0 0111 11h12.077a5.96 5.96 0 0111.841.96 5.958 5.958 0 01-5.854 5.957zM18 28.5a2.5 2.5 0 11-5 .003 2.5 2.5 0 015-.003zm9 0a2.5 2.5 0 11-5.001 0 2.5 2.5 0 015.001 0zM30 11V9a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2h-2z"
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
const MdAddToCart = withWrapper(Vector);
MdAddToCart.groupName = "Cart";
export default MdAddToCart;
