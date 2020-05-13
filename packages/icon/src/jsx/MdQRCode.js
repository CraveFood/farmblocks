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
      d="M13.75 26.25H17v-2.375a.875.875 0 00-.875-.875H13.75v3.25zm0 1.5V31h2.375a.875.875 0 00.875-.875V27.75h-3.25zM12.25 31v-8H9.875a.875.875 0 00-.875.875v.738a1 1 0 11-2 0v-.738A2.875 2.875 0 019.875 21h6.25A2.875 2.875 0 0119 23.875v6.25A2.875 2.875 0 0116.125 33h-6.25A2.875 2.875 0 017 30.125v-1.286a1 1 0 112 0v1.286c0 .483.392.875.875.875h2.375zM9.5 9a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-7zm0-2h7A2.5 2.5 0 0119 9.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 017 16.5v-7A2.5 2.5 0 019.5 7zm14 16a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-7zm0-2h7a2.5 2.5 0 012.5 2.5v7a2.5 2.5 0 01-2.5 2.5h-7a2.5 2.5 0 01-2.5-2.5v-7a2.5 2.5 0 012.5-2.5zm0-12a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-7zm0-2h7A2.5 2.5 0 0133 9.5v7a2.5 2.5 0 01-2.5 2.5h-7a2.5 2.5 0 01-2.5-2.5v-7A2.5 2.5 0 0123.5 7zm-12.3 4h3.6c.11 0 .2.09.2.2v3.6a.2.2 0 01-.2.2h-3.6a.2.2 0 01-.2-.2v-3.6c0-.11.09-.2.2-.2zm15 15h1.6c.11 0 .2.09.2.2v1.6a.2.2 0 01-.2.2h-1.6a.2.2 0 01-.2-.2v-1.6c0-.11.09-.2.2-.2zm-1.6-16h4.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6h-4.8a.6.6 0 01-.6-.6v-4.8a.6.6 0 01.6-.6z"
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
const MdQRCode = withWrapper(Vector);
MdQRCode.groupName = "Actions";
export default MdQRCode;
