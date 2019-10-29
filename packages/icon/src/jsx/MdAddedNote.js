import React from "react";
import PropTypes from "prop-types";

const MdAddedNote = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M27 12h-4V8.06L22.932 8H11v22h9a1 1 0 0 1 0 2H10a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h13.313a1 1 0 0 1 .666.254l4.687 4.183a1 1 0 0 1 .334.746v9.408a1 1 0 0 1-2 0V12zm-13 4.25a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H14zm0 3a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H14zm0 3a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H14zm19.918 6.709a5.958 5.958 0 0 1-5.959 5.959 5.958 5.958 0 1 1 0-11.918 5.96 5.96 0 0 1 5.959 5.959zm-4.265-2.491l-2.359 3.753-.987-1.35a1 1 0 1 0-1.614 1.18l1.857 2.54a1 1 0 0 0 1.653-.059l3.144-5a1 1 0 1 0-1.694-1.064z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdAddedNote.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdAddedNote.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdAddedNote.groupName = "Actions";
export default MdAddedNote;
