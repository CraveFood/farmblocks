import React from "react";
import PropTypes from "prop-types";

const MdTrash = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M19.5 8V6a1 1 0 0 1 2 0v2H30a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1v17a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V15h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h9.5zM24 31h3V15H13v16h3V18a.5.5 0 1 1 1 0v13h2.5V18a.5.5 0 1 1 1 0v13H23V18a.5.5 0 1 1 1 0v13zm5-18v-3H11v3h18z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdTrash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdTrash.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdTrash.groupName = "Actions";
export default MdTrash;
