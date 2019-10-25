import React from "react";
import PropTypes from "prop-types";

const MdPurchasersFilled = React.forwardRef(
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
        d="M12 30h6v-1h-6v1zm-4 0V15H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v15h1a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h1zm0-17h24v-2H8v2zm7 7c-2.21 0-4 .798-4 3h8c0-2.202-1.791-3-4-3zm-3 4v4h6v-4h-6zm10 0v3a1 1 0 0 0 1 1h7v-4h-8zm0-1h8v-2h-7a1 1 0 0 0-1 1v1z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdPurchasersFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdPurchasersFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdPurchasersFilled.groupName = "Business";
export default MdPurchasersFilled;
