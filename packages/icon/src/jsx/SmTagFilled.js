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
      d="M14.58 20.186l-.645.996a2.814 2.814 0 01-3.745.916l-.147-.089-6.183-4.015a2.814 2.814 0 01-.917-3.746l.09-.146.646-.995 10.902 7.079zm.666-16.548a2.814 2.814 0 013.232 1.948l.048.182 1.151 4.996a2.814 2.814 0 01-.275 1.986l-.107.178-3.625 5.58L4.768 11.43l3.624-5.581a2.814 2.814 0 011.62-1.182l.202-.047 5.032-.98zm-.67 4.622a1.5 1.5 0 10-1.634 2.516 1.5 1.5 0 001.634-2.516z"
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
const SmTagFilled = withWrapper(Vector);
SmTagFilled.groupName = "Cart";
export default SmTagFilled;
