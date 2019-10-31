import React from "react";
import PropTypes from "prop-types";

const MdCreditCard = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M9 16h22v4H9v7.08c0 .508.412.92.921.92H30.08a.92.92 0 0 0 .921-.92V12.92a.92.92 0 0 0-.92-.92H9.92a.92.92 0 0 0-.92.92V16zm21.08 14H9.92a2.92 2.92 0 0 1-2.92-2.92V12.92A2.92 2.92 0 0 1 9.92 10H30.08A2.92 2.92 0 0 1 33 12.92v14.16A2.92 2.92 0 0 1 30.08 30z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdCreditCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdCreditCard.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCreditCard.groupName = "Payment";
export default MdCreditCard;
