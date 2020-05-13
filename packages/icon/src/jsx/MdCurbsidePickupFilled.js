import * as React from "react";
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
      d="M26.661 15.036a5.976 5.976 0 00-4.453 1.314A6.01 6.01 0 0020.342 19H19.23a1.995 1.995 0 00-1.991 1.811L16.275 31H6a1 1 0 01-.996-1.09l1.615-18a1 1 0 01.996-.91h2.404a6.5 6.5 0 0112.962 0h2.404a1 1 0 01.996.91l.28 3.126zM12.027 11h8.946a4.5 4.5 0 00-8.946 0zm9.073 9a5.002 5.002 0 019.8 0h1.87a1 1 0 01.995.906l1.23 13A1 1 0 0134 35H18a1 1 0 01-.996-1.094l1.231-13a1 1 0 01.996-.906H21.1zm2.07 0h5.66a3.001 3.001 0 00-5.66 0z"
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
const MdCurbsidePickupFilled = withWrapper(Vector);
MdCurbsidePickupFilled.groupName = "Delivery";
export default MdCurbsidePickupFilled;
