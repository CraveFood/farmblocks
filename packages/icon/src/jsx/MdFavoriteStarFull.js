import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M12.824 31.402a1 1 0 01-1.45-1.054l1.37-7.99-5.806-5.66a1 1 0 01.554-1.705l8.023-1.166 3.588-7.27a1 1 0 011.794 0l3.588 7.27 8.023 1.166a1 1 0 01.554 1.706l-5.806 5.659 1.37 7.99a1 1 0 01-1.45 1.054L20 27.63l-7.176 3.772zm5.274-18.97l-1.858 2.894-4.607.685a.5.5 0 10.147.989l4.831-.719a.5.5 0 00.347-.224l1.982-3.085a.5.5 0 10-.842-.54z"
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
const MdFavoriteStarFull = withWrapper(Vector);
MdFavoriteStarFull.groupName = "Actions";
export default MdFavoriteStarFull;
