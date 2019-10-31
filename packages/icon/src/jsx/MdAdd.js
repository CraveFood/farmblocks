import React from "react";
import PropTypes from "prop-types";

const MdAdd = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M20 12a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1-2 0v-6h-6a1 1 0 0 1 0-2h6v-6a1 1 0 0 1 1-1z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdAdd.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdAdd.groupName = "Actions";
export default MdAdd;
