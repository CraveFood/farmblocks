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
      d="M12 30h6v-1h-6v1Zm-4 0V15H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v15h1a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h1Zm0-17h24v-2H8v2Zm7 7c-2.21 0-4 .798-4 3h8c0-2.202-1.791-3-4-3Zm-3 4v4h6v-4h-6Zm10 0v3a1 1 0 0 0 1 1h7v-4h-8Zm0-1h8v-2h-7a1 1 0 0 0-1 1v1Z"
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
const MdPurchasersFilled = withWrapper(Vector);
MdPurchasersFilled.groupName = "Business";
export default MdPurchasersFilled;
