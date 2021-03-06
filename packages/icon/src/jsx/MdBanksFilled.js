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
      d="M8 30V19h-.294a2.2 2.2 0 01-1.154-4.073l12.354-7.612A2.118 2.118 0 0120.016 7a2 2 0 011.05.297l12.382 7.63A2.2 2.2 0 0132.294 19H32v11h2a1 1 0 010 2H6a1 1 0 010-2h2zm1 0h2v-1H9v1zm5 0h2v-1h-2v1zm4.5 0h3v-3a1.5 1.5 0 00-3 0v3zm5.5 0h2v-1h-2v1zm5 0h2v-1h-2v1zM9 19v1h2v-1H9zm5 0v1h2v-1h-2zm10 0v1h2v-1h-2zm5 0v1h2v-1h-2zM9 21v7h2v-7H9zm5 0v7h2v-7h-2zm10 0v7h2v-7h-2zm5 0v7h2v-7h-2zm-10.5-7.5a1.5 1.5 0 103.001-.001 1.5 1.5 0 00-3.001.001zM8.5 17a.5.5 0 100 1h23a.5.5 0 100-1h-23z"
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
const MdBanksFilled = withWrapper(Vector);
MdBanksFilled.groupName = "Business";
export default MdBanksFilled;
