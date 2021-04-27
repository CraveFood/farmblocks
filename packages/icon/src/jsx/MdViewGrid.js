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
      d="M13 19h6v-5h-6v5zm0 2v5h6v-5h-6zm14-2v-5h-6v5h6zm0 2h-6v5h6v-5zm-15 7a1 1 0 01-1-1V13a1 1 0 011-1h16a1 1 0 011 1v14a1 1 0 01-1 1H12z"
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
const MdViewGrid = withWrapper(Vector);
MdViewGrid.groupName = "Misc";
export default MdViewGrid;
