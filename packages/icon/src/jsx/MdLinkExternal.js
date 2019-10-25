import React from "react";
import PropTypes from "prop-types";

const MdLinkExternal = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M23.586 15H15v10h10v-8.586l-4.293 4.293a1 1 0 0 1-1.414-1.414L23.586 15zM29 11h-5a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-5zM14 27a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H14z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdLinkExternal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdLinkExternal.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdLinkExternal.groupName = "Misc";
export default MdLinkExternal;
