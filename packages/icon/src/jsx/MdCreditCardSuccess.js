import React from "react";
import PropTypes from "prop-types";

const MdCreditCardSuccess = React.forwardRef(
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
        d="M31.31 17.61a.996.996 0 0 1 .674-.276l.016-.008v.008a1 1 0 0 1 1 1v8.746A2.92 2.92 0 0 1 30.08 30H9.92a2.92 2.92 0 0 1-2.92-2.92V12.92A2.92 2.92 0 0 1 9.92 10h11.162a1 1 0 0 1 0 2H9.92a.92.92 0 0 0-.92.92v14.16c0 .508.41.92.92.92H30.08a.92.92 0 0 0 .921-.92V20H9v-4h15.1a6.978 6.978 0 0 0 4.9 2c.81 0 1.587-.137 2.31-.39zM35 11a6 6 0 0 1-6 6 6 6 0 1 1 0-12 6 6 0 0 1 6 6zm-4.324-2.9l-2.555 4.065-1.205-1.647a.75.75 0 0 0-1.21.886l1.856 2.539a.75.75 0 0 0 1.24-.044l3.144-5a.75.75 0 1 0-1.27-.798z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdCreditCardSuccess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCreditCardSuccess.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCreditCardSuccess.groupName = "Payment";
export default MdCreditCardSuccess;
