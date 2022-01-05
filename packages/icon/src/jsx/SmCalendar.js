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
      d="M16 3a1 1 0 0 1 .993.883L17 4v1h3a1 1 0 0 1 .993.883L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a1 1 0 0 1 .883-.993L4 5h3V4a1 1 0 0 1 1.993-.117L9 4v1h6V4a1 1 0 0 1 1-1Zm3 9H5v6a1 1 0 0 0 .77.974l.113.02L6 19h12a1 1 0 0 0 .993-.883L19 18v-6ZM8 14.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM7 7H5v3h14V7h-2v.5a1 1 0 0 1-1.993.117L15 7.5V7H9v.5a1 1 0 0 1-1.993.117L7 7.5V7Z"
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
const SmCalendar = withWrapper(Vector);
SmCalendar.groupName = "Misc";
export default SmCalendar;
