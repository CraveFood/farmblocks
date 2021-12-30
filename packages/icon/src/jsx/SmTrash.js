import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M12 1a1 1 0 0 1 .993.883L13 2v1h6a1 1 0 0 1 .993.883L20 4v4a1 1 0 0 1-.883.993L19 9v11a2 2 0 0 1-1.85 1.995L17 22H7a2 2 0 0 1-1.995-1.85L5 20V9a1 1 0 0 1-.993-.883L4 8V4a1 1 0 0 1 .883-.993L5 3h6V2a1 1 0 0 1 1-1Zm5 8H7v11h2v-7a1 1 0 0 1 1.993-.117L11 13v7h2v-7a1 1 0 0 1 1.993-.117L15 13v7h2V9Zm1-4H6v2h12V5Z"
      fill={color}
      fillRule="evenodd"
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
const SmTrash = withWrapper(Vector);
SmTrash.groupName = "Actions";
export default SmTrash;
