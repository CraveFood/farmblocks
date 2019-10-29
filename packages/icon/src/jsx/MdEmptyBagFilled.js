import React from "react";
import PropTypes from "prop-types";

const MdEmptyBagFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M12.062 12a8.001 8.001 0 0 1 15.876 0H31a1 1 0 0 1 .995.9l2 20A1 1 0 0 1 33 34H7a1 1 0 0 1-.995-1.1l2-20A1 1 0 0 1 9 12h3.062zm2.021 0h11.834a6.002 6.002 0 0 0-11.834 0zM16 24a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdEmptyBagFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdEmptyBagFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdEmptyBagFilled.groupName = "Cart";
export default MdEmptyBagFilled;
