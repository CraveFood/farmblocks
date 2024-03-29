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
      d="M22 26h-4 4Zm3.49 0c2.01 0 3.49 1.17 4.49 3.025a9.712 9.712 0 0 1 1.004 2.8A1 1 0 0 1 30 33H10a1 1 0 0 1-.984-1.176 9.712 9.712 0 0 1 1.003-2.8C11.021 27.172 12.5 26 14.51 26h10.98Zm-5.366-2 .002-2-.002 2ZM28 17.907C28 22.145 25.07 24 20.125 24 15.105 24 12 22.13 12 17.907v-5.76C12 7.92 15.13 6 20.123 6 25.041 6 28 7.904 28 12.147v5.76Z"
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
const MdProfileFilled = withWrapper(Vector);
MdProfileFilled.groupName = "Menu";
export default MdProfileFilled;
