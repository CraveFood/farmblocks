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
      d="M51.219 82.127a1.5 1.5 0 01-.99.373h-.458a1.5 1.5 0 01-.99-.373c-.172-.151-.48-.434-.902-.844a57.434 57.434 0 01-2.3-2.367 72.142 72.142 0 01-6.942-8.853C32.307 60.555 28.5 50.088 28.5 38.971c0-12.563 9.156-21.471 21.271-21.471h.458c12.115 0 21.271 8.908 21.271 21.471 0 11.117-3.807 21.584-10.137 31.092a72.142 72.142 0 01-6.941 8.853 57.434 57.434 0 01-2.3 2.367c-.424.41-.731.693-.903.844zM50 80.74l.229-.26v-.98h-.458v.98l.229.26zm.035-1.613a54.45 54.45 0 002.18-2.242 69.16 69.16 0 006.65-8.484c6.028-9.054 9.635-18.971 9.635-29.43 0-10.887-7.794-18.471-18.271-18.471h-.458C39.294 20.5 31.5 28.084 31.5 38.971c0 10.459 3.607 20.376 9.634 29.43a69.16 69.16 0 006.652 8.484A54.45 54.45 0 0050 79.16c.012-.01.023-.022.035-.034zM40.19 56.556a1 1 0 01-1.834.799 49.994 49.994 0 01-1.572-4.082 1 1 0 111.896-.636c.444 1.323.948 2.63 1.51 3.919zm9.12 14.468a1 1 0 11-1.533 1.284c-2.788-3.33-5.3-6.92-7.413-10.835a1 1 0 111.76-.95c2.043 3.787 4.48 7.269 7.186 10.5zM58.5 39a8.5 8.5 0 00-8.5-8.5 8.5 8.5 0 00-8.5 8.5 8.5 8.5 0 1017 0zm3 0c0 6.35-5.15 11.5-11.5 11.5-6.352 0-11.5-5.149-11.5-11.5 0-6.352 5.148-11.5 11.5-11.5 6.351 0 11.5 5.148 11.5 11.5z"
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
const LgLocation = withWrapper(Vector);
LgLocation.groupName = "Misc";
export default LgLocation;
