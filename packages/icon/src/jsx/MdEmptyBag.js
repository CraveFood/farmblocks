import React from "react";
import PropTypes from "prop-types";

const MdEmptyBag = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M28 14v2a1 1 0 0 1-2 0v-2H14v2a1 1 0 0 1-2 0v-2H9.905l-1.8 18h23.79l-1.8-18H28zm-15.938-2a8.001 8.001 0 0 1 15.876 0H31a1 1 0 0 1 .995.9l2 20A1 1 0 0 1 33 34H7a1 1 0 0 1-.995-1.1l2-20A1 1 0 0 1 9 12h3.062zm2.021 0h11.834a6.002 6.002 0 0 0-11.834 0zM16 24a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdEmptyBag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdEmptyBag.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdEmptyBag.groupName = "Cart";
export default MdEmptyBag;
