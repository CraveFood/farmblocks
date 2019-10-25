import React from "react";
import PropTypes from "prop-types";

const MdEmptyCartFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M8.742 11H6a1 1 0 0 1 0-2h3.448a1 1 0 0 1 .943.666l.476 1.343A1.01 1.01 0 0 1 11 11h18.327l.559-1.376c.49-1.208 2.305-.518 1.869.71l-4.613 13A1 1 0 0 1 26.2 24H14.06a1 1 0 0 1-.942-.666L8.742 11zM18 28.5a2.5 2.5 0 1 1-5 .002 2.5 2.5 0 0 1 5-.003zm9 0a2.5 2.5 0 1 1-5.001 0 2.5 2.5 0 0 1 5.001 0z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdEmptyCartFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdEmptyCartFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdEmptyCartFilled.groupName = "Cart";
export default MdEmptyCartFilled;
