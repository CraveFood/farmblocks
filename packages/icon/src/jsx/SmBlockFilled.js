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
      d="M22 12c0 5.524-4.477 10-10 10S2 17.524 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10zm-5.896-2.857a5 5 0 01-6.869 7.023l6.87-7.023zm-1.447-1.38L7.824 14.75a5 5 0 016.833-6.987zM19 12a7 7 0 10-14 0 7 7 0 0014 0z"
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
const SmBlockFilled = withWrapper(Vector);
SmBlockFilled.groupName = "Actions";
export default SmBlockFilled;
