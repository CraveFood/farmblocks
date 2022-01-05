import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13Zm-15.446-3 6.775-6.266a1 1 0 1 0-1.358-1.468l-8.65 8c-.668.618-.23 1.734.679 1.734h10a1 1 0 1 0 0-2h-7.446Zm4.736 6-7.302 6.24a1 1 0 1 0 1.3 1.52l9.362-8c.706-.603.28-1.76-.65-1.76H14.93a1 1 0 0 0 0 2h7.36Z"
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
const MdLostConnectionFilled = withWrapper(Vector);
MdLostConnectionFilled.groupName = "States";
export default MdLostConnectionFilled;
