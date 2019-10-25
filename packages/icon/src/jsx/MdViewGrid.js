import React from "react";
import PropTypes from "prop-types";

const MdViewGrid = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M13 19h6v-5h-6v5zm0 2v5h6v-5h-6zm14-2v-5h-6v5h6zm0 2h-6v5h6v-5zm-15 7a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H12z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdViewGrid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdViewGrid.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdViewGrid.groupName = "Misc";
export default MdViewGrid;
