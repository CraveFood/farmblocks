import React from "react";
import PropTypes from "prop-types";

const LgReadytoServe = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M33.935 45.397a86.106 86.106 0 0 1 4.09 8.647c3.37 8.28 5.318 16.6 5.108 24.423a41.05 41.05 0 0 1-.013.41l43.94-2.621c-.086-6.961-1.815-14.103-4.66-21.042a71.267 71.267 0 0 0-3.215-6.808 52.816 52.816 0 0 0-1.052-1.862 23.784 23.784 0 0 0-.383-.627 1.5 1.5 0 0 1-.228-.979c.606-5.38-.423-10.86-2.52-16.07A39.3 39.3 0 0 0 73.15 24.9c-.15-.278-.292-.532-.425-.762l-42.1-1.98c.14.359.27.75.395 1.174 1.087 3.715 1.82 10.179 2.08 20.056l29.914.286a1 1 0 0 1-.02 2l-29.06-.278zm-4.717-15.51l-.073.718c-.325 3.135-.718 6.027-1.452 10.947-1.304 8.732-1.638 11.264-1.869 15.03-.302 4.918-.24 8.127.039 9.972.042.28.08.479.11.606l14.173 10.52c.065-7.148-1.776-14.83-4.9-22.505a83.123 83.123 0 0 0-3.384-7.294 63.594 63.594 0 0 0-1.109-2.027 29.15 29.15 0 0 0-.407-.693 1.5 1.5 0 0 1-.222-.751c-.138-6.108-.453-10.902-.906-14.523zM27.1 30.926c-1.299 4.388-3.258 9.244-6 14.53-1.333 2.568-2.5 5.369-3.511 8.366-1.905 5.649-3.177 11.718-3.93 17.79a99.508 99.508 0 0 0-.518 5.276l10.846-9.455c-.035-.168-.07-.36-.103-.581-.302-2.004-.367-5.345-.057-10.393.236-3.848.573-6.403 1.887-15.202.689-4.614 1.075-7.428 1.386-10.331zm-10.466 45.57a39.447 39.447 0 0 1 18.823.195L25.17 69.055l-8.535 7.442zm25.026 5.474a1.473 1.473 0 0 1-.888-.196 15.46 15.46 0 0 0-.995-.47 30.236 30.236 0 0 0-3.076-1.142c-7.412-2.324-15.85-2.5-24.664.885A1.5 1.5 0 0 1 10 79.62a70.855 70.855 0 0 1 .109-2.329c.115-1.827.301-3.86.573-6.05.777-6.257 2.089-12.518 4.065-18.377 1.059-3.137 2.284-6.078 3.69-8.79 3.326-6.41 5.448-12.13 6.607-17.09.618-2.646.867-4.604.909-5.828a1.5 1.5 0 0 1 1.42-2.154l46.294 2.178a1.5 1.5 0 0 1 1.187.681c.196.302.523.85.937 1.616a42.285 42.285 0 0 1 1.994 4.27c2.201 5.471 3.32 11.245 2.772 17.006.047.078.1.165.155.259.337.566.71 1.224 1.112 1.967a74.252 74.252 0 0 1 3.351 7.097c3.179 7.75 5.032 15.766 4.879 23.622a1.5 1.5 0 0 1-1.41 1.469L41.66 81.97zm26.417-36.247a1 1 0 0 1 .02-2l5.556.053a1 1 0 0 1-.019 2l-5.557-.053zm6.885 3.529a1 1 0 1 1 1.573-1.236c4.262 5.424 7.355 14.836 8.167 23.42a1 1 0 0 1-.943 1.093c-2.378.125-4.92.264-7.602.416a3234.245 3234.245 0 0 0-27.168 1.674l-.473.03a1 1 0 0 1-1.06-.89c-.677-6.22-1.738-11.441-3.077-15.743-.842-2.702-1.739-4.872-2.63-6.557-.307-.58-.59-1.057-.84-1.436a5.877 5.877 0 0 0-.28-.396 1 1 0 0 1 1.551-1.262c.287.352.753 1.057 1.336 2.158.95 1.796 1.895 4.08 2.772 6.898 1.309 4.205 2.355 9.239 3.049 15.17a2335.977 2335.977 0 0 1 5.764-.373 3236.22 3236.22 0 0 1 20.943-1.27c2.293-.13 4.484-.25 6.558-.36-.92-7.948-3.813-16.467-7.64-21.336z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
LgReadytoServe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
LgReadytoServe.defaultProps = {
  color: "currentColor",
  size: "1em",
};
LgReadytoServe.groupName = "Categories";
export default LgReadytoServe;
