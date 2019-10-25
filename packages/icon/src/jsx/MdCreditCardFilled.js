import React from "react";
import PropTypes from "prop-types";

const MdCreditCardFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M7 21h26v6.08A2.92 2.92 0 0 1 30.08 30H9.92a2.92 2.92 0 0 1-2.92-2.92V21zm0-4v-4.08A2.92 2.92 0 0 1 9.921 10H30.08A2.92 2.92 0 0 1 33 12.92V17H7z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdCreditCardFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCreditCardFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCreditCardFilled.groupName = "Payment";
export default MdCreditCardFilled;
