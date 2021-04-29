import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="6 6 88 88"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M46.11 62.18v5.101a1 1 0 01-2 0v-5.525A23.32 23.32 0 0141 60.715v19.579a65.12 65.12 0 002.435-2.244 173.087 173.087 0 004.927-4.96 1.5 1.5 0 012.119-.056 200.249 200.249 0 004.83 4.4l.645.563c1.19 1.03 2.22 1.88 3.044 2.505V60.715a23.43 23.43 0 01-9 1.785c-1.325 0-2.625-.11-3.89-.32zM62 59.21v23.583c0 1.605-1.368 1.976-2.506 1.546-.439-.167-.949-.47-1.584-.917-1-.703-2.328-1.781-3.917-3.157l-.661-.576a186.902 186.902 0 01-3.828-3.461l-.32.33a176.007 176.007 0 01-3.67 3.654c-1.433 1.378-2.63 2.458-3.536 3.165-.583.456-1.052.766-1.47.941-1.119.471-2.508.053-2.508-1.525V59.21C31.114 55.112 26.5 47.595 26.5 39c0-12.978 10.521-23.5 23.5-23.5S73.5 26.022 73.5 39c0 8.595-4.614 16.112-11.5 20.21zM70.5 39c0-11.322-9.178-20.5-20.5-20.5S29.5 27.678 29.5 39 38.678 59.5 50 59.5 70.5 50.322 70.5 39zm-10 0c0-5.8-4.7-10.5-10.5-10.5-5.799 0-10.5 4.701-10.5 10.5S44.201 49.5 50 49.5c5.8 0 10.5-4.7 10.5-10.5zm3 0c0 7.456-6.044 13.5-13.5 13.5S36.5 46.456 36.5 39 42.544 25.5 50 25.5 63.5 31.544 63.5 39zm-20.208-2.346a1 1 0 01-1.888-.66 9.085 9.085 0 011.333-2.484 1 1 0 111.595 1.207 7.085 7.085 0 00-1.04 1.937zm2.487 8.06a1 1 0 01-1.19 1.608 9.095 9.095 0 01-3.65-6.438 1 1 0 111.99-.192 7.095 7.095 0 002.85 5.023zm-1.67 25.567a1 1 0 012 0v1a1 1 0 01-2 0v-1z"
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
const LgCertificate = withWrapper(Vector);
LgCertificate.groupName = "Misc";
export default LgCertificate;
