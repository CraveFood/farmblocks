import React from "react";
import PropTypes from "prop-types";

const SmAddNote = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M19.707 5.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10.586a1 1 0 0 1 .707.293l3.414 3.414zM13 11V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmAddNote.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
SmAddNote.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmAddNote.groupName = "Actions";
export default SmAddNote;
