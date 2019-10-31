import React from "react";
import PropTypes from "prop-types";

const MdCreditCardFailFilled = React.forwardRef(
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
        d="M24.03 17H7v4h26v-2.893 8.973A2.92 2.92 0 0 1 30.08 30H9.92A2.92 2.92 0 0 1 7 27.08V12.92A2.92 2.92 0 0 1 9.921 10h11.464a7.98 7.98 0 0 0 2.646 7zm6.212-6l1.633-1.633a.65.65 0 1 0-.919-.92l-1.633 1.634-1.633-1.633a.65.65 0 1 0-.919.92L28.404 11l-1.633 1.633a.65.65 0 1 0 .919.92l1.633-1.634 1.633 1.633a.65.65 0 1 0 .919-.92L30.242 11zm5.081 0a6 6 0 0 1-6 6 6 6 0 1 1 0-12 6 6 0 0 1 6 6z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdCreditCardFailFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdCreditCardFailFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCreditCardFailFilled.groupName = "Payment";
export default MdCreditCardFailFilled;
