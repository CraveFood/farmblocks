import React from "react";
import PropTypes from "prop-types";

const MdMore = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdMore.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdMore.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdMore.groupName = "Actions";
export default MdMore;
