import React from "react";
import PropTypes from "prop-types";

const SmAddedNote = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M19.707 5.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10.586a1 1 0 0 1 .707.293l3.414 3.414zm-6.054 2.76l-2.359 3.754-.987-1.35a1 1 0 0 0-1.614 1.18l1.857 2.54a1 1 0 0 0 1.653-.059l3.144-5a1 1 0 1 0-1.694-1.064z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmAddedNote.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
SmAddedNote.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmAddedNote.groupName = "Actions";
export default SmAddedNote;
