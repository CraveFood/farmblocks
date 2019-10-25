import React from "react";
import PropTypes from "prop-types";

const MdCreditCardPending = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M31.31 17.61a.996.996 0 0 1 .674-.276l.016-.008v.008a1 1 0 0 1 1 1v8.746A2.92 2.92 0 0 1 30.08 30H9.92a2.92 2.92 0 0 1-2.92-2.92V12.92A2.92 2.92 0 0 1 9.92 10h11.162a1 1 0 0 1 0 2H9.92a.92.92 0 0 0-.92.92v14.16c0 .508.41.92.92.92H30.08a.92.92 0 0 0 .921-.92V20H9v-4h15.1a6.978 6.978 0 0 0 4.9 2c.81 0 1.587-.137 2.31-.39zM35 11a6 6 0 0 1-6 6 6 6 0 1 1 0-12 6 6 0 0 1 6 6zm-9.323 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM29 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3.323 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdCreditCardPending.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCreditCardPending.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCreditCardPending.groupName = "Payment";
export default MdCreditCardPending;
