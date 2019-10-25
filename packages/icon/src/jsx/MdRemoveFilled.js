import React from "react";
import PropTypes from "prop-types";

const MdRemoveFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M21.414 20l4.243-4.243a1 1 0 1 0-1.414-1.414L20 18.586l-4.243-4.243a1 1 0 1 0-1.414 1.414L18.586 20l-4.243 4.243a1 1 0 1 0 1.414 1.414L20 21.414l4.243 4.243a1 1 0 1 0 1.414-1.414L21.414 20zm7.778 9.192c-5.076 5.077-13.308 5.077-18.384 0-5.077-5.077-5.077-13.307 0-18.384 5.076-5.077 13.308-5.077 18.384 0 5.076 5.076 5.076 13.308 0 18.384z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdRemoveFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdRemoveFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdRemoveFilled.groupName = "Actions";
export default MdRemoveFilled;
