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
      d="M24 28V12h9v16h-9Zm0 1h9v1.522A3.478 3.478 0 0 1 29.521 34h-7.178a4.506 4.506 0 0 0 1.426-2.056c.07.036.148.056.231.056h2a.5.5 0 1 0 0-1h-2.026c.017-.157.026-.317.026-.478V29ZM22.343 6h7.178A3.478 3.478 0 0 1 33 9.478V11h-9V9.478c0-.16-.009-.32-.026-.478H27a.5.5 0 1 0 0-1h-3.25a4.473 4.473 0 0 0-1.407-2ZM11 6v1.283C11 8.25 11.875 9 12.92 9h4.16C18.125 9 19 8.25 19 7.283V6h.521A3.477 3.477 0 0 1 23 9.478v21.044A3.477 3.477 0 0 1 19.52 34h-9.043A3.478 3.478 0 0 1 7 30.522V9.478A3.478 3.478 0 0 1 10.479 6H11Zm1 0h6v1.283c0 .377-.396.717-.92.717h-4.16c-.524 0-.92-.34-.92-.717V6Zm-.114 26h6a.5.5 0 1 0 0-1h-6a.5.5 0 1 0 0 1Z"
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
const MdMobileDevicesFilled = withWrapper(Vector);
MdMobileDevicesFilled.groupName = "Misc";
export default MdMobileDevicesFilled;
