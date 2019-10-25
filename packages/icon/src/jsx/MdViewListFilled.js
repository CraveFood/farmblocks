import React from "react";
import PropTypes from "prop-types";

const MdViewListFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M20 7c7.179 0 13 5.821 13 13 0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7zm7 17H13a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zm0-5H13a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zm0-5H13a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdViewListFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdViewListFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdViewListFilled.groupName = "Misc";
export default MdViewListFilled;
