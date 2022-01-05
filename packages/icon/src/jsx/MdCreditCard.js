import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M9 16h22v4H9v7.08c0 .508.412.92.921.92H30.08a.92.92 0 0 0 .921-.92V12.92a.92.92 0 0 0-.92-.92H9.92a.92.92 0 0 0-.92.92V16Zm21.08 14H9.92a2.92 2.92 0 0 1-2.92-2.92V12.92A2.92 2.92 0 0 1 9.92 10H30.08A2.92 2.92 0 0 1 33 12.92v14.16A2.92 2.92 0 0 1 30.08 30Z"
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
