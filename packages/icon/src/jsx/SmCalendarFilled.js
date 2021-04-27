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
      d="M16 3a1 1 0 01.993.883L17 4v1h3a1 1 0 01.993.883L21 6v12a3 3 0 01-2.824 2.995L18 21H6a3 3 0 01-2.995-2.824L3 18V6a1 1 0 01.883-.993L4 5h3V4a1 1 0 011.993-.117L9 4v1h6V4a1 1 0 011-1zM8 14.5a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zM7 7H5v3h14V7h-2v.5a1 1 0 01-1.993.117L15 7.5V7H9v.5a1 1 0 01-1.993.117L7 7.5V7z"
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
const SmCalendarFilled = withWrapper(Vector);
SmCalendarFilled.groupName = "Misc";
export default SmCalendarFilled;
