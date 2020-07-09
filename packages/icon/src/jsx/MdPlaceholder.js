import React from "react";
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
      d="M31.556 4A4.444 4.444 0 0136 8.444v23.112A4.444 4.444 0 0131.556 36H8.444A4.444 4.444 0 014 31.556V8.444A4.444 4.444 0 018.444 4h23.112zm-2.167 3H10.61A3.611 3.611 0 007 10.611V29.39A3.611 3.611 0 0010.611 33H29.39A3.611 3.611 0 0033 29.389V10.61A3.611 3.611 0 0029.389 7z"
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
const MdPlaceholder = withWrapper(Vector);
MdPlaceholder.groupName = "Placeholder";
export default MdPlaceholder;
