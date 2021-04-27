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
      d="M12.069 2C15.996 2 19 4.828 19 8.799c0 3.36-1.197 6.507-3.18 9.356a21.667 21.667 0 01-2.162 2.638l-.317.323-.144.142-.257.244-.111.101-.186.163a1 1 0 01-1.286 0l-.186-.163-.234-.216c-.043-.04-.087-.084-.134-.129l-.144-.142-.317-.323a21.667 21.667 0 01-2.163-2.638C6.197 15.305 5 12.159 5 8.799c0-3.888 2.88-6.68 6.687-6.795L12.07 2zM12 6a3 3 0 100 6 3 3 0 000-6z"
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
const SmLocationFilled = withWrapper(Vector);
SmLocationFilled.groupName = "Misc";
export default SmLocationFilled;
