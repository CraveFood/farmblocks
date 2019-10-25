import React from "react";
import PropTypes from "prop-types";

const SmBlock = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M22 12c0 5.524-4.477 10-10 10S2 17.524 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10zm-5.896-2.857a5 5 0 0 1-6.869 7.023l6.87-7.023zm-1.447-1.38L7.824 14.75a5 5 0 0 1 6.833-6.987zM19 12a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
SmBlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
SmBlock.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmBlock.groupName = "Actions";
export default SmBlock;
