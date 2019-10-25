import React from "react";
import PropTypes from "prop-types";

const MdPayOnDelivery1 = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M21 9v7.018h4.5v-4.442a.5.5 0 1 1 1 0v4.442H31V9.043 9H21zm-2 0h-1.027a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2H33l.001.043v7.975a1 1 0 0 1-1 1h-1v9.062A2.92 2.92 0 0 1 28.079 30H7.92A2.92 2.92 0 0 1 5 27.08V12.92A2.92 2.92 0 0 1 7.92 10H19v-.957V9zm0 3H7.92a.92.92 0 0 0-.92.92v14.16c0 .508.412.92.92.92h20.159a.92.92 0 0 0 .921-.92v-9.062h-9a1 1 0 0 1-1-1V12zm-4.288 8.902v2.646c.931-.1 1.44-.566 1.44-1.265 0-.639-.32-1.032-1.44-1.38zm-1.148-2.02v-2.575c-.93.088-1.397.582-1.397 1.222 0 .611.277.99 1.397 1.352zm.581-4.959c.35 0 .626.276.626.625v.32a5.293 5.293 0 0 1 2.254.8c.232.13.435.35.435.698a.8.8 0 0 1-.814.8.837.837 0 0 1-.436-.132c-.509-.305-1.003-.523-1.498-.639v2.792c2.21.552 3.155 1.44 3.155 2.995 0 1.6-1.25 2.66-3.096 2.835v.383a.621.621 0 0 1-.626.625.633.633 0 0 1-.64-.625v-.412a6.284 6.284 0 0 1-2.98-1.134.798.798 0 0 1-.393-.698c0-.45.35-.8.8-.8.175 0 .35.058.48.16.683.494 1.352.83 2.152.974v-2.864c-2.123-.553-3.112-1.352-3.112-2.995 0-1.556 1.236-2.632 3.053-2.777v-.306c0-.349.291-.625.64-.625z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdPayOnDelivery1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdPayOnDelivery1.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdPayOnDelivery1.groupName = "Payment";
export default MdPayOnDelivery1;
