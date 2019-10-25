import React from "react";
import PropTypes from "prop-types";

const MdCreditCardFail = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M31.31 17.61a.997.997 0 0 1 .675-.276l.015-.008v.008a1 1 0 0 1 1 1v8.746A2.92 2.92 0 0 1 30.08 30H9.92a2.92 2.92 0 0 1-2.92-2.92V12.92A2.92 2.92 0 0 1 9.92 10h11.162a1 1 0 0 1 0 2H9.92a.92.92 0 0 0-.92.92v14.16c0 .508.41.92.92.92H30.08a.92.92 0 0 0 .921-.92V20H9v-4h15.1a6.978 6.978 0 0 0 4.9 2c.81 0 1.587-.137 2.31-.39zM35 11a6 6 0 0 1-6 6 6 6 0 1 1 0-12 6 6 0 0 1 6 6zm-4.995 0l1.787-1.786a.711.711 0 0 0-1.006-1.006L29 9.995l-1.786-1.786a.711.711 0 1 0-1.005 1.005L27.995 11l-1.787 1.786a.711.711 0 0 0 1.006 1.006L29 12.005l1.786 1.786a.711.711 0 1 0 1.005-1.005L30.005 11z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdCreditCardFail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCreditCardFail.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCreditCardFail.groupName = "Payment";
export default MdCreditCardFail;
