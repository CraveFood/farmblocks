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
      d="M28 15a1 1 0 011 1v16a1 1 0 01-1 1H12a1 1 0 01-1-1V16a1 1 0 011-1h16zm-12.5 2a.5.5 0 00-.5.5v13a.5.5 0 101 0v-13a.5.5 0 00-.5-.5zm4.5 0a.5.5 0 00-.5.5v13a.5.5 0 101 0v-13a.5.5 0 00-.5-.5zm4.5 0a.5.5 0 00-.5.5v13a.5.5 0 101 0v-13a.5.5 0 00-.5-.5zm-4-12a1 1 0 011 1v2H30a1 1 0 011 1v4a1 1 0 01-1 1H10a1 1 0 01-1-1V9a1 1 0 011-1h9.5V6a1 1 0 011-1z"
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
