import React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M36 20c0 8.836-7.164 16-16 16-8.837 0-16-7.163-16-16 0-8.836 7.164-16 16-16 8.835 0 16 7.165 16 16zM19 8v6a1 1 0 002 0V8a1 1 0 00-2 0zm2 24v-5a1 1 0 00-2 0v5a1 1 0 002 0zM8 21h6a1 1 0 000-2H8a1 1 0 000 2zm18-.5h6a.5.5 0 100-1h-6a.5.5 0 100 1zm3.197 7.283l-3.86-3.86a1 1 0 00-1.414 1.414l3.86 3.86a1 1 0 001.414-1.414zm-12.87-12.87l-4.11-4.11a1 1 0 00-1.414 1.414l4.11 4.11a1 1 0 001.414-1.414zm-1.664 9.01l-3.86 3.86a1 1 0 001.414 1.414l3.86-3.86a1 1 0 00-1.414-1.414zm13.12-13.12l-4.11 4.11a1 1 0 001.414 1.414l4.11-4.11a1 1 0 00-1.414-1.414z"
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
const MdLoadingFilled = withWrapper(Vector);
MdLoadingFilled.groupName = "States";
export default MdLoadingFilled;
