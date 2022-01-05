import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M12 2.5a1 1 0 0 1 .993.883L13 3.5l.001 1.038c3.938.312 5.859 2.506 5.972 5.824.042 1.225-.165 2.51-.533 3.78-.067.231-.134.445-.199.64l-.134.379.208.292.438.604.43.566c.189.241.34.42.43.514l.125.124c.34.382.369.98-.022 1.39-.16.17-.313.245-.504.305a3.228 3.228 0 0 1-.575.111l-.318.034c-.291.026-.648.05-1.066.07l-.95.04-.873.024c-.458.011-.943.02-1.447.026a2 2 0 0 1-3.966 0l-.832-.013a93.918 93.918 0 0 1-1.857-.051l-.58-.025-.473-.027c-.147-.009-.284-.019-.411-.029l-.183-.015-.318-.034a3.228 3.228 0 0 1-.575-.11 1.084 1.084 0 0 1-.504-.305 1.02 1.02 0 0 1-.022-1.391l.176-.178.16-.183c.06-.073.13-.157.204-.25l.117-.148.213-.275.556-.747.201-.28-.13-.377-.132-.416-.067-.225c-.368-1.277-.575-2.566-.533-3.796C5.141 7.055 7.06 4.85 11 4.538V3.5a1 1 0 0 1 1-1Zm0 4c-3.512 0-4.887 1.406-4.974 3.954-.034.991.141 2.082.456 3.173.076.265.156.515.237.745l.118.32.099.246a1 1 0 0 1-.03.865l-.068.111-.535.745-.384.518.503.022.796.026c.7.02 1.484.034 2.31.041l1.01.006h.925c1.535-.004 2.989-.03 4.115-.073l.516-.023-.176-.24-.46-.643-.302-.434a1 1 0 0 1-.135-.848l.052-.14.01-.021.198-.523c.081-.23.162-.478.238-.741.314-1.085.49-2.17.455-3.155C16.888 7.898 15.514 6.5 12 6.5Z"
      fill={color}
      fillRule="evenodd"
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
const SmNotification = withWrapper(Vector);
SmNotification.groupName = "Actions";
export default SmNotification;
