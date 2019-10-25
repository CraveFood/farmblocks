import React from "react";
import PropTypes from "prop-types";

const MdEmptyCart = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M10.867 11.009A1.01 1.01 0 0 1 11 11h18.396l.474-1.334a1 1 0 1 1 1.885.668l-4.613 13a1 1 0 0 1-.943.666H14.061a1 1 0 0 1-.942-.666L8.742 11H6a1 1 0 0 1 0-2h3.448a1 1 0 0 1 .943.666l.476 1.343zM11.574 13l3.193 9h10.727l3.193-9H11.574zM18 28.5a2.5 2.5 0 1 1-5 .002 2.5 2.5 0 0 1 5-.003zm9 0a2.5 2.5 0 1 1-5.001 0 2.5 2.5 0 0 1 5.001 0z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdEmptyCart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdEmptyCart.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdEmptyCart.groupName = "Cart";
export default MdEmptyCart;
