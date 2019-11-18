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
      d="M24.078 11.75l4.172 4.171 1.336-1.336-4.171-4.171-1.337 1.337zm-1.414 1.415L11.927 23.903l-1.516 5.686 5.687-1.516 10.738-10.738-4.172-4.17zm9.043 2.127L17.322 29.677a1 1 0 01-.45.26l-7.615 2.029a1 1 0 01-1.223-1.224l2.03-7.614a1 1 0 01.26-.45L24.707 8.292a1 1 0 011.414 0l5.585 5.586a1 1 0 010 1.414z"
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
const MdEdit = withWrapper(Vector);
MdEdit.groupName = "Actions";
export default MdEdit;
