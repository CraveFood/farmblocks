import React from "react";
import PropTypes from "prop-types";

const MdEditFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M29.707 17.293l-7-7 2-2a1 1 0 0 1 1.415 0l5.585 5.585a1 1 0 0 1 0 1.414l-2 2zm-1.414 1.414l-10.97 10.97a1 1 0 0 1-.45.26l-7.616 2.029a1 1 0 0 1-1.223-1.224l2.03-7.614a1 1 0 0 1 .26-.45l10.97-10.97 6.999 6.999z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdEditFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdEditFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdEditFilled.groupName = "Actions";
export default MdEditFilled;
