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
      d="M19.5 8V6a1 1 0 0 1 2 0v2H30a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1v17a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V15h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h9.5ZM24 31h3V15H13v16h3V18a.5.5 0 1 1 1 0v13h2.5V18a.5.5 0 1 1 1 0v13H23V18a.5.5 0 1 1 1 0v13Zm5-18v-3H11v3h18Z"
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
const MdTrash = withWrapper(Vector);
MdTrash.groupName = "Actions";
export default MdTrash;
