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
      d="M26 24.221v10.684c0 .48-.295.925-.807 1.059-.28.073-.514.036-.761-.054-.236-.086-.495-.234-.815-.45-.486-.33-1.124-.829-1.888-1.465a88.217 88.217 0 01-1.946-1.68l-.009-.007a82.284 82.284 0 01-1.726 1.653c-.689.638-1.266 1.138-1.707 1.47-.296.222-.536.375-.762.467-.256.103-.503.146-.804.059-.51-.148-.775-.592-.775-1.052V24.221A10.99 10.99 0 019 15C9 8.925 13.925 4 20 4s11 4.925 11 11a10.99 10.99 0 01-5 9.221zm-10 1.03v7.867a38.896 38.896 0 00.965-.881 80.673 80.673 0 002.062-2.008 1 1 0 011.385-.036c.137.124.38.344.7.627a86.27 86.27 0 001.898 1.639c.364.303.696.572.99.8V25.25c-1.24.484-2.589.75-4 .75s-2.76-.266-4-.75zM29 15a9 9 0 10-18 0 9 9 0 0018 0zm-4.5 0a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm1 0a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
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
const MdCertificate = withWrapper(Vector);
MdCertificate.groupName = "Misc";
export default MdCertificate;
