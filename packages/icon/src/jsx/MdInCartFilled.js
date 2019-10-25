import React from "react";
import PropTypes from "prop-types";

const MdInCartFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M23.077 11a5.96 5.96 0 0 1 11.841.959 5.958 5.958 0 0 1-5.854 5.958l-1.922 5.417A1 1 0 0 1 26.2 24H14.06a1 1 0 0 1-.942-.666L8.742 11H6a1 1 0 0 1 0-2h3.448a1 1 0 0 1 .943.666l.476 1.343A1.01 1.01 0 0 1 11 11h12.077zM18 28.5a2.5 2.5 0 1 1-5 .002 2.5 2.5 0 0 1 5-.003zm9 0a2.5 2.5 0 1 1-5.001 0 2.5 2.5 0 0 1 5.001 0zm3.653-19.032l-2.359 3.753-.987-1.35a1 1 0 1 0-1.614 1.18l1.857 2.54a1 1 0 0 0 1.653-.059l3.144-5a1 1 0 1 0-1.694-1.064z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdInCartFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdInCartFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdInCartFilled.groupName = "Cart";
export default MdInCartFilled;
