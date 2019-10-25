import React from "react";
import PropTypes from "prop-types";

const MdAdd = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M20 12a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1-2 0v-6h-6a1 1 0 0 1 0-2h6v-6a1 1 0 0 1 1-1z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdAdd.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdAdd.groupName = "Actions";
export default MdAdd;
