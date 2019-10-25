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
      d="M28 14v2a1 1 0 0 1-2 0v-2H14v2a1 1 0 0 1-2 0v-2H9.905l-1.8 18h23.79l-1.8-18H28zm-15.938-2a8.001 8.001 0 0 1 15.876 0H31a1 1 0 0 1 .995.9l2 20A1 1 0 0 1 33 34H7a1 1 0 0 1-.995-1.1l2-20A1 1 0 0 1 9 12h3.062zm2.021 0h11.834a6.002 6.002 0 0 0-11.834 0zm8.07 7.468a1 1 0 1 1 1.694 1.064l-3.772 6a1 1 0 0 1-1.654.058l-2.228-3.046a1 1 0 0 1 1.614-1.181l1.359 1.858 2.987-4.753z"
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
MdInCart.groupName = "CartBag";
export default MdInCart;
