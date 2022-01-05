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
      d="M8 30V19h-.294a2.2 2.2 0 0 1-1.154-4.073l12.354-7.612A2.118 2.118 0 0 1 20.016 7a2 2 0 0 1 1.05.297l12.382 7.63A2.2 2.2 0 0 1 32.294 19H32v11h2a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2h2Zm1 0h2v-1H9v1Zm5 0h2v-1h-2v1Zm4.5 0h3v-3a1.5 1.5 0 0 0-3 0v3Zm5.5 0h2v-1h-2v1Zm5 0h2v-1h-2v1ZM9 19v1h2v-1H9Zm5 0v1h2v-1h-2Zm10 0v1h2v-1h-2Zm5 0v1h2v-1h-2ZM9 21v7h2v-7H9Zm5 0v7h2v-7h-2Zm10 0v7h2v-7h-2Zm5 0v7h2v-7h-2Zm-10.5-7.5a1.5 1.5 0 1 0 3.001-.001 1.5 1.5 0 0 0-3.001.001ZM8.5 17a.5.5 0 1 0 0 1h23a.5.5 0 1 0 0-1h-23Z"
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
