import React from "react";
import PropTypes from "prop-types";

const LgFridge = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M47.66 25c.068-2.081.584-4.16 1.5-6.066.343-.718.667-1.234 1.114-1.682.916-.917 2.272-1.33 3.54-1.118a13.34 13.34 0 0 0-.925-1.917 5.88 5.88 0 0 0-.387-.577c-.05-.065-.073-.09-.063-.08a1.5 1.5 0 0 1-.11-1.997L54.379 9h-7.456l-.842 16h1.58zm2.002 0h6.174c-.277-2.358-.662-4.4-1.132-6.147-.236-.3-.55-.539-.904-.665a2.096 2.096 0 0 0-2.11.477c-.255.255-.472.6-.727 1.134A13.205 13.205 0 0 0 49.662 25zm-5.171 3H24.915A2.915 2.915 0 0 0 22 30.915v22.17A2.915 2.915 0 0 0 24.915 56h9.873A5.252 5.252 0 0 1 34 53.224V41.44a1 1 0 0 1 2 0v11.784c0 1.17.613 2.196 1.534 2.776h38.551A2.915 2.915 0 0 0 79 53.085v-22.17A2.915 2.915 0 0 0 76.085 28H44.491zm-1.414-3l.925-17.579A1.5 1.5 0 0 1 45.5 6h12c1.258 0 1.957 1.455 1.171 2.437l-3.287 4.11.077.126c.564.94 1.116 2.153 1.622 3.673.778 2.333 1.387 5.2 1.773 8.654h17.229A5.915 5.915 0 0 1 82 30.915v22.17A5.915 5.915 0 0 1 76.085 59h-51.17A5.915 5.915 0 0 1 19 53.085v-22.17A5.915 5.915 0 0 1 24.915 25h18.162zm-3.888 38A3.234 3.234 0 0 0 36 66.234v5.485a1 1 0 0 1-2 0v-5.485c0-1.22.418-2.344 1.118-3.234H24.28A2.28 2.28 0 0 0 22 65.279V82.5a1.5 1.5 0 0 1-3 0V65.279A5.28 5.28 0 0 1 24.279 60h52.442A5.28 5.28 0 0 1 82 65.279V92.5a1.5 1.5 0 0 1-3 0V65.279A2.28 2.28 0 0 0 76.721 63H39.189zM22 92.5a1.5 1.5 0 0 1-3 0v-4.902a1.5 1.5 0 0 1 3 0V92.5zm12-60a1 1 0 0 1 2 0v4.651a1 1 0 0 1-2 0V32.5zM34 75a1 1 0 0 1 2 0v17a1 1 0 0 1-2 0V75zm9.5-41a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-.5-.5zm0-2a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-5 0v-15a2.5 2.5 0 0 1 2.5-2.5zM73 71a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-11 2a1 1 0 1 0-2.001.001A1 1 0 0 0 64 73zm2 0a3 3 0 1 1-6.001-.001A3 3 0 0 1 66 73z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
LgFridge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
LgFridge.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgFridge.groupName = "Categories";
export default LgFridge;
