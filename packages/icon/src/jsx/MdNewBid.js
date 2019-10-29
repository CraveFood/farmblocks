import React from "react";
import PropTypes from "prop-types";

const MdNewBid = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <g
      stroke={color}
      strokeWidth={2}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8l3 24M13.942 21.672c10.648-6.52 4.264 9.613 17.927-5.048.317-.339.015-.68-.45-.572C16.962 19.429 24.759 5.425 13 11.587" />
    </g>
  </svg>
));
MdNewBid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
MdNewBid.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdNewBid.groupName = "States";
export default MdNewBid;
