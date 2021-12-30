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
      d="M31.556 4A4.444 4.444 0 0 1 36 8.444v23.112A4.444 4.444 0 0 1 31.556 36H8.444A4.444 4.444 0 0 1 4 31.556V8.444A4.444 4.444 0 0 1 8.444 4h23.112Zm-2.167 3H10.61A3.611 3.611 0 0 0 7 10.611V29.39A3.611 3.611 0 0 0 10.611 33H29.39A3.611 3.611 0 0 0 33 29.389V10.61A3.611 3.611 0 0 0 29.389 7Z"
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
