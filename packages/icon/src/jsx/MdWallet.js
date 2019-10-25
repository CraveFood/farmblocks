import React from "react";
import PropTypes from "prop-types";

const MdWallet = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M31 24h-4.846c-1.484 0-2.654-1.358-2.654-3s1.17-3 2.654-3H31v-5.08a.92.92 0 0 0-.92-.92H9.92a.92.92 0 0 0-.92.92v14.16c0 .508.41.92.92.92H30.08a.92.92 0 0 0 .921-.92V24zm0-1v-4h-4.846c-.896 0-1.654.88-1.654 2s.758 2 1.654 2H31zm-.92 7H9.92a2.92 2.92 0 0 1-2.92-2.92V12.92A2.92 2.92 0 0 1 9.92 10H30.08A2.92 2.92 0 0 1 33 12.92v14.16A2.92 2.92 0 0 1 30.08 30zM10.5 14a.5.5 0 1 1 0-1h19a.5.5 0 1 1 0 1h-19zm17 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdWallet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdWallet.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdWallet.groupName = "Payment";
export default MdWallet;
