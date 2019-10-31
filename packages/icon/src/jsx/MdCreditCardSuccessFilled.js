import React from "react";
import PropTypes from "prop-types";

const MdCreditCardSuccessFilled = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      ref={ref}
      aria-hidden={!props["aria-label"]}
      {...props}
    >
      <path
        d="M24.03 17H7v4h26v-2.893 8.973A2.92 2.92 0 0 1 30.08 30H9.92A2.92 2.92 0 0 1 7 27.08V12.92A2.92 2.92 0 0 1 9.921 10h11.464a7.98 7.98 0 0 0 2.646 7zm11.293-6a6 6 0 0 1-6 6 6 6 0 1 1 0-12 6 6 0 0 1 6 6zm-4.324-2.9l-2.555 4.065-1.205-1.647a.75.75 0 0 0-1.21.886l1.856 2.539a.75.75 0 0 0 1.24-.044l3.144-5a.75.75 0 1 0-1.27-.798z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdCreditCardSuccessFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdCreditCardSuccessFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCreditCardSuccessFilled.groupName = "Payment";
export default MdCreditCardSuccessFilled;
