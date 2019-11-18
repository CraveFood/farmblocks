import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M48.63 29.51c-3.098.024-5.984.128-7.222.311-1.814.27-3.49.804-4.931 1.582.511-.01 1.017-.007 1.51.012 1.406.052 2.603.224 3.546.553a1 1 0 01.611 1.283c-.267.743-.6 1.484-.98 2.192l.167-.077c.398-.184.81-.381 1.235-.59a78.244 78.244 0 003.903-2.064 1 1 0 011.342.335l1.23 1.952.309.488.685 1.087.954-1.533.016-.025c.5-.802.918-1.471 1.23-1.964a1 1 0 011.342-.334l.31.175a78.057 78.057 0 003.59 1.892 54.347 54.347 0 001.4.667c-.379-.704-.709-1.44-.975-2.177a1 1 0 01.54-1.255c.927-.405 2.309-.573 4.08-.582.351-.001.711.003 1.076.014-1.461-.808-3.154-1.362-4.96-1.63-1.203-.179-3.96-.282-6.958-.31l.017.095a1.5 1.5 0 11-2.95.543c-.04-.22-.08-.434-.116-.64zm-.465-2.995a17.516 17.516 0 01-.103-3.176c.155-2.704 1.066-5.155 2.753-6.886a1.5 1.5 0 112.148 2.093c-1.132 1.163-1.789 2.931-1.905 4.964-.055.96-.02 1.832.13 2.999 3.334.022 6.485.137 7.89.345 3.297.49 6.323 1.793 8.592 3.82 11.126 4.495 17.712 13.322 17.712 24.977 0 17.425-14.838 28.51-35.442 28.51-20.601 0-35.44-11.086-35.44-28.51 0-11.724 6.664-20.587 17.914-25.059 2.248-1.989 5.237-3.245 8.554-3.738 1.307-.194 4.126-.307 7.197-.34zm18.947 7.174a1.003 1.003 0 01-.23 0 42.069 42.069 0 00-1.306-.125 36.71 36.71 0 00-3.045-.126c-.925.005-1.722.06-2.34.162.554 1.226 1.291 2.394 2.1 3.296.669.746-.054 1.903-1.018 1.63-.919-.261-2.065-.718-3.398-1.334a56.334 56.334 0 01-1.282-.613 80.022 80.022 0 01-3.171-1.657l-.72 1.152-.015.025c-.394.631-.815 1.308-1.235 1.985l-.406.654-.154.248a1 1 0 01-1.696.007l-1.538-2.44-.308-.487-.725-1.15a85.787 85.787 0 01-3.176 1.655c-.439.216-.866.42-1.28.61-1.333.615-2.478 1.07-3.397 1.331-.965.274-1.687-.884-1.017-1.63.802-.892 1.535-2.057 2.09-3.282-.56-.098-1.21-.16-1.932-.187a29.922 29.922 0 00-3.575.106 32.562 32.562 0 00-1.16.12 1 1 0 01-.282-.003C23.123 37.742 17.5 45.437 17.5 55.65c0 15.547 13.337 25.51 32.44 25.51 19.105 0 32.442-9.963 32.442-25.51 0-10.17-5.576-17.844-15.27-21.96zM22.84 63.24a1 1 0 111.848-.766c3.277 7.908 11.799 12.851 25.253 12.851a1 1 0 010 2c-14.218 0-23.493-5.38-27.1-14.085zm-1.236-11.067a1 1 0 111.975.316 20.04 20.04 0 00-.244 3.16c0 .586.029 1.172.087 1.756a1 1 0 11-1.99.198 19.694 19.694 0 01-.097-1.953c0-1.203.09-2.363.269-3.477z"
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
const LgTomato = withWrapper(Vector);
LgTomato.groupName = "Subcategories";
export default LgTomato;
