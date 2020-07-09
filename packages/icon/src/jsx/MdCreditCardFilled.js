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
      d="M7 21h26v6.08A2.92 2.92 0 0130.08 30H9.92a2.92 2.92 0 01-2.92-2.92V21zm0-4v-4.08A2.92 2.92 0 019.921 10H30.08A2.92 2.92 0 0133 12.92V17H7z"
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
const MdCreditCardFilled = withWrapper(Vector);
MdCreditCardFilled.groupName = "Payment";
export default MdCreditCardFilled;
