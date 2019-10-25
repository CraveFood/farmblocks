import React from "react";
import PropTypes from "prop-types";

const MdPrintFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M30 23v-6a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v6H8a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2zm-2-11h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1zm0 6v13a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1V18h16zm-12 7h7a.5.5 0 1 0 0-1h-7a.5.5 0 1 0 0 1zm0 3h7a.5.5 0 1 0 0-1h-7a.5.5 0 1 0 0 1zm0-6h4.4a.5.5 0 1 0 0-1H16a.5.5 0 1 0 0 1z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdPrintFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdPrintFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdPrintFilled.groupName = "Actions";
export default MdPrintFilled;
