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
      d="M26 17.907v-5.76C26 9.24 24.073 8 20.123 8 16.093 8 14 9.283 14 12.147v5.76C14 20.755 16.065 22 20.124 22h.002C24.103 22 26 20.799 26 17.907zm2-5.76v5.76C28 22.145 25.07 24 20.125 24 15.105 24 12 22.13 12 17.907v-5.76C12 7.92 15.13 6 20.123 6 25.041 6 28 7.904 28 12.147zM14.51 26h10.98c2.01 0 3.49 1.17 4.49 3.025a9.712 9.712 0 011.004 2.8 1 1 0 01-1.968.35 6.688 6.688 0 00-.17-.67 8.16 8.16 0 00-.625-1.53C27.534 28.705 26.644 28 25.49 28H14.51c-1.154 0-2.044.704-2.731 1.975a8.16 8.16 0 00-.625 1.53c-.093.313-.148.55-.17.67a1 1 0 01-1.968-.35 9.712 9.712 0 011.003-2.8C11.021 27.17 12.5 26 14.51 26z"
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
const MdProfile = withWrapper(Vector);
MdProfile.groupName = "Menu";
export default MdProfile;
