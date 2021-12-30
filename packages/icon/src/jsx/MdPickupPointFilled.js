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
      d="M6 25.997A1 1 0 0 1 6.075 24H9v-5a1 1 0 0 1 0-2h13a1 1 0 0 1 0 2v5h3.66a1 1 0 0 1 .34 1.941V31h3v-8.514a13.948 13.948 0 0 1-1.847-2.197C25.812 18.34 25 16.18 25 13.865 25 11.03 27.156 9 29.954 9h.092C32.845 9 35 11.03 35 13.865c0 2.314-.812 4.474-2.153 6.424-.66.96-1.323 1.702-1.847 2.197V31h1a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2v-5.003ZM32 14a2 2 0 1 0-3.999-.001A2 2 0 0 0 32 14ZM17 26v5h1v-5h-1Z"
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
const MdPickupPointFilled = withWrapper(Vector);
MdPickupPointFilled.groupName = "Delivery";
export default MdPickupPointFilled;
