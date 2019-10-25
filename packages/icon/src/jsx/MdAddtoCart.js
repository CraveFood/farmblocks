import React from "react";
import PropTypes from "prop-types";

const MdAddToCart = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M27.052 17.606A5.967 5.967 0 0 1 23.091 13H11.574l3.193 9h10.727l1.558-4.394zm2.012.311l-1.922 5.417a1 1 0 0 1-.943.666H14.061a1 1 0 0 1-.942-.666L8.742 11H6a1 1 0 0 1 0-2h3.448a1 1 0 0 1 .943.666l.476 1.343A1.01 1.01 0 0 1 11 11h12.077a5.96 5.96 0 0 1 11.841.96 5.958 5.958 0 0 1-5.854 5.957zM18 28.5a2.5 2.5 0 1 1-5 .003 2.5 2.5 0 0 1 5-.003zm9 0a2.5 2.5 0 1 1-5.001 0 2.5 2.5 0 0 1 5.001 0zM30 11V9a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdAddToCart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdAddToCart.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdAddToCart.groupName = "Cart";
export default MdAddToCart;
