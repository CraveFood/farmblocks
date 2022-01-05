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
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-.354 10.594c.736 0 1.28.517 1.28 1.189v.028c0 .671-.544 1.189-1.28 1.189-.735 0-1.28-.518-1.28-1.19v-.027c0-.672.545-1.189 1.28-1.189ZM11.941 7C14.058 7 15.5 8.035 15.5 9.895v.028c0 1.776-1.295 2.504-2.899 2.812l-.044.251a.807.807 0 0 1-.793.685h-.118a.794.794 0 0 1-.793-.685l-.148-.951c-.073-.462.206-.784.676-.84 1.28-.152 1.869-.53 1.869-1.216v-.028c0-.628-.501-.992-1.354-.992-.632 0-1.177.18-1.705.558a1.166 1.166 0 0 1-.663.224c-.558 0-1.028-.447-1.028-.978 0-.266.116-.546.381-.756C9.661 7.392 10.647 7 11.941 7Z"
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
const SmQuestion = withWrapper(Vector);
SmQuestion.groupName = "Actions";
export default SmQuestion;
