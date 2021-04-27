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
      d="M12 3a4 4 0 013.995 3.8L16 7 18 7a1 1 0 01.96.718l.026.118 1.612 9.67a3 3 0 01-2.794 3.49L17.64 21H6.361a3 3 0 01-2.982-3.33l.023-.163 1.612-9.671a1 1 0 01.865-.829L6 7l2-.001.005-.199A4 4 0 0112 3zm0 8a1 1 0 00-1 1v1h-1l-.117.007A1 1 0 0010 15h1v1l.007.117A1 1 0 0013 16v-1h1l.117-.007A1 1 0 0014 13h-1v-1l-.007-.117A1 1 0 0012 11zm0-6a2 2 0 00-1.995 1.85L10 7h4l-.005-.148A2 2 0 0012 5z"
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
const SmBagAddFilled = withWrapper(Vector);
SmBagAddFilled.groupName = "Cart";
export default SmBagAddFilled;
