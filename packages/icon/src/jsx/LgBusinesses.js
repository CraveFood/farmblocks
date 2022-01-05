import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M58 30h3.5a1.5 1.5 0 0 1 1.5 1.5V50h15.5a1.5 1.5 0 0 1 1.5 1.5V75a1.5 1.5 0 0 1-3 0V53H63v6h8a1 1 0 0 1 0 2h-8v5h8a1 1 0 0 1 0 2h-8v5h8a1 1 0 0 1 0 2h-8v3a1.5 1.5 0 0 1-3 0V33H23v35a1.5 1.5 0 0 1-3 0V31.5c0-.085.007-.169.02-.25A1.51 1.51 0 0 1 20 31v-8.5a1.5 1.5 0 0 1 1.5-1.5h25a1.5 1.5 0 0 1 1.5 1.5V30h8v-5a1 1 0 0 1 2 0v5Zm-35-4h18a1 1 0 0 1 0 2H23v2h22v-6H23v2Zm9 45h9.008a.503.503 0 0 1-.008-.09V66H29v5h1v-2a1 1 0 0 1 2 0v2Zm9.992 0H54v-5H42v4.91c0 .03-.003.06-.008.09ZM32 58h9v-5H29v5h1v-2a1 1 0 0 1 2 0v2Zm10 0h12v-5H42v5ZM32 45h9v-5H29v5h1v-2a1 1 0 0 1 2 0v2Zm10 0h12v-5H42v5ZM23 76a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 3 0v3Zm5-38h27a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H28a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Zm0 13h27a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H28a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Zm0 13h27a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H28a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
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
const LgBusinesses = withWrapper(Vector);
LgBusinesses.groupName = "Business";
export default LgBusinesses;
