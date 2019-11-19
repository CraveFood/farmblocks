import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M9 16h22v4H9v7.08c0 .508.412.92.921.92H30.08a.92.92 0 00.921-.92V12.92a.92.92 0 00-.92-.92H9.92a.92.92 0 00-.92.92V16zm21.08 14H9.92a2.92 2.92 0 01-2.92-2.92V12.92A2.92 2.92 0 019.92 10H30.08A2.92 2.92 0 0133 12.92v14.16A2.92 2.92 0 0130.08 30z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
Vector.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
Vector.defaultProps = {
  color: "currentColor",
  size: "1em",
};
const MdCreditCard = withWrapper(Vector);
MdCreditCard.groupName = "Payment";
export default MdCreditCard;
