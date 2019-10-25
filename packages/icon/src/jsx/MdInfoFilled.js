import React from "react";
import PropTypes from "prop-types";

const MdInfoFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-13-4.15c1.119 0 1.948-.828 1.948-1.903v-.044c0-1.075-.83-1.903-1.948-1.903-1.119 0-1.948.828-1.948 1.903v.044c0 1.075.83 1.903 1.948 1.903zm-1.992 10.878c-.067.65.292 1.14.895 1.14h2.195c.602 0 .961-.49.894-1.14l-.962-8.415c-.068-.605-.47-.986-1.03-.986s-.962.38-1.03.986l-.962 8.415z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdInfoFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdInfoFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdInfoFilled.groupName = "States";
export default MdInfoFilled;
