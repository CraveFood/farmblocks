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
      d="M16.104 9.143a5 5 0 0 1-6.869 7.023l6.87-7.023Zm-1.447-1.38L7.824 14.75a5 5 0 0 1 6.833-6.987ZM19 12a7 7 0 1 0-14 0 7 7 0 0 0 14 0Z"
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
const SmBlock = withWrapper(Vector);
SmBlock.groupName = "Actions";
export default SmBlock;
