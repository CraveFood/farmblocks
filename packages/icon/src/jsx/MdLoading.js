import React from "react";
import PropTypes from "prop-types";

const MdLoading = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M19 8a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0V8zm2 24a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0v5zM8 21a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H8zm18-.5a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6zm3.197 7.283a1 1 0 0 1-1.414 1.414l-3.86-3.86a1 1 0 0 1 1.414-1.414l3.86 3.86zm-12.87-12.87a1 1 0 0 1-1.414 1.414l-4.11-4.11a1 1 0 0 1 1.414-1.414l4.11 4.11zm-1.664 9.01a1 1 0 0 1 1.414 1.414l-3.86 3.86a1 1 0 0 1-1.414-1.414l3.86-3.86zm13.12-13.12a1 1 0 0 1 1.414 1.414l-4.11 4.11a1 1 0 0 1-1.414-1.414l4.11-4.11z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdLoading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdLoading.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdLoading.groupName = "States";
export default MdLoading;
