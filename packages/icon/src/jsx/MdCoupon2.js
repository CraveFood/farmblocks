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
      d="M15 26.012 17.301 28H33a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H17.301L15 13.988V16h-1v-2.012L11.7 12H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4.7l2.3-1.988V24h1v2.012ZM16.557 10H33a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H16.557L14.5 28.223 12.445 30H7a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3h5.445l2.055 1.777L16.557 10ZM14 18h1v4h-1v-4Zm9.848-.235A2.002 2.002 0 0 1 22 19a2 2 0 1 1 1.849-1.235Zm6 6A2.002 2.002 0 0 1 28 25a2 2 0 1 1 1.849-1.235Zm-9.12 1.334a.728.728 0 0 1-.514-1.243l8.736-8.736a.726.726 0 0 1 1.036-.007.725.725 0 0 1-.007 1.036l-8.735 8.736a.724.724 0 0 1-.515.214Z"
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
const MdCoupon2 = withWrapper(Vector);
MdCoupon2.groupName = "Misc";
export default MdCoupon2;
