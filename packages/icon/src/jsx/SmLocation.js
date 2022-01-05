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
      d="M12.069 2C15.996 2 19 4.828 19 8.799c0 3.36-1.197 6.507-3.18 9.356a21.667 21.667 0 0 1-2.162 2.638l-.317.323-.144.142-.257.244-.111.101-.186.163a1 1 0 0 1-1.286 0l-.186-.163-.234-.216c-.043-.04-.087-.084-.134-.129l-.144-.142-.317-.323a21.667 21.667 0 0 1-2.163-2.638C6.197 15.305 5 12.159 5 8.799c0-3.888 2.88-6.68 6.687-6.795L12.07 2Zm0 2h-.138C9.081 4 7 5.96 7 8.799c0 2.903 1.053 5.674 2.82 8.213.521.748 1.073 1.43 1.63 2.039l.333.356.217.221.217-.221a19.68 19.68 0 0 0 1.962-2.395C15.947 14.472 17 11.702 17 8.8c0-2.762-1.971-4.692-4.702-4.795L12.068 4ZM12 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
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
const SmLocation = withWrapper(Vector);
SmLocation.groupName = "Misc";
export default SmLocation;
