import React from "react";
import PropTypes from "prop-types";

const MdList = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M17 25a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2H17zm0-6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2H17zm0-6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2H17zm-6 12a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2h-1zm0-6a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2h-1zm0-6a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2h-1z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdList.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdList.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdList.groupName = "Menu";
export default MdList;
