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
      d="M15.582 21h7.348c.185-.32.348-.654.488-1H16.07c-.185.32-.348.654-.488 1zm-.33 1c-.084.326-.148.66-.19 1h6.23c.345-.305.665-.64.953-1h-6.993zm1.503-3h6.993c.084-.326.148-.66.19-1h-6.23c-.345.305-.665.64-.953 1zM24 17c0-.32-.019-.635-.055-.945a7.964 7.964 0 00-4.82.945h4.875zm-4.124 7H15c0 .32.019.635.055.945.31.036.625.055.945.055a7.964 7.964 0 003.876-1zm-6.522 2.646C9.115 25.486 6 21.606 6 17c0-5.523 4.477-10 10-10 4.607 0 8.486 3.115 9.646 7.354C29.885 15.514 33 19.394 33 24c0 5.523-4.477 10-10 10-4.607 0-8.486-3.115-9.646-7.354z"
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
const MdMergeFilled = withWrapper(Vector);
MdMergeFilled.groupName = "Actions";
export default MdMergeFilled;
