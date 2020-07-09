import React from "react";
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
      d="M21.292 23c.345-.305.665-.64.953-1h-6.993c-.084.326-.148.66-.19 1h6.23zm-1.416 1H15c0 .32.019.635.055.945.31.036.625.055.945.055a7.964 7.964 0 003.876-1zm3.054-3c.185-.32.348-.654.488-1H16.07c-.185.32-.348.654-.488 1h7.348zm.818-2c.084-.326.148-.66.19-1h-6.23c-.345.305-.665.64-.953 1h6.993zM24 17c0-.32-.019-.635-.055-.945a7.964 7.964 0 00-4.82.945h4.875zm-8.422 9.991A8.003 8.003 0 0031 24a8.003 8.003 0 00-5.009-7.422c.006.14.009.28.009.422 0 5.523-4.477 10-10 10-.141 0-.282-.003-.422-.009zm-2.224-.345C9.115 25.486 6 21.606 6 17c0-5.523 4.477-10 10-10 4.607 0 8.486 3.115 9.646 7.354C29.885 15.514 33 19.394 33 24c0 5.523-4.477 10-10 10-4.607 0-8.486-3.115-9.646-7.354zm-.345-2.224c-.006-.14-.009-.28-.009-.422 0-5.523 4.477-10 10-10 .141 0 .282.003.422.009A8.003 8.003 0 008 17a8.003 8.003 0 005.009 7.422z"
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
const MdMerge = withWrapper(Vector);
MdMerge.groupName = "Actions";
export default MdMerge;
