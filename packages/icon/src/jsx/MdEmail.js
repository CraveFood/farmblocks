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
      d="M10 14.22V27h20V14.22l-9.427 6.6a1 1 0 0 1-1.146 0L10 14.22ZM11.744 13 20 18.78 28.256 13H11.744ZM9 29a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H9Z"
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
const MdEmail = withWrapper(Vector);
MdEmail.groupName = "Misc";
export default MdEmail;
