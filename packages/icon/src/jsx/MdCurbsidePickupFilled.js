import React from "react";
import PropTypes from "prop-types";

const MdCurbsidePickupFilled = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      ref={ref}
      ariaHidden={!props.ariaLabel}
      {...props}
    >
      <path
        d="M26.661 15.036a5.976 5.976 0 0 0-4.453 1.314A6.01 6.01 0 0 0 20.342 19H19.23a1.995 1.995 0 0 0-1.991 1.811L16.275 31H6a1 1 0 0 1-.996-1.09l1.615-18a1 1 0 0 1 .996-.91h2.404a6.5 6.5 0 0 1 12.962 0h2.404a1 1 0 0 1 .996.91l.28 3.126zM12.027 11h8.946a4.5 4.5 0 0 0-8.946 0zm9.073 9a5.002 5.002 0 0 1 9.8 0h1.87a1 1 0 0 1 .995.906l1.23 13A1 1 0 0 1 34 35H18a1 1 0 0 1-.996-1.094l1.231-13a1 1 0 0 1 .996-.906H21.1zm2.07 0h5.66a3.001 3.001 0 0 0-5.66 0z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdCurbsidePickupFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCurbsidePickupFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCurbsidePickupFilled.groupName = "Delivery";
export default MdCurbsidePickupFilled;
