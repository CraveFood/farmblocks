import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M9 16h22v-5h-2.5v2a1 1 0 0 1-2 0v-2h-13v2a1 1 0 0 1-2 0v-2H9v5Zm0 1v12.076C9 30.13 9.902 31 11.03 31h17.94c1.128 0 2.03-.87 2.03-1.924V17H9Zm19.5-8H32a1 1 0 0 1 1 1v19.076C33 31.251 31.187 33 28.97 33H11.03C8.813 33 7 31.25 7 29.076V10a1 1 0 0 1 1-1h3.5V7a1 1 0 0 1 2 0v2h13V7a1 1 0 0 1 2 0v2ZM19 20a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0v-8Z"
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
const MdCalendar = withWrapper(Vector);
MdCalendar.groupName = "Misc";
export default MdCalendar;
