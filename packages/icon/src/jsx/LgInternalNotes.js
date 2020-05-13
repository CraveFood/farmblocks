import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M70.5 32.5H61a1.5 1.5 0 01-1.5-1.5v-9.5h-30v57h41v-46zm-8-8.683V29.5h6.226L62.5 23.817zM26.5 20a1.5 1.5 0 011.5-1.5h32.543a1.5 1.5 0 011.011.392L73.011 29.35a1.5 1.5 0 01.489 1.108V80a1.5 1.5 0 01-1.5 1.5H28a1.5 1.5 0 01-1.5-1.5V20zM58 44a1 1 0 010-2h6a1 1 0 010 2h-6zm-23 0a1 1 0 010-2h17a1 1 0 010 2H35zm6 12a1 1 0 010 2h-6a1 1 0 010-2h6zm23 0a1 1 0 010 2H47a1 1 0 010-2h17zm-29-5a1 1 0 010-2h29a1 1 0 010 2H35z"
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
