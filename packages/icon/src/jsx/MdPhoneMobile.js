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
      d="M24 7v1.283C24 9.25 23.125 10 22.08 10h-4.16C16.875 10 16 9.25 16 8.283V7h-1.167C13.808 7 13 7.76 13 8.669V31.33c0 .908.808 1.669 1.833 1.669h10.335C26.193 33 27 32.24 27 31.331V8.67C27 7.76 26.193 7 25.168 7H24Zm-9.167-2h10.335C27.272 5 29 6.628 29 8.669V31.33C29 33.371 27.272 35 25.168 35H14.833C12.73 35 11 33.372 11 31.331V8.67C11 6.629 12.729 5 14.833 5ZM17 8.283c0 .377.396.717.92.717h4.16c.524 0 .92-.34.92-.717V7h-6v1.283ZM17 32a.5.5 0 1 1 0-1h6a.5.5 0 1 1 0 1h-6Z"
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
const MdPhoneMobile = withWrapper(Vector);
MdPhoneMobile.groupName = "Misc";
export default MdPhoneMobile;
