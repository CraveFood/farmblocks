import React from "react";
import PropTypes from "prop-types";

const MdCameraFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M27 12v-1a1 1 0 0 1 2 0v1h1.589a2.411 2.411 0 0 1 2.41 2.411v13.178A2.411 2.411 0 0 1 30.59 30H9.41A2.411 2.411 0 0 1 7 27.589V14.411A2.411 2.411 0 0 1 9.41 12H27zm-4 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0zm-14-4h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdCameraFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdCameraFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdCameraFilled.groupName = "Actions";
export default MdCameraFilled;
