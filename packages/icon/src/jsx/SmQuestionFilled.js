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
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm-.354 12.594c-.69 0-1.211.454-1.274 1.065l-.006.152c0 .671.545 1.189 1.28 1.189.69 0 1.21-.455 1.273-1.065l.006-.152c0-.672-.543-1.189-1.279-1.189ZM11.941 7c-1.294 0-2.28.392-3.06 1.007a.959.959 0 0 0-.381.756c0 .53.47.978 1.028.978.25 0 .486-.098.663-.224a2.816 2.816 0 0 1 1.705-.558c.8 0 1.29.32 1.348.878l.006.142c0 .686-.59 1.064-1.869 1.216-.431.052-.701.326-.687.728l.01.112.149.951a.794.794 0 0 0 .68.677l.113.008h.118a.803.803 0 0 0 .771-.587l.022-.098.044-.251c1.545-.297 2.803-.983 2.894-2.619l.005-.22C15.5 8.035 14.058 7 11.94 7Z"
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
const SmQuestionFilled = withWrapper(Vector);
SmQuestionFilled.groupName = "Actions";
export default SmQuestionFilled;
