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
      d="M29.666 11.437a1 1 0 0 1 .334.746V32a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h13.313a1 1 0 0 1 .666.254l4.687 4.183ZM28 13h-4V9.061L23.932 9H12v22h16V13Zm-13 4.25a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H15Zm0 3a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H15Zm0 3a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H15Z"
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
const MdOrders = withWrapper(Vector);
MdOrders.groupName = "Menu";
export default MdOrders;
