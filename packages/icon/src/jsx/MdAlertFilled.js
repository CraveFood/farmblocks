import React from "react";
import PropTypes from "prop-types";

const MdAlertFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-13 4.019c-1.119 0-1.948.828-1.948 1.903v.044c0 1.074.83 1.903 1.948 1.903 1.119 0 1.948-.829 1.948-1.903v-.044c0-1.075-.83-1.903-1.948-1.903zM18.008 13.14l.962 8.416c.068.605.47.986 1.03.986s.962-.38 1.03-.986l.962-8.416c.067-.648-.292-1.14-.894-1.14h-2.195c-.603 0-.962.492-.895 1.14z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdAlertFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdAlertFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdAlertFilled.groupName = "States";
export default MdAlertFilled;
