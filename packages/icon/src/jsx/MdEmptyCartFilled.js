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
      d="M8.742 11H6a1 1 0 010-2h3.448a1 1 0 01.943.666l.476 1.343A1.01 1.01 0 0111 11h18.327l.559-1.376c.49-1.208 2.305-.518 1.869.71l-4.613 13A1 1 0 0126.2 24H14.06a1 1 0 01-.942-.666L8.742 11zM18 28.5a2.5 2.5 0 11-5 .002 2.5 2.5 0 015-.003zm9 0a2.5 2.5 0 11-5.001 0 2.5 2.5 0 015.001 0z"
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
const MdEmptyCartFilled = withWrapper(Vector);
MdEmptyCartFilled.groupName = "Cart";
export default MdEmptyCartFilled;
