import React from "react";
import PropTypes from "prop-types";

const MdCamera = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M27 12v-1a1 1 0 0 1 2 0v1h1.589a2.411 2.411 0 0 1 2.41 2.411v13.178A2.411 2.411 0 0 1 30.59 30H9.41A2.411 2.411 0 0 1 7 27.589V14.411A2.411 2.411 0 0 1 9.41 12H27zm3.589 16a.411.411 0 0 0 .41-.411V14.411a.411.411 0 0 0-.41-.411H9.41a.411.411 0 0 0-.411.411v13.178c0 .227.184.411.41.411H30.59zM23 21a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm2 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm-14-4a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2h-3z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdCamera.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCamera.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCamera.groupName = "Actions";
export default MdCamera;
