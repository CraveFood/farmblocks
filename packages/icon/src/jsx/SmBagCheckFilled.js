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
      d="M12 3a4 4 0 013.995 3.8L16 7 18 7a1 1 0 01.96.718l.026.118 1.612 9.67a3 3 0 01-2.794 3.49L17.64 21H6.361a3 3 0 01-2.982-3.33l.023-.163 1.612-9.671a1 1 0 01.865-.829L6 7l2-.001.005-.199A4 4 0 0112 3zm2.532 8.653a1 1 0 00-1.379.315l-1.731 2.752-.615-.841-.08-.097a1 1 0 00-1.534 1.277l1.485 2.031.083.1a1 1 0 001.571-.158l2.515-4 .056-.102a1 1 0 00-.37-1.277zM12 5a2 2 0 00-1.995 1.85L10 7h4l-.005-.148A2 2 0 0012 5z"
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
const SmBagCheckFilled = withWrapper(Vector);
SmBagCheckFilled.groupName = "Cart";
export default SmBagCheckFilled;
