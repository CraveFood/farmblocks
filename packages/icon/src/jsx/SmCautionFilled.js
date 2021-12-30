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
      d="M8.918 4.789a3.462 3.462 0 0 1 6.046-.212l.117.212 5.717 11.173a3.462 3.462 0 0 1-2.848 5.03l-.234.008H6.284a3.462 3.462 0 0 1-3.182-4.826l.1-.212L8.918 4.789ZM12 15.502c.533 0 .938.371.994.871l.006.14a.973.973 0 0 1-1 .989c-.533 0-.938-.371-.994-.871L11 16.49a.973.973 0 0 1 1-.989Zm.676-7.002c.37 0 .591.302.55.702l-.592 4.675c-.042.373-.29.625-.634.625-.345 0-.592-.252-.634-.625l-.592-4.675c-.041-.4.18-.702.551-.702h1.35Z"
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
const SmCautionFilled = withWrapper(Vector);
SmCautionFilled.groupName = "Actions";
export default SmCautionFilled;
