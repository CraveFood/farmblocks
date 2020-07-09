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
      d="M24.03 17H7v4h26v-2.893 8.973A2.92 2.92 0 0130.08 30H9.92A2.92 2.92 0 017 27.08V12.92A2.92 2.92 0 019.921 10h11.464a7.98 7.98 0 002.646 7zm11.293-6a6 6 0 01-6 6 6 6 0 110-12 6 6 0 016 6zM26 12a1 1 0 100-2 1 1 0 000 2zm3.323 0a1 1 0 100-2 1 1 0 000 2zm3.323 0a1 1 0 100-2 1 1 0 000 2z"
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
const MdCreditCardPendingFilled = withWrapper(Vector);
MdCreditCardPendingFilled.groupName = "Payment";
export default MdCreditCardPendingFilled;
