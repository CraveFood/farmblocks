import React from "react";
import PropTypes from "prop-types";

const MdViewListFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M20 7c7.179 0 13 5.821 13 13 0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7zm7 17H13a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zm0-5H13a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zm0-5H13a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdViewListFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdViewListFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdViewListFilled.groupName = "Misc";
export default MdViewListFilled;
