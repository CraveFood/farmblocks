import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M19.707 5.707a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h10.586a1 1 0 01.707.293l3.414 3.414zm-6.054 2.76l-2.359 3.754-.987-1.35a1 1 0 00-1.614 1.18l1.857 2.54a1 1 0 001.653-.059l3.144-5a1 1 0 10-1.694-1.064z"
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
const SmAddedNote = withWrapper(Vector);
SmAddedNote.groupName = "Actions";
export default SmAddedNote;
