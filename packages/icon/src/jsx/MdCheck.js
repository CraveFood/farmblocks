import React from "react";
import PropTypes from "prop-types";

const MdCheck = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M26.177 12.432a1 1 0 1 1 1.646 1.136l-8.977 13a1 1 0 0 1-1.597.065l-4.023-4.924a1 1 0 1 1 1.548-1.266l3.182 3.894 8.221-11.905z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdCheck.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCheck.groupName = "Actions";
export default MdCheck;
