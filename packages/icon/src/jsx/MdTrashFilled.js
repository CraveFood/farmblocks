import React from "react";
import PropTypes from "prop-types";

const MdTrashFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M28 15a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V16a1 1 0 0 1 1-1h16zm-12.5 2a.5.5 0 0 0-.5.5v13a.5.5 0 1 0 1 0v-13a.5.5 0 0 0-.5-.5zm4.5 0a.5.5 0 0 0-.5.5v13a.5.5 0 1 0 1 0v-13a.5.5 0 0 0-.5-.5zm4.5 0a.5.5 0 0 0-.5.5v13a.5.5 0 1 0 1 0v-13a.5.5 0 0 0-.5-.5zm-4-12a1 1 0 0 1 1 1v2H30a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h9.5V6a1 1 0 0 1 1-1z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdTrashFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdTrashFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdTrashFilled.groupName = "Actions";
export default MdTrashFilled;
