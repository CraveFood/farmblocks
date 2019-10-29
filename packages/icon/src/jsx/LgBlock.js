import React from "react";
import PropTypes from "prop-types";

const LgBlock = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M70.751 22.506a9.5 9.5 0 0 1-13.08 13.36l13.08-13.36zm-2.1-2.143L55.484 33.81A9.459 9.459 0 0 1 53.5 28a9.5 9.5 0 0 1 9.5-9.5c2.117 0 4.072.692 5.651 1.863zm-13.617 17.27A12.449 12.449 0 0 0 63 40.5c6.903 0 12.5-5.597 12.5-12.5 0-6.904-5.596-12.5-12.5-12.5S50.5 21.096 50.5 28c0 3.279 1.262 6.263 3.328 8.492a1.493 1.493 0 0 0 1.206 1.14zm-26.996 4.53a63.326 63.326 0 0 1-1.193-.175 1 1 0 1 1 .31-1.976c8.184 1.282 13.477.535 18.482-2.597a1 1 0 0 1 1.06 1.695c-4.53 2.835-9.278 3.878-15.697 3.376v11.131C31 60.83 36.314 63.999 46.294 64 56.086 64 61 60.92 61 53.617v-5.69a1.5 1.5 0 0 1 3 0v5.69c0 9.33-6.465 13.381-17.701 13.383h-.005C34.872 66.998 28 62.9 28 53.617V42.5c0-.116.013-.228.038-.337zM33.773 71h24.454c4.035 0 7.046 2.199 9.12 5.742a18.994 18.994 0 0 1 1.655 3.733c.248.765.4 1.37.47 1.74a1.5 1.5 0 1 1-2.945.57 7.804 7.804 0 0 0-.08-.352c-.078-.309-.177-.657-.299-1.033a16.04 16.04 0 0 0-1.39-3.142C63.174 75.55 61.05 74 58.228 74H33.772c-2.823 0-4.947 1.551-6.531 4.258a16.04 16.04 0 0 0-1.39 3.142c-.122.376-.221.724-.298 1.033a7.804 7.804 0 0 0-.081.352 1.5 1.5 0 1 1-2.946-.57c.072-.37.223-.975.47-1.74a18.994 18.994 0 0 1 1.656-3.733C26.727 73.2 29.738 71 33.773 71zm12.518-4l.006-3-.006 3zM31 37.5a1.5 1.5 0 0 1-3 0v-1.99c0-8.418 5.75-12.717 15.37-13.41a1.5 1.5 0 1 1 .215 2.993C35.359 25.685 31 28.944 31 35.51V37.5zm10 11.672c-1.38 0-2.5-.12-2.5-1.5a2.5 2.5 0 0 1 5 0c0 1.38-1.119 1.5-2.5 1.5zm10 0c-1.381 0-2.5-.12-2.5-1.5a2.5 2.5 0 0 1 5 0c0 1.38-1.119 1.5-2.5 1.5zM79 28c0 8.84-7.164 16-16 16s-16-7.16-16-16c0-8.836 7.164-16 16-16s16 7.164 16 16z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgBlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
LgBlock.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgBlock.groupName = "Actions";
export default LgBlock;