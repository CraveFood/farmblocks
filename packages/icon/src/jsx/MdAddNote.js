import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M27 12h-4V8.06L22.932 8H11v22h9a1 1 0 010 2H10a1 1 0 01-1-1V7a1 1 0 011-1h13.313a1 1 0 01.666.254l4.687 4.183a1 1 0 01.334.746v9.408a1 1 0 01-2 0V12zm2 16v-2a1 1 0 00-2 0v2h-2a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2h-2zm4.918.959a5.958 5.958 0 01-5.959 5.959 5.958 5.958 0 110-11.918 5.96 5.96 0 015.959 5.959zM14 16.25a.75.75 0 110-1.5h10a.75.75 0 110 1.5H14zm0 3a.75.75 0 110-1.5h10a.75.75 0 110 1.5H14zm0 3a.75.75 0 110-1.5h10a.75.75 0 110 1.5H14z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
Vector.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
Vector.defaultProps = {
  color: "currentColor",
  size: "1em",
};
const MdAddNote = withWrapper(Vector);
MdAddNote.groupName = "Actions";
export default MdAddNote;
