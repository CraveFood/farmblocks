import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M21.292 23c.345-.305.665-.64.953-1h-6.993c-.084.326-.148.66-.19 1h6.23Zm-1.416 1H15c0 .32.019.635.055.945.31.036.625.055.945.055a7.964 7.964 0 0 0 3.876-1Zm3.054-3c.185-.32.348-.654.488-1H16.07c-.185.32-.348.654-.488 1h7.348Zm.818-2c.084-.326.148-.66.19-1h-6.23c-.345.305-.665.64-.953 1h6.993ZM24 17c0-.32-.019-.635-.055-.945a7.964 7.964 0 0 0-4.82.945h4.875Zm-8.422 9.991A8.003 8.003 0 0 0 31 24a8.003 8.003 0 0 0-5.009-7.422c.006.14.009.28.009.422 0 5.523-4.477 10-10 10-.141 0-.282-.003-.422-.009Zm-2.224-.345C9.115 25.486 6 21.606 6 17c0-5.523 4.477-10 10-10 4.607 0 8.486 3.115 9.646 7.354C29.885 15.514 33 19.394 33 24c0 5.523-4.477 10-10 10-4.607 0-8.486-3.115-9.646-7.354Zm-.345-2.224c-.006-.14-.009-.28-.009-.422 0-5.523 4.477-10 10-10 .141 0 .282.003.422.009A8.003 8.003 0 0 0 8 17a8.003 8.003 0 0 0 5.009 7.422Z"
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
