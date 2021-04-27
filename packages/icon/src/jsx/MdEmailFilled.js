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
      d="M9 29a1 1 0 01-1-1V12a1 1 0 011-1h22a1 1 0 011 1v16a1 1 0 01-1 1H9zm11-10.22l-9.427-6.6a1 1 0 10-1.146 1.64l10 7a1 1 0 001.146 0l10-7a1 1 0 10-1.146-1.64L20 18.78z"
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
const MdEmailFilled = withWrapper(Vector);
MdEmailFilled.groupName = "Misc";
export default MdEmailFilled;
