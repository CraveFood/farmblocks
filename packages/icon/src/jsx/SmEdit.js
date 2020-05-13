import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M18.945 10.53L13.47 5.056l1.762-1.763a1 1 0 011.414 0l4.062 4.063a1 1 0 010 1.414l-1.762 1.762zm-1.414 1.415l-3.233 3.233a22.333 22.333 0 01-10.04 5.788 1 1 0 01-1.224-1.224 22.34 22.34 0 015.788-10.04l3.233-3.233 5.476 5.476z"
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
const SmEdit = withWrapper(Vector);
SmEdit.groupName = "Actions";
export default SmEdit;
