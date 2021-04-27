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
      d="M31 20c0-6.074-4.926-11-11-11-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11zm2 0c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-13-4.15c-1.119 0-1.948-.828-1.948-1.903v-.044c0-1.075.83-1.903 1.948-1.903 1.119 0 1.948.828 1.948 1.903v.044c0 1.075-.83 1.903-1.948 1.903zm-1.992 10.878l.962-8.415c.068-.605.47-.986 1.03-.986s.962.38 1.03.986l.962 8.415c.067.65-.292 1.14-.894 1.14h-2.195c-.603 0-.962-.49-.895-1.14z"
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
const MdInfo = withWrapper(Vector);
MdInfo.groupName = "States";
export default MdInfo;
