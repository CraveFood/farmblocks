import React from "react";
import PropTypes from "prop-types";

const MdNotification = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M23.881 30.97a4.002 4.002 0 0 1-7.762 0c-1.478-.023-2.828-.06-3.943-.11-1.098-.048-1.955-.108-2.535-.179a4.604 4.604 0 0 1-.802-.151 1.187 1.187 0 0 1-.55-.328 1.038 1.038 0 0 1 .064-1.5c.227-.203.703-.776 1.309-1.57l.184-.244a80.747 80.747 0 0 0 1.199-1.634 23.855 23.855 0 0 1-.604-1.848c-.56-1.974-.87-3.965-.8-5.85.191-5.127 3.155-8.418 9.4-8.734l-.042-2.808a1 1 0 0 1 2-.028l.04 2.804c6.19.34 9.13 3.618 9.32 8.711.07 1.881-.24 3.868-.8 5.838a23.759 23.759 0 0 1-.606 1.848l.156.221a78.97 78.97 0 0 0 1.236 1.708c.603.806 1.078 1.385 1.302 1.586.426.383.492 1.05.064 1.5-.168.177-.336.26-.55.328-.2.063-.458.11-.802.151-.58.071-1.437.131-2.535.18-1.115.049-2.465.086-3.943.11zm-5.617.024a2 2 0 0 0 3.472 0 261.7 261.7 0 0 1-3.472 0zm1.79-20.197c-5.834 0-8.252 2.484-8.415 6.834-.061 1.647.219 3.44.726 5.23.161.57.334 1.097.507 1.567.102.278.18.471.22.567a1 1 0 0 1-.1.97 82.69 82.69 0 0 1-1.549 2.127l-.191.253c-.12.156-.233.304-.342.443.39.027.845.052 1.355.075C14.27 28.95 17.07 29 20 29c2.93 0 5.729-.049 7.735-.137.515-.023.973-.048 1.367-.076a44.471 44.471 0 0 1-.558-.74 80.913 80.913 0 0 1-1.542-2.164 1 1 0 0 1-.094-.962c.041-.096.119-.289.22-.566.173-.468.346-.994.507-1.563.507-1.784.787-3.573.725-5.216-.159-4.246-2.48-6.71-8.05-6.812a1.002 1.002 0 0 1-.256.033z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdNotification.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdNotification.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdNotification.groupName = "Menu";
export default MdNotification;
