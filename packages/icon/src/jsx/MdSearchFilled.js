import React from "react";
import PropTypes from "prop-types";

const MdSearchFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M21.036 20.834a4.194 4.194 0 1 1 .132-.144 1.016 1.016 0 0 0-.132.144zm2.135.526a6.194 6.194 0 1 0-1.366 1.462l4.367 4.367a1 1 0 0 0 1.415-1.415L23.17 21.36zM33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdSearchFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdSearchFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdSearchFilled.groupName = "Actions";
export default MdSearchFilled;
