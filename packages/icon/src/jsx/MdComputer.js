import React from "react";
import PropTypes from "prop-types";

const MdComputer = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M11.992 22v-6.5a.5.5 0 1 1 1 0V22H31V11.05c0-.58-.47-1.05-1.05-1.05h-19.9C9.47 10 9 10.47 9 11.05V22h2.992zM31 23H9v.95c0 .58.47 1.05 1.05 1.05h19.9c.58 0 1.05-.47 1.05-1.05V23zm-13 6h5v-2h-5v2zm-2 0v-2h-5.95A3.05 3.05 0 0 1 7 23.95v-12.9A3.05 3.05 0 0 1 10.05 8h19.9A3.05 3.05 0 0 1 33 11.05v12.9A3.05 3.05 0 0 1 29.95 27H25v2h1.5a1 1 0 0 1 0 2h-12a1 1 0 0 1 0-2H16z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdComputer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdComputer.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdComputer.groupName = "Misc";
export default MdComputer;
