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
      d="M28 14v2a1 1 0 0 1-2 0v-2H14v2a1 1 0 0 1-2 0v-2H9.905l-1.8 18h23.79l-1.8-18H28zm-15.938-2a8.001 8.001 0 0 1 15.876 0H31a1 1 0 0 1 .995.9l2 20A1 1 0 0 1 33 34H7a1 1 0 0 1-.995-1.1l2-20A1 1 0 0 1 9 12h3.062zm2.021 0h11.834a6.002 6.002 0 0 0-11.834 0zM16 24a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
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
MdEmptyCart.groupName = "CartBag";
export default MdEmptyCart;
