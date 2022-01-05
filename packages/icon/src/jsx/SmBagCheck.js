import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M12 3a4 4 0 0 1 3.995 3.8L16 7 18 7a1 1 0 0 1 .96.718l.026.118 1.612 9.67a3 3 0 0 1-2.794 3.49L17.64 21H6.361a3 3 0 0 1-2.982-3.33l.023-.163 1.612-9.671a1 1 0 0 1 .865-.829L6 7l2-.001.005-.199A4 4 0 0 1 12 3ZM8 8.999H6.847l-1.478 8.877L5.36 18a1 1 0 0 0 .883.993l.117.007h11.278a1 1 0 0 0 .999-1.048l-.013-.116-1.473-8.837H16V10a1 1 0 0 1-1.993.117L14 10V8.999h-4V10a1 1 0 0 1-1.993.117L8 10V8.999Zm6.532 2.654a1 1 0 0 1 .371 1.277l-.056.102-2.515 4a1 1 0 0 1-1.57.158l-.084-.1-1.485-2.03a1 1 0 0 1 1.534-1.278l.08.097.615.841 1.731-2.752a1 1 0 0 1 1.38-.315ZM12 5a2 2 0 0 0-1.995 1.85L10 7h4l-.005-.148A2 2 0 0 0 12 5Z"
      fill={color}
      fillRule="evenodd"
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
const SmBagCheck = withWrapper(Vector);
SmBagCheck.groupName = "Cart";
export default SmBagCheck;
