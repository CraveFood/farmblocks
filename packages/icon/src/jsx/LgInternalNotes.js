import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M70.5 32.5H61a1.5 1.5 0 0 1-1.5-1.5v-9.5h-30v57h41v-46Zm-8-8.683V29.5h6.226L62.5 23.817ZM26.5 20a1.5 1.5 0 0 1 1.5-1.5h32.543a1.5 1.5 0 0 1 1.011.392L73.011 29.35a1.5 1.5 0 0 1 .489 1.108V80a1.5 1.5 0 0 1-1.5 1.5H28a1.5 1.5 0 0 1-1.5-1.5V20ZM58 44a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2h-6Zm-23 0a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2H35Zm6 12a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2h6Zm23 0a1 1 0 0 1 0 2H47a1 1 0 0 1 0-2h17Zm-29-5a1 1 0 0 1 0-2h29a1 1 0 0 1 0 2H35Z"
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
const LgInternalNotes = withWrapper(Vector);
LgInternalNotes.groupName = "Docs";
export default LgInternalNotes;
