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
      d="M24.03 17H7v4h26v-2.893 8.973A2.92 2.92 0 0130.08 30H9.92A2.92 2.92 0 017 27.08V12.92A2.92 2.92 0 019.921 10h11.464a7.98 7.98 0 002.646 7zm6.212-6l1.633-1.633a.65.65 0 10-.919-.92l-1.633 1.634-1.633-1.633a.65.65 0 10-.919.92L28.404 11l-1.633 1.633a.65.65 0 10.919.92l1.633-1.634 1.633 1.633a.65.65 0 10.919-.92L30.242 11zm5.081 0a6 6 0 01-6 6 6 6 0 110-12 6 6 0 016 6z"
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
const MdCreditCardFailFilled = withWrapper(Vector);
MdCreditCardFailFilled.groupName = "Payment";
export default MdCreditCardFailFilled;
