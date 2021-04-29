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
      d="M31.31 17.61a.996.996 0 01.674-.276l.016-.008v.008a1 1 0 011 1v8.746A2.92 2.92 0 0130.08 30H9.92a2.92 2.92 0 01-2.92-2.92V12.92A2.92 2.92 0 019.92 10h11.162a1 1 0 010 2H9.92a.92.92 0 00-.92.92v14.16c0 .508.41.92.92.92H30.08a.92.92 0 00.921-.92V20H9v-4h15.1a6.978 6.978 0 004.9 2c.81 0 1.587-.137 2.31-.39zM35 11a6 6 0 01-6 6 6 6 0 110-12 6 6 0 016 6zm-9.323 1a1 1 0 100-2 1 1 0 000 2zM29 12a1 1 0 100-2 1 1 0 000 2zm3.323 0a1 1 0 100-2 1 1 0 000 2z"
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
const MdCreditCardPending = withWrapper(Vector);
MdCreditCardPending.groupName = "Payment";
export default MdCreditCardPending;
