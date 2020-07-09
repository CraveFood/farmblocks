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
      d="M70.5 32.5H61a1.5 1.5 0 01-1.5-1.5v-9.5h-30v57h41v-46zm-8-8.683V29.5h6.226L62.5 23.817zM26.5 20a1.5 1.5 0 011.5-1.5h32.543a1.5 1.5 0 011.011.392L73.011 29.35a1.5 1.5 0 01.489 1.108V80a1.5 1.5 0 01-1.5 1.5H28a1.5 1.5 0 01-1.5-1.5V20zm30.74 31.713a1.5 1.5 0 012.137 2.105l-9.557 9.709a6.569 6.569 0 01-9.387 0c-2.577-2.618-2.577-6.852 0-9.47L54.556 39.71a4.035 4.035 0 015.763 0 4.135 4.135 0 010 5.788L46.264 59.775a1.5 1.5 0 01-2.138-2.104L58.18 43.394a1.135 1.135 0 000-1.58 1.035 1.035 0 00-1.486 0L42.571 56.163a3.766 3.766 0 000 5.26 3.57 3.57 0 005.11 0l9.558-9.709z"
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
const LgFile = withWrapper(Vector);
LgFile.groupName = "Docs";
export default LgFile;
