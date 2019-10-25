import React from "react";
import PropTypes from "prop-types";

const SmEdit = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M18.945 10.53L13.47 5.056l1.762-1.763a1 1 0 0 1 1.414 0l4.062 4.063a1 1 0 0 1 0 1.414l-1.762 1.762zm-1.414 1.415l-3.233 3.233a22.333 22.333 0 0 1-10.04 5.788 1 1 0 0 1-1.224-1.224 22.34 22.34 0 0 1 5.788-10.04l3.233-3.233 5.476 5.476z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
SmEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
SmEdit.defaultProps = {
  color: "currentColor",
  size: "1em",
};
SmEdit.groupName = "Actions";
export default SmEdit;
