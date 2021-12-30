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
      d="M28 15a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V16a1 1 0 0 1 1-1h16Zm-12.5 2a.5.5 0 0 0-.5.5v13a.5.5 0 1 0 1 0v-13a.5.5 0 0 0-.5-.5Zm4.5 0a.5.5 0 0 0-.5.5v13a.5.5 0 1 0 1 0v-13a.5.5 0 0 0-.5-.5Zm4.5 0a.5.5 0 0 0-.5.5v13a.5.5 0 1 0 1 0v-13a.5.5 0 0 0-.5-.5Zm-4-12a1 1 0 0 1 1 1v2H30a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h9.5V6a1 1 0 0 1 1-1Z"
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
const MdTrashFilled = withWrapper(Vector);
MdTrashFilled.groupName = "Actions";
export default MdTrashFilled;
