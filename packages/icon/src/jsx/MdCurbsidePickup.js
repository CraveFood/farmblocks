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
      d="M10.019 11a6.5 6.5 0 0112.962 0h2.404a1 1 0 01.996.91l.175 1.953a1 1 0 11-1.992.18L24.47 13H23v1a1 1 0 01-2 0v-1h-9v1a1 1 0 01-2 0v-1H8.53L7.094 29H15a1 1 0 010 2H6a1 1 0 01-.996-1.09l1.615-18a1 1 0 01.996-.91h2.404zm2.008 0h8.946a4.5 4.5 0 00-8.946 0zM31 22v1a1 1 0 01-2 0v-1h-6v1a1 1 0 01-2 0v-1h-.86L19.1 33h13.8l-1.04-11H31zm-9.9-2a5.002 5.002 0 019.8 0h1.87a1 1 0 01.995.906l1.23 13A1 1 0 0134 35H18a1 1 0 01-.996-1.094l1.231-13a1 1 0 01.996-.906H21.1zm2.07 0h5.66a3.001 3.001 0 00-5.66 0z"
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
const MdCurbsidePickup = withWrapper(Vector);
MdCurbsidePickup.groupName = "Delivery";
export default MdCurbsidePickup;
