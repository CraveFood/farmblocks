import React from "react";
import PropTypes from "prop-types";

const MdForward = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M23.394 16l-3.063-2.757a1 1 0 0 1 1.338-1.486l5 4.5a1 1 0 0 1 0 1.487l-5 4.5a1 1 0 1 1-1.338-1.487L23.395 18h-6.132C16 18 15 18.944 15 20.078V28a1 1 0 1 1-2 0v-7.922C13 17.812 14.92 16 17.263 16h6.13z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdForward.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdForward.groupName = "Actions";
export default MdForward;
