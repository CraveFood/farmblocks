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
      d="M30 23v-6a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v6H8a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2Zm-2-11h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1Zm0 6v13a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1V18h16Zm-12 7h7a.5.5 0 1 0 0-1h-7a.5.5 0 1 0 0 1Zm0 3h7a.5.5 0 1 0 0-1h-7a.5.5 0 1 0 0 1Zm0-6h4.4a.5.5 0 1 0 0-1H16a.5.5 0 1 0 0 1Z"
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
const MdPrintFilled = withWrapper(Vector);
MdPrintFilled.groupName = "Actions";
export default MdPrintFilled;
