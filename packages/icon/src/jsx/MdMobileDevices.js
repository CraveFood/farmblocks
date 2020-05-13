import * as React from "react";
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
      d="M23 10v1h8V9.478C31 8.661 30.339 8 29.521 8h-6.85c.146.311.248.648.296 1.001L23 9h4a.5.5 0 110 1h-4zm0 2v16h8V12h-8zm0 17v1.522c0 .529-.118 1.03-.33 1.478h6.851c.818 0 1.479-.661 1.479-1.478V29h-8zM19 8v.283C19 9.25 18.125 10 17.08 10h-4.16C11.875 10 11 9.25 11 8.283V8h-.521c-.818 0-1.48.662-1.48 1.478v21.044C9 31.338 9.662 32 10.48 32h9.043c.816 0 1.478-.661 1.478-1.478V9.478C21 8.661 20.338 8 19.52 8H19zm-8.521-2H29.52A3.478 3.478 0 0133 9.478v21.044A3.478 3.478 0 0129.521 34H10.478A3.478 3.478 0 017 30.522V9.478A3.478 3.478 0 0110.479 6zM12 8v.283c0 .377.396.717.92.717h4.16c.524 0 .92-.34.92-.717V8h-6zm-.114 23a.5.5 0 110-1h6a.5.5 0 110 1h-6zM26 30a.5.5 0 110 1h-2a.5.5 0 110-1h2z"
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
const MdMobileDevices = withWrapper(Vector);
MdMobileDevices.groupName = "Misc";
export default MdMobileDevices;
