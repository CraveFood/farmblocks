import React from "react";
import PropTypes from "prop-types";

const MdFavoriteStarFull = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M12.824 31.402a1 1 0 0 1-1.45-1.054l1.37-7.99-5.806-5.66a1 1 0 0 1 .554-1.705l8.023-1.166 3.588-7.27a1 1 0 0 1 1.794 0l3.588 7.27 8.023 1.166a1 1 0 0 1 .554 1.706l-5.806 5.659 1.37 7.99a1 1 0 0 1-1.45 1.054L20 27.63l-7.176 3.772zm5.274-18.97l-1.858 2.894-4.607.685a.5.5 0 1 0 .147.989l4.831-.719a.5.5 0 0 0 .347-.224l1.982-3.085a.5.5 0 1 0-.842-.54z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdFavoriteStarFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdFavoriteStarFull.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdFavoriteStarFull.groupName = "Actions";
export default MdFavoriteStarFull;
