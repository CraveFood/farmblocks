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
      d="M15.246 3.638a2.814 2.814 0 0 1 3.232 1.948l.048.182 1.151 4.996a2.814 2.814 0 0 1-.275 1.986l-.107.178-5.36 8.254a2.814 2.814 0 0 1-3.745.916l-.147-.089-6.183-4.015a2.814 2.814 0 0 1-.917-3.746l.09-.146 5.36-8.254a2.814 2.814 0 0 1 1.62-1.182l.201-.047 5.032-.98Zm-2.342 15.46-7.548-4.903-.646.996a.814.814 0 0 0 .157 1.065l.082.06 6.183 4.016a.814.814 0 0 0 1.065-.157l.06-.082.647-.996Zm3.673-12.88a.814.814 0 0 0-.831-.631l-.117.014-5.032.98a.814.814 0 0 0-.461.268l-.066.088-3.624 5.581 7.548 4.902 3.624-5.581a.814.814 0 0 0 .128-.518l-.018-.108-1.15-4.996Zm-2 2.042a1.5 1.5 0 1 1-1.635 2.516 1.5 1.5 0 0 1 1.634-2.516Z"
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
const SmTag = withWrapper(Vector);
SmTag.groupName = "Cart";
export default SmTag;
