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
      d="M12 2.5a1 1 0 0 1 .993.883L13 3.5l.001 1.038c3.938.312 5.859 2.506 5.972 5.824.042 1.225-.165 2.51-.533 3.78l-.067.226-.132.414-.134.379.208.292.438.604.43.566.252.313.128.147.05.054.125.124c.34.382.369.98-.022 1.39-.16.17-.313.245-.504.305a3.228 3.228 0 0 1-.575.111l-.318.034-.38.03-.686.04-.95.04-.873.024-.95.019-.497.007a2 2 0 0 1-3.966 0l-.832-.013-1.16-.027-.697-.024-.58-.025-.473-.027-.411-.029-.183-.015-.318-.034a3.228 3.228 0 0 1-.575-.11 1.084 1.084 0 0 1-.504-.305 1.02 1.02 0 0 1-.022-1.391l.176-.178.223-.26.258-.32.213-.276.556-.747.201-.28-.13-.377-.132-.416-.067-.225c-.368-1.277-.575-2.566-.533-3.796C5.141 7.055 7.06 4.85 11 4.538V3.5a1 1 0 0 1 1-1Z"
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
const SmNotificationFilled = withWrapper(Vector);
SmNotificationFilled.groupName = "Actions";
export default SmNotificationFilled;
