import React from "react";
import PropTypes from "prop-types";

const MdLink = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M12.732 19.627a1 1 0 1 1 1.415 1.414l-2.121 2.122a3.498 3.498 0 0 0 0 4.949 3.498 3.498 0 0 0 4.949 0l4.95-4.95a3.502 3.502 0 0 0 0-4.95 1 1 0 1 1 1.414-1.414 5.502 5.502 0 0 1 0 7.779l-4.95 4.949a5.498 5.498 0 0 1-7.777 0 5.498 5.498 0 0 1 0-7.777l2.12-2.122zm15.026.883a1 1 0 1 1-1.414-1.414l2.121-2.122a3.498 3.498 0 0 0 0-4.949 3.498 3.498 0 0 0-4.95 0l-4.949 4.95a3.502 3.502 0 0 0 0 4.95 1 1 0 1 1-1.414 1.414 5.502 5.502 0 0 1 0-7.779l4.95-4.949a5.498 5.498 0 0 1 7.777 0 5.498 5.498 0 0 1 0 7.777l-2.12 2.122z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdLink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdLink.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdLink.groupName = "Misc";
export default MdLink;
