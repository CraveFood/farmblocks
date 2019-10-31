import React from "react";
import PropTypes from "prop-types";

const MdPending = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M19.653 20.938l-5.323 5.323a.5.5 0 1 1-.707-.707l5.39-5.39A1.007 1.007 0 0 1 19 20v-8a1 1 0 0 1 2 0v7h4a1 1 0 0 1 0 2h-5a.998.998 0 0 1-.347-.062zM31 20c0-6.074-4.926-11-11-11-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11zm2 0c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdPending.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdPending.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdPending.groupName = "States";
export default MdPending;
