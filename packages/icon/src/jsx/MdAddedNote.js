import * as React from "react";
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
      d="M27 12h-4V8.06L22.932 8H11v22h9a1 1 0 010 2H10a1 1 0 01-1-1V7a1 1 0 011-1h13.313a1 1 0 01.666.254l4.687 4.183a1 1 0 01.334.746v9.408a1 1 0 01-2 0V12zm-13 4.25a.75.75 0 110-1.5h10a.75.75 0 110 1.5H14zm0 3a.75.75 0 110-1.5h10a.75.75 0 110 1.5H14zm0 3a.75.75 0 110-1.5h10a.75.75 0 110 1.5H14zm19.918 6.709a5.958 5.958 0 01-5.959 5.959 5.958 5.958 0 110-11.918 5.96 5.96 0 015.959 5.959zm-4.265-2.491l-2.359 3.753-.987-1.35a1 1 0 10-1.614 1.18l1.857 2.54a1 1 0 001.653-.059l3.144-5a1 1 0 10-1.694-1.064z"
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
const MdAddedNote = withWrapper(Vector);
MdAddedNote.groupName = "Actions";
export default MdAddedNote;
