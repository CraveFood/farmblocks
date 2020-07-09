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
      d="M15.5 26a2.5 2.5 0 110 5 2.5 2.5 0 110-5zm9 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm4.459-20a5.96 5.96 0 01.105 11.917l-1.922 5.417a1 1 0 01-.943.666H14.061a1 1 0 01-.942-.666L8.742 11H6a1 1 0 010-2h3.448a1 1 0 01.943.666l.476 1.343A1.01 1.01 0 0111 11h12.077a5.96 5.96 0 015.882-5zm-5.868 7H11.574l3.193 9h10.726l1.56-4.394A5.967 5.967 0 0123.09 13zm8.941-3.847a1 1 0 00-1.379.315l-2.359 3.753-.987-1.35a1 1 0 10-1.614 1.18l1.857 2.54a1 1 0 001.653-.059l3.144-5a1 1 0 00-.315-1.379z"
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
const MdInCart = withWrapper(Vector);
MdInCart.groupName = "Cart";
export default MdInCart;
