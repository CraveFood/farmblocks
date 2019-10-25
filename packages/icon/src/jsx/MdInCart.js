import React from "react";
import PropTypes from "prop-types";

const MdInCart = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M15.5 26a2.5 2.5 0 1 1 0 5 2.5 2.5 0 1 1 0-5zm9 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm4.459-20a5.96 5.96 0 0 1 .105 11.917l-1.922 5.417a1 1 0 0 1-.943.666H14.061a1 1 0 0 1-.942-.666L8.742 11H6a1 1 0 0 1 0-2h3.448a1 1 0 0 1 .943.666l.476 1.343A1.01 1.01 0 0 1 11 11h12.077a5.96 5.96 0 0 1 5.882-5zm-5.868 7H11.574l3.193 9h10.726l1.56-4.394A5.967 5.967 0 0 1 23.09 13zm8.941-3.847a1 1 0 0 0-1.379.315l-2.359 3.753-.987-1.35a1 1 0 1 0-1.614 1.18l1.857 2.54a1 1 0 0 0 1.653-.059l3.144-5a1 1 0 0 0-.315-1.379z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdInCart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdInCart.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdInCart.groupName = "Cart";
export default MdInCart;
