import React from "react";
import PropTypes from "prop-types";

const MdFavoriteStarEmpty = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      ref={ref}
      aria-hidden={!props["aria-label"]}
      {...props}
    >
      <path
        d="M19.535 25.615a1 1 0 0 1 .93 0l5.848 3.074-1.117-6.511a1 1 0 0 1 .288-.885l4.73-4.612-6.537-.95a1 1 0 0 1-.753-.547L20 9.26l-2.924 5.924a1 1 0 0 1-.753.547l-6.538.95 4.731 4.612a1 1 0 0 1 .288.885l-1.117 6.511 5.848-3.074zm-6.71 5.787a1 1 0 0 1-1.452-1.054l1.37-7.99-5.805-5.66a1 1 0 0 1 .554-1.705l8.023-1.166 3.588-7.27a1 1 0 0 1 1.794 0l3.588 7.27 8.023 1.166a1 1 0 0 1 .554 1.706l-5.806 5.659 1.37 7.99a1 1 0 0 1-1.45 1.054L20 27.63l-7.176 3.772z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdFavoriteStarEmpty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdFavoriteStarEmpty.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdFavoriteStarEmpty.groupName = "Actions";
export default MdFavoriteStarEmpty;
