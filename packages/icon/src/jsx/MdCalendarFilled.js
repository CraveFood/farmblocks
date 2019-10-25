import React from "react";
import PropTypes from "prop-types";

const MdCalendarFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M28.5 9H32a1 1 0 0 1 1 1v6H7v-6a1 1 0 0 1 1-1h3.5V7a1 1 0 0 1 2 0v2h13V7a1 1 0 0 1 2 0v2zm4.5 8v12.076C33 31.251 31.187 33 28.97 33H11.03C8.813 33 7 31.25 7 29.076V17h26zm-14 4v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-2 0z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdCalendarFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCalendarFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCalendarFilled.groupName = "Misc";
export default MdCalendarFilled;
