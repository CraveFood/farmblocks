import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="4 4 32 32"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M18 17h1.985v-7a1 1 0 011-1h5.12a3 3 0 012.794 1.909l2.502 6.404 2.119 1.245A3 3 0 0135 21.145V28a1 1 0 01-1 1h-2.763a3.002 3.002 0 01-5.574 0H17c-.049 0-.096-.003-.143-.01a3.002 3.002 0 01-5.578.01H9a4 4 0 01-4-4v-6a2 2 0 012-2H8v-3a1 1 0 011-1h1v-3a1 1 0 011-1h6a1 1 0 011 1v7zm-2 0v-6h-4v2h1a1 1 0 011 1v3h2zm-6 0h2v-2h-2v2zm5.066 10.888a1 1 0 10-2 0 1 1 0 002 0zm14.384 0a1 1 0 10-2 0 1 1 0 002 0zM31 21.5V23a.5.5 0 101 0v-1.5a.5.5 0 10-1 0zM21 20v6.298a.5.5 0 101 0V20a.5.5 0 10-1 0z"
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
