import React from "react";
import PropTypes from "prop-types";

const MdInactiveFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-8-1H15a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdInactiveFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdInactiveFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdInactiveFilled.groupName = "States";
export default MdInactiveFilled;
