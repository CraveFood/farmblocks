import React from "react";
import PropTypes from "prop-types";

const MdViewList = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M28 25a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2h16zm0-6a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2h16zm0-6a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2h16z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdViewList.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdViewList.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdViewList.groupName = "Misc";
export default MdViewList;
