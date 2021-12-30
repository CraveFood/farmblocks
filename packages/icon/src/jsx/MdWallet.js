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
      d="M31 24h-4.846c-1.484 0-2.654-1.358-2.654-3s1.17-3 2.654-3H31v-5.08a.92.92 0 0 0-.92-.92H9.92a.92.92 0 0 0-.92.92v14.16c0 .508.41.92.92.92H30.08a.92.92 0 0 0 .921-.92V24Zm0-1v-4h-4.846c-.896 0-1.654.88-1.654 2s.758 2 1.654 2H31Zm-.92 7H9.92a2.92 2.92 0 0 1-2.92-2.92V12.92A2.92 2.92 0 0 1 9.92 10H30.08A2.92 2.92 0 0 1 33 12.92v14.16A2.92 2.92 0 0 1 30.08 30ZM10.5 14a.5.5 0 1 1 0-1h19a.5.5 0 1 1 0 1h-19Zm17 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
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
const MdWallet = withWrapper(Vector);
MdWallet.groupName = "Payment";
export default MdWallet;
