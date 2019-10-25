import React from "react";
import PropTypes from "prop-types";

const MdCoupon2 = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M15 26.012L17.301 28H33a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H17.301L15 13.988V16h-1v-2.012L11.7 12H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4.7l2.3-1.988V24h1v2.012zM16.557 10H33a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H16.557L14.5 28.223 12.445 30H7a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3h5.445l2.055 1.777L16.557 10zM14 18h1v4h-1v-4zm9.848-.235A2.002 2.002 0 0 1 22 19a2 2 0 1 1 1.849-1.235zm6 6A2.002 2.002 0 0 1 28 25a2 2 0 1 1 1.849-1.235zm-9.12 1.334a.728.728 0 0 1-.514-1.243l8.736-8.736a.726.726 0 0 1 1.036-.007.725.725 0 0 1-.007 1.036l-8.735 8.736a.724.724 0 0 1-.515.214z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdCoupon2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCoupon2.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCoupon2.groupName = "Misc";
export default MdCoupon2;
