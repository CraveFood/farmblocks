import React from "react";
import PropTypes from "prop-types";

const MdDataFilled = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M8 32a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2H8zm23-5V11h-1v16h-8V16h-1v11h-7v-6h-1v6H7v-7a1 1 0 0 1 1-1h7v-4a1 1 0 0 1 1-1h7v-4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17h-2z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
MdDataFilled.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdDataFilled.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdDataFilled.groupName = "Misc";
export default MdDataFilled;
