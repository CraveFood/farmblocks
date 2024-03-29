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
      d="M15.5 26a2.5 2.5 0 1 1 0 5 2.5 2.5 0 1 1 0-5Zm9 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm4.459-20a5.96 5.96 0 0 1 .105 11.917l-1.922 5.417a1 1 0 0 1-.943.666H14.061a1 1 0 0 1-.942-.666L8.742 11H6a1 1 0 0 1 0-2h3.448a1 1 0 0 1 .943.666l.476 1.343A1.01 1.01 0 0 1 11 11h12.077a5.96 5.96 0 0 1 5.882-5Zm-5.868 7H11.574l3.193 9h10.726l1.56-4.394A5.967 5.967 0 0 1 23.09 13Zm8.941-3.847a1 1 0 0 0-1.379.315l-2.359 3.753-.987-1.35a1 1 0 1 0-1.614 1.18l1.857 2.54a1 1 0 0 0 1.653-.059l3.144-5a1 1 0 0 0-.315-1.379Z"
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
