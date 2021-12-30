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
      d="M13 19.808V19c0-.068.007-.135.02-.2a2.266 2.266 0 0 1-.02-.351V16c0-.068.007-.135.02-.2a2.266 2.266 0 0 1-.02-.351V13c0-.068.007-.135.02-.2a2.266 2.266 0 0 1-.02-.3c0-2.148 2.974-3.5 6.5-3.5s6.5 1.352 6.5 3.5c0 .102-.007.202-.02.3a.999.999 0 0 1 .016.11c1.178-.585 2.775-.91 4.504-.91 3.526 0 6.5 1.352 6.5 3.5 0 .102-.007.202-.02.3.013.065.02.132.02.2V18.5c0 .102-.007.202-.02.3.013.065.02.132.02.2V21.5c0 .102-.007.202-.02.3.013.065.02.132.02.2V24.5c0 2.148-2.974 3.5-6.5 3.5-1.728 0-3.322-.324-4.5-.908v.357c0 2.148-2.974 3.5-6.5 3.5s-6.5-1.352-6.5-3.5v-.086a13.3 13.3 0 0 1-.783.854c-2.494 2.493-5.552 3.64-7.071 2.121l-1.732-1.731c-.048-.049-.09-.1-.127-.155a2.266 2.266 0 0 1-.226-.199c-1.52-1.52-.373-4.577 2.121-7.071 2.494-2.494 5.552-3.64 7.071-2.121.072.072.138.147.199.226.054.037.106.079.155.127l.393.394Zm0 2.871a.35.35 0 0 0-.076-.119l-.252-.252c-.42 1.245-1.319 2.602-2.54 3.824-1.222 1.221-2.579 2.12-3.824 2.54l.252.252c.433.433 2.44-.32 4.243-2.121 1.267-1.268 2.015-2.636 2.197-3.487v-.637Zm13-4.587v.357c0 .613 1.951 1.5 4.5 1.5s4.5-.887 4.5-1.5v-.357c-1.178.584-2.772.908-4.5.908-1.728 0-3.322-.324-4.5-.908Zm-2 .357v-.357c-1.178.584-2.772.908-4.5.908-1.728 0-3.322-.324-4.5-.908v.357c0 .613 1.951 1.5 4.5 1.5s4.5-.887 4.5-1.5Zm-9-3.357v.357c0 .613 1.951 1.5 4.5 1.5s4.5-.887 4.5-1.5v-.357c-1.178.584-2.772.908-4.5.908-1.728 0-3.322-.324-4.5-.908Zm0 12v.357c0 .613 1.951 1.5 4.5 1.5s4.5-.887 4.5-1.5v-.357c-1.178.584-2.772.908-4.5.908-1.728 0-3.322-.324-4.5-.908Zm9-2.643v-.357c-1.178.584-2.772.908-4.5.908-1.728 0-3.322-.324-4.5-.908v.357c0 .613 1.951 1.5 4.5 1.5s4.5-.887 4.5-1.5Zm2 0c0 .613 1.951 1.5 4.5 1.5s4.5-.887 4.5-1.5v-.357c-1.178.584-2.772.908-4.5.908-1.728 0-3.322-.324-4.5-.908v.357Zm-2-3v-.357c-1.178.584-2.772.908-4.5.908-1.728 0-3.322-.324-4.5-.908v.357c0 .613 1.951 1.5 4.5 1.5s4.5-.887 4.5-1.5Zm2 0c0 .613 1.951 1.5 4.5 1.5s4.5-.887 4.5-1.5v-.357c-1.178.584-2.772.908-4.5.908-1.728 0-3.322-.324-4.5-.908v.357Z"
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
const MdFee1Filled = withWrapper(Vector);
MdFee1Filled.groupName = "Payment";
export default MdFee1Filled;
