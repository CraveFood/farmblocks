import React from "react";
import PropTypes from "prop-types";

const MdLinkFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M33 20c0 7.18-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7c7.179 0 13 5.821 13 13zm-18.417-.453L13.1 21.029a4.143 4.143 0 0 0 0 5.86 4.143 4.143 0 0 0 5.86 0l3.459-3.457a4.146 4.146 0 0 0 0-5.862 1 1 0 1 0-1.415 1.414 2.146 2.146 0 0 1 0 3.033l-3.458 3.458a2.143 2.143 0 1 1-3.032-3.031l1.482-1.483a1 1 0 1 0-1.414-1.414zm10.925 1.043l1.482-1.483a4.143 4.143 0 0 0 0-5.86 4.143 4.143 0 0 0-5.86 0l-3.46 3.458a4.146 4.146 0 0 0 0 5.862 1 1 0 1 0 1.415-1.414 2.146 2.146 0 0 1 0-3.034l3.459-3.457a2.143 2.143 0 1 1 3.032 3.031l-1.483 1.483a1 1 0 1 0 1.415 1.414z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdLinkFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdLinkFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdLinkFilled.groupName = "Misc";
export default MdLinkFilled;
