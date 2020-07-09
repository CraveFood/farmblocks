import * as React from "react";
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
      d="M31 20c0-6.074-4.926-11-11-11-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11zm2 0c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-13-8c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm5.29 3.69a6.8 6.8 0 011.542 4.256c-.225-.048-2.484-.506-4.758-.22-.185-.453-.36-.851-.6-1.342 2.526-1.032 3.671-2.5 3.815-2.695zm-.76-.791c-.123.175-1.152 1.558-3.582 2.468a36.474 36.474 0 00-2.55-4A6.816 6.816 0 0124.53 14.9zm-7.435-1.073a43.6 43.6 0 012.533 3.952c-3.196.85-6.011.837-6.317.833a6.858 6.858 0 013.784-4.785zm-3.928 6.184c0-.07.001-.139.003-.208.3.006 3.61.048 7.023-.973.196.383.383.772.554 1.16-2.47.696-4.716 2.694-5.824 4.59a6.806 6.806 0 01-1.756-4.569zm2.639 5.391c.713-1.459 2.65-3.342 5.405-4.282.96 2.493 1.357 4.582 1.458 5.182a6.82 6.82 0 01-6.863-.9zm8.012.274c-.07-.416-.434-2.416-1.328-4.872 2.142-.343 4.023.218 4.257.292a6.845 6.845 0 01-2.929 4.58z"
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
const MdDribbble = withWrapper(Vector);
MdDribbble.groupName = "Social";
export default MdDribbble;
