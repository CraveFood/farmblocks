import React from "react";
import PropTypes from "prop-types";

const MdCheckFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-8.685-4.663l-6.35 9.01-3.19-3.904a1 1 0 0 0-1.55 1.266l4.024 4.924a1 1 0 0 0 1.592-.057L25.95 16.49a1 1 0 0 0-1.635-1.152z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdCheckFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCheckFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCheckFilled.groupName = "Actions";
export default MdCheckFilled;
