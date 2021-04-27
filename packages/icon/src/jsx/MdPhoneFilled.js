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
      d="M25.317 21.85c.518-.52 1.163-.782 1.878-.75.612.031 1.193.236 1.755.623l4.59 3.392c.684.471 1.017 1.192.947 2.028a2.87 2.87 0 01-.836 1.835l-2.36 2.36c-.858.858-1.886 1.252-3.008 1.124-.935-.106-1.876-.402-2.864-.91-.146-.085-.436-.254-.869-.509a41.31 41.31 0 01-2.295-1.478 57.457 57.457 0 01-3.105-2.294 38.402 38.402 0 01-3.394-3.026 38.453 38.453 0 01-3.027-3.396 57.678 57.678 0 01-2.294-3.104 41.216 41.216 0 01-1.475-2.292c-.256-.434-.426-.725-.537-.918-.482-.942-.779-1.883-.883-2.815-.128-1.124.265-2.151 1.124-3.01l2.36-2.36a2.87 2.87 0 011.833-.836c.835-.07 1.558.263 2.009.92l3.432 4.645a3.3 3.3 0 01.602 1.728c.034.712-.229 1.356-.743 1.87l-.78.795a65.83 65.83 0 001.263 1.589 30.73 30.73 0 004.3 4.3c.549.45 1.078.87 1.589 1.263l.788-.775z"
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
const MdPhoneFilled = withWrapper(Vector);
MdPhoneFilled.groupName = "Misc";
export default MdPhoneFilled;
