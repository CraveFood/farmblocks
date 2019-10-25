import React from "react";
import PropTypes from "prop-types";

const LgQRCode = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M16 28.5a1.5 1.5 0 0 1-3 0v-8.764C13 16.033 15.89 13 19.492 13H28.5a1.5 1.5 0 0 1 0 3h-9.008C17.58 16 16 17.658 16 19.736V28.5zm0 43v8.764C16 82.342 17.58 84 19.492 84H28.5a1.5 1.5 0 0 1 0 3h-9.008C15.89 87 13 83.967 13 80.264V71.5a1.5 1.5 0 0 1 3 0zm68-43v-8.764C84 17.658 82.42 16 80.508 16H71.5a1.5 1.5 0 0 1 0-3h9.008C84.11 13 87 16.033 87 19.736V28.5a1.5 1.5 0 0 1-3 0zm0 43a1.5 1.5 0 0 1 3 0v8.764C87 83.967 84.11 87 80.508 87H71.5a1.5 1.5 0 0 1 0-3h9.008C82.42 84 84 82.342 84 80.264V71.5zM26.5 25a1.5 1.5 0 0 0-1.5 1.5v17a1.5 1.5 0 0 0 1.5 1.5h17a1.5 1.5 0 0 0 1.5-1.5v-17a1.5 1.5 0 0 0-1.5-1.5h-17zm0-3h17a4.5 4.5 0 0 1 4.5 4.5v17a4.5 4.5 0 0 1-4.5 4.5h-17a4.5 4.5 0 0 1-4.5-4.5v-17a4.5 4.5 0 0 1 4.5-4.5zm30 33a1.5 1.5 0 0 0-1.5 1.5v17a1.5 1.5 0 0 0 1.5 1.5h17a1.5 1.5 0 0 0 1.5-1.5v-17a1.5 1.5 0 0 0-1.5-1.5h-17zm0-3h17a4.5 4.5 0 0 1 4.5 4.5v17a4.5 4.5 0 0 1-4.5 4.5h-17a4.5 4.5 0 0 1-4.5-4.5v-17a4.5 4.5 0 0 1 4.5-4.5zm14.987-27a1.5 1.5 0 0 1 0-3h1.877A4.636 4.636 0 0 1 78 26.636v16.728A4.636 4.636 0 0 1 73.364 48H56.636A4.636 4.636 0 0 1 52 43.364v-2.63a1.5 1.5 0 0 1 3 0v2.63c0 .903.733 1.636 1.636 1.636h16.728c.903 0 1.636-.733 1.636-1.636V26.636c0-.903-.733-1.636-1.636-1.636h-1.877zM55 29.716a1.5 1.5 0 0 1-3 0v-3.08A4.636 4.636 0 0 1 56.636 22h6.887a1.5 1.5 0 0 1 0 3h-6.887c-.903 0-1.636.733-1.636 1.636v3.08zM30 30v10h10V30H30zm-.5-2h11a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5v-11a1.5 1.5 0 0 1 1.5-1.5zM60 41a1 1 0 0 1-2 0V29.522A1.51 1.51 0 0 1 59.5 28h11c.838 0 1.5.69 1.5 1.522V38a1 1 0 0 1-2 0v-8H60v11zm0 19v10h10V60H60zm-.5-2h11a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 0 1-1.5-1.5v-11a1.5 1.5 0 0 1 1.5-1.5zm4.5 5h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-19 7.847a1.5 1.5 0 1 1 3 0v2.517A4.636 4.636 0 0 1 43.364 78H26.636A4.636 4.636 0 0 1 22 73.364v-2.517a1.5 1.5 0 1 1 3 0v2.517c0 .903.733 1.636 1.636 1.636h16.728c.903 0 1.636-.733 1.636-1.636v-2.517zm-20-8.16a1.5 1.5 0 0 1-3 0v-6.05A4.636 4.636 0 0 1 26.636 52h3.656a1.5 1.5 0 0 1 0 3h-3.656c-.903 0-1.636.733-1.636 1.636v6.05zM37.5 55a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7zm0-3h7a3.5 3.5 0 0 1 3.5 3.5v7a3.5 3.5 0 0 1-3.5 3.5h-7a3.5 3.5 0 0 1-3.5-3.5v-7a3.5 3.5 0 0 1 3.5-3.5z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgQRCode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgQRCode.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgQRCode.groupName = "Actions";
export default LgQRCode;
