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
      d="m12.055 6.469 5.476 5.476-7.286 7.286a1 1 0 0 1-.325.217l-.124.042-5.539 1.476a1 1 0 0 1-1.247-1.113l.024-.111 1.476-5.538a1 1 0 0 1 .173-.35l.087-.099 7.285-7.286Zm3.176-3.176a1 1 0 0 1 1.32-.084l.094.084 4.062 4.062a1 1 0 0 1 .083 1.32l-.083.094-1.762 1.762-5.476-5.476 1.762-1.762Z"
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
const SmEditFilled = withWrapper(Vector);
SmEditFilled.groupName = "Actions";
export default SmEditFilled;
