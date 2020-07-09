import React from "react";
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
      d="M32.648 23.018H27c-.552 0-1.052.224-1.414.586A1.994 1.994 0 0025 25.018v6.986A12.96 12.96 0 0120 33c-7.18 0-13-5.82-13-13S12.82 7 20 7s13 5.82 13 13c0 1.04-.122 2.05-.352 3.018zm-11.764.657v-3.283c1.39.433 1.786.92 1.786 1.713 0 .867-.631 1.444-1.786 1.57zm-1.424-8.983v3.193c-1.39-.45-1.733-.92-1.733-1.677 0-.794.578-1.407 1.733-1.516zm1.497-2.182a.77.77 0 00-.777-.775.785.785 0 00-.793.775v.38c-2.254.18-3.788 1.514-3.788 3.445 0 2.038 1.227 3.029 3.86 3.715v3.553c-.992-.18-1.822-.596-2.67-1.209a.976.976 0 00-.594-.198.978.978 0 00-.993.992c0 .379.18.668.488.866a7.795 7.795 0 003.697 1.407v.51c0 .434.36.776.793.776a.77.77 0 00.777-.775v-.475c2.29-.217 3.84-1.533 3.84-3.517 0-1.93-1.172-3.03-3.913-3.715V14.8c.614.144 1.227.415 1.858.793.181.11.361.162.541.162a.992.992 0 001.01-.99c0-.434-.252-.705-.54-.867a6.566 6.566 0 00-2.796-.992v-.397zM31 33.018V27a.5.5 0 10-1 0v6.018h-3a1 1 0 01-1-1v-7a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1h-6zM33 28h2.444a.5.5 0 100-1H33a.5.5 0 100 1z"
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
const MdPayOnDelivery2Filled = withWrapper(Vector);
MdPayOnDelivery2Filled.groupName = "Payment";
export default MdPayOnDelivery2Filled;
