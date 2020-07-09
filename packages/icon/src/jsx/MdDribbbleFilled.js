import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    height={size}
    viewBox="4 4 32 32"
    width={size}
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M20 7c7.179 0 13 5.821 13 13 0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7zm0 5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm1.211 9.119c.96 2.493 1.357 4.582 1.458 5.182a6.82 6.82 0 01-6.863-.9c.713-1.459 2.65-3.342 5.405-4.282zm5.536-.024a6.845 6.845 0 01-2.929 4.58c-.07-.416-.434-2.416-1.328-4.872 2.142-.343 4.023.218 4.257.292zm-6.554-2.266c.196.383.383.772.554 1.16-2.47.696-4.716 2.694-5.824 4.59a6.806 6.806 0 01-1.753-4.777c.3.006 3.61.048 7.023-.973zm5.096-3.14a6.8 6.8 0 011.543 4.257c-.225-.048-2.484-.506-4.758-.22-.185-.453-.36-.851-.6-1.342 2.526-1.032 3.671-2.5 3.815-2.695zm-8.194-1.863a43.6 43.6 0 012.533 3.952c-3.196.85-6.011.837-6.317.833a6.858 6.858 0 013.784-4.785zM24.53 14.9c-.123.175-1.152 1.558-3.582 2.468a36.474 36.474 0 00-2.55-4A6.816 6.816 0 0124.53 14.9z"
      fill={color}
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
const MdDribbbleFilled = withWrapper(Vector);
MdDribbbleFilled.groupName = "Social";
export default MdDribbbleFilled;
