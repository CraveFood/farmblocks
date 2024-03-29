import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M18 17h1.985v-7a1 1 0 0 1 1-1h5.12a3 3 0 0 1 2.794 1.909l2.502 6.404 2.119 1.245A3 3 0 0 1 35 21.145V28a1 1 0 0 1-1 1h-2.763a3.002 3.002 0 0 1-5.574 0H17c-.049 0-.096-.003-.143-.01a3.002 3.002 0 0 1-5.578.01H9a4 4 0 0 1-4-4v-6a2 2 0 0 1 2-2H8v-3a1 1 0 0 1 1-1h1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v7Zm-2 0v-6h-4v2h1a1 1 0 0 1 1 1v3h2Zm-6 0h2v-2h-2v2Zm5.066 10.888a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm14.384 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM31 21.5V23a.5.5 0 1 0 1 0v-1.5a.5.5 0 1 0-1 0ZM21 20v6.298a.5.5 0 1 0 1 0V20a.5.5 0 1 0-1 0Z"
      fill={color}
      fillRule="nonzero"
    />
  </svg>
));
Vector.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  "aria-label": PropTypes.string,
};
Vector.defaultProps = {
  color: "currentColor",
  size: "1em",
};
const MdDeliveryByFarmFilled = withWrapper(Vector);
MdDeliveryByFarmFilled.groupName = "Delivery";
export default MdDeliveryByFarmFilled;
