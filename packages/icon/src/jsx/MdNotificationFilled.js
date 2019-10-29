import React from "react";
import PropTypes from "prop-types";

const MdNotificationFilled = React.forwardRef(
  ({ size, color, ...props }, ref) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      ref={ref}
      aria-hidden={!props["aria-label"]}
      {...props}
    >
      <path
        d="M23.881 30.97a4.002 4.002 0 0 1-7.762 0c-1.478-.023-2.828-.06-3.943-.11-1.098-.048-1.955-.108-2.535-.179a4.604 4.604 0 0 1-.802-.151 1.187 1.187 0 0 1-.55-.328 1.038 1.038 0 0 1 .064-1.5c.227-.203.703-.776 1.309-1.57l.184-.244a80.747 80.747 0 0 0 1.199-1.634 23.855 23.855 0 0 1-.604-1.848c-.56-1.974-.87-3.965-.8-5.85.191-5.127 3.155-8.418 9.4-8.734l-.042-2.808a1 1 0 0 1 2-.028l.04 2.804c6.19.34 9.13 3.618 9.32 8.711.07 1.881-.24 3.868-.8 5.838a23.759 23.759 0 0 1-.606 1.848l.156.221a78.97 78.97 0 0 0 1.236 1.708c.603.806 1.078 1.385 1.302 1.586.426.383.492 1.05.064 1.5-.168.177-.336.26-.55.328-.2.063-.458.11-.802.151-.58.071-1.437.131-2.535.18-1.115.049-2.465.086-3.943.11z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  ),
);
MdNotificationFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdNotificationFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdNotificationFilled.groupName = "Menu";
export default MdNotificationFilled;
