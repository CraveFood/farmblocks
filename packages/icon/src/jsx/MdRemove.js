import React from "react";
import PropTypes from "prop-types";

const MdRemove = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M21.414 20l4.243 4.243a1 1 0 1 1-1.414 1.414L20 21.414l-4.243 4.243a1 1 0 1 1-1.414-1.414L18.586 20l-4.243-4.243a1 1 0 1 1 1.414-1.414L20 18.586l4.243-4.243a1 1 0 1 1 1.414 1.414L21.414 20z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdRemove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdRemove.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdRemove.groupName = "Actions";
export default MdRemove;
