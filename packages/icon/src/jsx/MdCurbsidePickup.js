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
      d="M10.019 11a6.5 6.5 0 0 1 12.962 0h2.404a1 1 0 0 1 .996.91l.175 1.953a1 1 0 1 1-1.992.18L24.47 13H23v1a1 1 0 0 1-2 0v-1h-9v1a1 1 0 0 1-2 0v-1H8.53L7.094 29H15a1 1 0 0 1 0 2H6a1 1 0 0 1-.996-1.09l1.615-18a1 1 0 0 1 .996-.91h2.404Zm2.008 0h8.946a4.5 4.5 0 0 0-8.946 0ZM31 22v1a1 1 0 0 1-2 0v-1h-6v1a1 1 0 0 1-2 0v-1h-.86L19.1 33h13.8l-1.04-11H31Zm-9.9-2a5.002 5.002 0 0 1 9.8 0h1.87a1 1 0 0 1 .995.906l1.23 13A1 1 0 0 1 34 35H18a1 1 0 0 1-.996-1.094l1.231-13a1 1 0 0 1 .996-.906H21.1Zm2.07 0h5.66a3.001 3.001 0 0 0-5.66 0Z"
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
