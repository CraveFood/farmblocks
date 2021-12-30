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
      d="M18 8a1 1 0 0 1 .993.883L19 9v11a2 2 0 0 1-1.85 1.995L17 22H7a2 2 0 0 1-1.995-1.85L5 20V9a1 1 0 0 1 .883-.993L6 8h12Zm-8 4a1 1 0 0 0-.993.883L9 13v5l.007.117a1 1 0 0 0 1.986 0L11 18v-5l-.007-.117A1 1 0 0 0 10 12Zm4 0a1 1 0 0 0-.993.883L13 13v5l.007.117a1 1 0 0 0 1.986 0L15 18v-5l-.007-.117A1 1 0 0 0 14 12ZM12 1a1 1 0 0 1 .993.883L13 2v1h6a1 1 0 0 1 .993.883L20 4v2a1 1 0 0 1-.883.993L19 7H5a1 1 0 0 1-.993-.883L4 6V4a1 1 0 0 1 .883-.993L5 3h6V2a1 1 0 0 1 1-1Z"
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
const SmTrashFilled = withWrapper(Vector);
SmTrashFilled.groupName = "Actions";
export default SmTrashFilled;
