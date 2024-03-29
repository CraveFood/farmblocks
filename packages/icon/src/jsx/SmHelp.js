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
      d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2ZM7.758 16.244l-1.414 1.414A7.975 7.975 0 0 0 12 20v-2a5.981 5.981 0 0 1-4.242-1.756ZM20 12h-2a5.981 5.981 0 0 1-1.757 4.243l1.414 1.414A7.975 7.975 0 0 0 20 12Zm-8-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-8 4h2c0-1.657.672-3.157 1.757-4.243L6.343 6.343A7.975 7.975 0 0 0 4 12Zm8-8v2c1.657 0 3.158.672 4.244 1.758l1.414-1.414A7.975 7.975 0 0 0 12 4Z"
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
const SmHelp = withWrapper(Vector);
SmHelp.groupName = "Actions";
export default SmHelp;
