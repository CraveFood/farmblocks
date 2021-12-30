import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M15.586 2a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10.586Zm-.415 2H6v16h12V6.829L15.171 4ZM12 8a1 1 0 0 1 .993.883L13 9v2h2a1 1 0 0 1 .117 1.993L15 13h-2v2a1 1 0 0 1-1.993.117L11 15v-2H9a1 1 0 0 1-.117-1.993L9 11h2V9a1 1 0 0 1 1-1Z"
      fill={color}
      fillRule="evenodd"
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
const SmAddNote = withWrapper(Vector);
SmAddNote.groupName = "Actions";
export default SmAddNote;
