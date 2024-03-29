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
      d="M13 21.878v-2.733C13 18.33 12.47 18 11.052 18 9.6 18 9 18.357 9 19.145v2.733C9 22.656 9.588 23 11.054 23c1.43 0 1.946-.318 1.946-1.122ZM15 19v3c0 .038-.002.076-.006.113-.11 2-1.635 2.887-3.94 2.887-2.334 0-3.93-.883-4.047-2.882A1.01 1.01 0 0 1 7 22v-3c0-.048.003-.095.01-.142C7.15 16.891 8.748 16 11.052 16c2.278 0 3.808.894 3.939 2.865.006.044.009.09.009.135Zm-6.12 7h4.24c1.076 0 1.865.6 2.377 1.51.274.487.421.958.486 1.307a1 1 0 0 1-1.966.366 2.483 2.483 0 0 0-.263-.692c-.191-.34-.39-.491-.633-.491H8.879c-.243 0-.442.15-.633.49a2.483 2.483 0 0 0-.263.693 1 1 0 0 1-1.966-.366c.065-.349.212-.82.486-1.308C7.015 26.6 7.804 26 8.88 26ZM32 27V11H9v3a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1h25a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H19a1 1 0 0 1 0-2h13Zm-20.947-2 .001-2v2Zm0-9-.001 2v-2Zm6.947.25a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H18Zm0 3a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H18Zm0 3a.75.75 0 1 1 0-1.5h10a.75.75 0 1 1 0 1.5H18Z"
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
const MdDriversLicense = withWrapper(Vector);
MdDriversLicense.groupName = "Docs";
export default MdDriversLicense;
