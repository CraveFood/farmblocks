import React from "react";
import PropTypes from "prop-types";

const MdNewBid = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <g
      stroke={props.color}
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
  ariaLabel: PropTypes.string,
};
MdNewBid.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdNewBid.groupName = "States";
export default MdNewBid;
