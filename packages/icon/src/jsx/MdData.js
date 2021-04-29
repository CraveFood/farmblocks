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
      d="M25 24h6V11h-6v13zm0 1v2a1 1 0 01-2 0v-2h-6v2a1 1 0 01-2 0v-2H9v2a1 1 0 01-2 0v-7a1 1 0 011-1h7v-4a1 1 0 011-1h7v-4a1 1 0 011-1h8a1 1 0 011 1v17a1 1 0 01-2 0v-2h-6zm-2-1v-8h-6v8h6zm-8 0v-3H9v3h6zm-7 8a1 1 0 010-2h24a1 1 0 010 2H8z"
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
const MdData = withWrapper(Vector);
MdData.groupName = "Misc";
export default MdData;
