import React from "react";
import PropTypes from "prop-types";

const MdEmailFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M9 29a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H9zm11-10.22l-9.427-6.6a1 1 0 1 0-1.146 1.64l10 7a1 1 0 0 0 1.146 0l10-7a1 1 0 1 0-1.146-1.64L20 18.78z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdEmailFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdEmailFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdEmailFilled.groupName = "Misc";
export default MdEmailFilled;
