import React from "react";
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
      d="M12.062 12a8.001 8.001 0 0115.876 0H31a1 1 0 01.995.9l2 20A1 1 0 0133 34H7a1 1 0 01-.995-1.1l2-20A1 1 0 019 12h3.062zm2.021 0h11.834a6.002 6.002 0 00-11.834 0zM16 24a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2z"
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
const MdEmptyBagFilled = withWrapper(Vector);
MdEmptyBagFilled.groupName = "Cart";
export default MdEmptyBagFilled;
