import React from "react";
import PropTypes from "prop-types";

const MdInactive = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M31 20c0-6.074-4.926-11-11-11-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11zm2 0c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-8-1a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2h10z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdInactive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdInactive.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdInactive.groupName = "States";
export default MdInactive;
