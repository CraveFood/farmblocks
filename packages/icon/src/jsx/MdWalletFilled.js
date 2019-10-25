import React from "react";
import PropTypes from "prop-types";

const MdWalletFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M33 18h-6.846c-1.484 0-2.654 1.358-2.654 3s1.17 3 2.654 3H33v3.08A2.92 2.92 0 0 1 30.08 30H9.92a2.92 2.92 0 0 1-2.92-2.92V12.92A2.92 2.92 0 0 1 9.92 10H30.08A2.92 2.92 0 0 1 33 12.92V18zm0 1v4h-6.846c-.896 0-1.654-.88-1.654-2s.758-2 1.654-2H33zm-22.5-6h19a.5.5 0 1 0 0-1h-19a.5.5 0 1 0 0 1zm17 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdWalletFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdWalletFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdWalletFilled.groupName = "Payment";
export default MdWalletFilled;
