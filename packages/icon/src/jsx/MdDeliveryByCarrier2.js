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
      d="M20.5 33H25v-5H15v5h4.5v-3a.5.5 0 111 0v3zm0-7h.185l4.88-5H20.5v5zm-1 0v-5h-5.164l4.878 5h.286zm2.583 0H27a1 1 0 010 2v6a1 1 0 01-1 1H14a1 1 0 01-1-1v-6a1 1 0 010-2h4.817l-4.879-5h-1.762a1 1 0 01-.871-.51 10.075 10.075 0 01-1.304-4.965C9 9.7 13.933 5 20 5c6.06 0 11 4.703 11 10.525 0 1.749-.458 3.441-1.316 4.966a1 1 0 01-.871.509H26.96l-4.878 5zM29 15.525C29 10.83 24.977 7 20 7c-4.984 0-9 3.827-9 8.525A8.06 8.06 0 0011.784 19h16.423c.52-1.09.793-2.266.793-3.475z"
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
const MdDeliveryByCarrier2 = withWrapper(Vector);
MdDeliveryByCarrier2.groupName = "Delivery";
export default MdDeliveryByCarrier2;
