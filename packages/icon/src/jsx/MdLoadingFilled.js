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
      d="M36 20c0 8.836-7.164 16-16 16-8.837 0-16-7.163-16-16 0-8.836 7.164-16 16-16 8.835 0 16 7.165 16 16ZM19 8v6a1 1 0 0 0 2 0V8a1 1 0 0 0-2 0Zm2 24v-5a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0ZM8 21h6a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2Zm18-.5h6a.5.5 0 1 0 0-1h-6a.5.5 0 1 0 0 1Zm3.197 7.283-3.86-3.86a1 1 0 0 0-1.414 1.414l3.86 3.86a1 1 0 0 0 1.414-1.414Zm-12.87-12.87-4.11-4.11a1 1 0 0 0-1.414 1.414l4.11 4.11a1 1 0 0 0 1.414-1.414Zm-1.664 9.01-3.86 3.86a1 1 0 0 0 1.414 1.414l3.86-3.86a1 1 0 0 0-1.414-1.414Zm13.12-13.12-4.11 4.11a1 1 0 0 0 1.414 1.414l4.11-4.11a1 1 0 0 0-1.414-1.414Z"
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
