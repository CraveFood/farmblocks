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
      d="M30.323 19H21a1 1 0 01-1-1v-7H8a1 1 0 00-1 1v13a2 2 0 002 2h2.2a3 3 0 015.733.002L17 27h8.584a3.001 3.001 0 015.732 0H33v-5.855a1 1 0 00-.493-.863L30.323 19zm-1.192-2l-2.095-5.364a1 1 0 00-.931-.636H22v6h7.131zM16.857 28.99a3.002 3.002 0 01-5.578.01H9a4 4 0 01-4-4V12a3 3 0 013-3h18.106a3 3 0 012.794 1.909l2.502 6.404 2.119 1.245A3 3 0 0135 21.145V28a1 1 0 01-1 1h-2.763a3.002 3.002 0 01-5.574 0H17c-.049 0-.096-.003-.143-.01zm-1.79-1.102a1 1 0 10-2.001 0 1 1 0 002 0zm14.383 0a1 1 0 10-2 0 1 1 0 002 0zM31 21.5a.5.5 0 111 0V23a.5.5 0 11-1 0v-1.5z"
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
const MdDeliveryByCarrier = withWrapper(Vector);
MdDeliveryByCarrier.groupName = "Delivery";
export default MdDeliveryByCarrier;
