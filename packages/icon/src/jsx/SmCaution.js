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
      d="M8.918 4.789a3.462 3.462 0 016.046-.212l.117.212 5.717 11.173a3.462 3.462 0 01-2.848 5.03l-.234.008H6.284a3.462 3.462 0 01-3.182-4.826l.1-.212L8.918 4.789zm3.62.217a1.462 1.462 0 00-1.77.571l-.07.123-5.716 11.173a1.462 1.462 0 001.16 2.12l.142.007h11.432a1.462 1.462 0 001.36-1.999l-.059-.128L13.301 5.7a1.462 1.462 0 00-.503-.56l-.133-.076-.128-.058zM12 15.502c.533 0 .938.371.994.871l.006.14a.973.973 0 01-1 .989c-.533 0-.938-.371-.994-.871L11 16.49a.973.973 0 011-.989zm.676-7.002c.37 0 .591.302.55.702l-.592 4.675c-.042.373-.29.625-.634.625-.345 0-.592-.252-.634-.625l-.592-4.675c-.041-.4.18-.702.551-.702h1.35z"
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
const SmCaution = withWrapper(Vector);
SmCaution.groupName = "Actions";
export default SmCaution;
