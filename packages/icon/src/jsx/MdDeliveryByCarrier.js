import React from "react";
import PropTypes from "prop-types";

const MdDeliveryByCarrier = React.forwardRef(({ size, ...props }, ref) => (
  <svg
    width={props.size}
    height={props.size}
    ref={ref}
    ariaHidden={!props.ariaLabel}
    {...props}
  >
    <path
      d="M30.323 19H21a1 1 0 0 1-1-1v-7H8a1 1 0 0 0-1 1v13a2 2 0 0 0 2 2h2.2a3 3 0 0 1 5.733.002L17 27h8.584a3.001 3.001 0 0 1 5.732 0H33v-5.855a1 1 0 0 0-.493-.863L30.323 19zm-1.192-2l-2.095-5.364a1 1 0 0 0-.931-.636H22v6h7.131zM16.857 28.99a3.002 3.002 0 0 1-5.578.01H9a4 4 0 0 1-4-4V12a3 3 0 0 1 3-3h18.106a3 3 0 0 1 2.794 1.909l2.502 6.404 2.119 1.245A3 3 0 0 1 35 21.145V28a1 1 0 0 1-1 1h-2.763a3.002 3.002 0 0 1-5.574 0H17c-.049 0-.096-.003-.143-.01zm-1.79-1.102a1 1 0 1 0-2.001 0 1 1 0 0 0 2 0zm14.383 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zM31 21.5a.5.5 0 1 1 1 0V23a.5.5 0 1 1-1 0v-1.5z"
      fill={props.color}
      fillRule="nonzero"
    />
  </svg>
));
MdDeliveryByCarrier.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
MdDeliveryByCarrier.defaultProps = {
  color: "currentColor",
  size: "1em",
};
MdDeliveryByCarrier.groupName = "Delivery";
export default MdDeliveryByCarrier;
