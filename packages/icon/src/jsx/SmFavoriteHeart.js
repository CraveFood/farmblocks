import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M15.92 4.008c-1.294.075-2.523.664-3.66 1.551l-.26.209-.017-.014C10.697 4.692 9.292 4 7.8 4 4.256 4 2 6.146 2 9.57c0 1.268.492 2.483 1.3 3.62.479.675 1.007 1.232 1.342 1.517l6.232 5.847A1.62 1.62 0 0 0 12 21c.421 0 .831-.16 1.139-.459l6.387-5.98.283-.288c.292-.308.58-.65.85-1.026C21.493 12.093 22 10.86 22 9.57 22 6.146 19.744 4 16.199 4l-.279.008ZM16.2 6C18.66 6 20 7.274 20 9.57c0 .804-.355 1.664-.963 2.508a7.954 7.954 0 0 1-.68.82l-.19.194L12 18.868l-6.026-5.652C5.034 12.414 4 10.958 4 9.57 4 7.274 5.339 6 7.801 6c1.115 0 2.377.747 3.506 1.83a1 1 0 0 0 1.386 0C13.822 6.748 15.084 6 16.199 6Z"
      fill={color}
      fillRule="evenodd"
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
const SmFavoriteHeart = withWrapper(Vector);
SmFavoriteHeart.groupName = "Actions";
export default SmFavoriteHeart;
