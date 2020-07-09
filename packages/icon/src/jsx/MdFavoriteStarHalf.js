import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M20 9.26V25.5a1 1 0 01.465.115l5.848 3.074-1.117-6.511a1 1 0 01.288-.885l4.73-4.612-6.537-.95a1 1 0 01-.753-.547L20 9.26zm-7.176 22.142a1 1 0 01-1.45-1.054l1.37-7.99-5.806-5.66a1 1 0 01.554-1.705l8.023-1.166 3.588-7.27a1 1 0 011.794 0l3.588 7.27 8.023 1.166a1 1 0 01.554 1.706l-5.806 5.659 1.37 7.99a1 1 0 01-1.45 1.054L20 27.63l-7.176 3.772zm4.72-18.107l-1.304 2.03-4.607.686a.5.5 0 10.147.989l4.831-.719a.5.5 0 00.347-.224l1.427-2.222a.5.5 0 10-.841-.54z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
Vector.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
Vector.defaultProps = {
  color: "currentColor",
  size: "1em",
};
const MdFavoriteStarHalf = withWrapper(Vector);
MdFavoriteStarHalf.groupName = "Actions";
export default MdFavoriteStarHalf;
