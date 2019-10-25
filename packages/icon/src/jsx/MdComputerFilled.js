import React from "react";
import PropTypes from "prop-types";

const MdComputerFilled = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M16 29v-2h-5.95A3.05 3.05 0 0 1 7 23.95V23h26v.95A3.05 3.05 0 0 1 29.95 27H25v2h1.5a1 1 0 0 1 0 2h-12a1 1 0 0 1 0-2H16zm-9-7V11.05A3.05 3.05 0 0 1 10.05 8h19.9A3.05 3.05 0 0 1 33 11.05V22H10.992v-6.5a.5.5 0 1 0-1 0V22H7z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdComputerFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdComputerFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdComputerFilled.groupName = "Misc";
export default MdComputerFilled;
