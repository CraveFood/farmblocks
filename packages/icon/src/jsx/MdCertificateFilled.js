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
      d="M26 26.536v8.37c0 .478-.295.924-.807 1.058-.28.073-.514.036-.761-.054-.236-.086-.495-.234-.815-.45-.486-.33-1.124-.829-1.888-1.465a88.217 88.217 0 01-1.946-1.68l-.009-.007a82.284 82.284 0 01-1.726 1.653c-.689.638-1.266 1.138-1.707 1.47-.296.222-.536.375-.762.467-.256.103-.503.146-.804.059-.51-.148-.775-.592-.775-1.052v-8.37A12.945 12.945 0 0020 28c2.164 0 4.205-.529 6-1.464zM31 15c0 6.076-4.924 11-11 11S9 21.076 9 15C9 8.925 13.925 4 20 4s11 4.925 11 11zm-6 0a5 5 0 10-10 0 5 5 0 0010 0z"
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
const MdCertificateFilled = withWrapper(Vector);
MdCertificateFilled.groupName = "Misc";
export default MdCertificateFilled;
