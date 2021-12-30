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
      d="M28.5 9H32a1 1 0 0 1 1 1v6H7v-6a1 1 0 0 1 1-1h3.5V7a1 1 0 0 1 2 0v2h13V7a1 1 0 0 1 2 0v2Zm4.5 8v12.076C33 31.251 31.187 33 28.97 33H11.03C8.813 33 7 31.25 7 29.076V17h26Zm-14 4v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-2 0Z"
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
const MdCalendarFilled = withWrapper(Vector);
MdCalendarFilled.groupName = "Misc";
export default MdCalendarFilled;
