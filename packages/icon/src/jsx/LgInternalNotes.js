import React from "react";
import PropTypes from "prop-types";

const LgInternalNotes = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M70.5 32.5H61a1.5 1.5 0 0 1-1.5-1.5v-9.5h-30v57h41v-46zm-8-8.683V29.5h6.226L62.5 23.817zM26.5 20a1.5 1.5 0 0 1 1.5-1.5h32.543a1.5 1.5 0 0 1 1.011.392L73.011 29.35a1.5 1.5 0 0 1 .489 1.108V80a1.5 1.5 0 0 1-1.5 1.5H28a1.5 1.5 0 0 1-1.5-1.5V20zM58 44a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2h-6zm-23 0a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2H35zm6 12a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2h6zm23 0a1 1 0 0 1 0 2H47a1 1 0 0 1 0-2h17zm-29-5a1 1 0 0 1 0-2h29a1 1 0 0 1 0 2H35z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgInternalNotes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgInternalNotes.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgInternalNotes.groupName = "Docs";
export default LgInternalNotes;
