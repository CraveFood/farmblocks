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
      d="M31.331 26.376c-.119.086-.23.186-.331.301V23c0-.552-.224-1.052-.586-1.414A1.994 1.994 0 0029 21c-.552 0-1.052.224-1.414.586A1.994 1.994 0 0027 23v3.677a1.994 1.994 0 00-1.367-.673 1.994 1.994 0 00-1.45.49 1.994 1.994 0 00-.679 1.373c-.034.51.127 1.034.49 1.45l1.962 2.241A12.944 12.944 0 0120 33c-7.18 0-13-5.82-13-13S12.82 7 20 7s13 5.82 13 13a12.94 12.94 0 01-1.669 6.376zm-10.447-2.701v-3.283c1.39.433 1.786.92 1.786 1.713 0 .867-.631 1.444-1.786 1.57zm-1.424-8.983v3.193c-1.39-.45-1.733-.92-1.733-1.677 0-.794.578-1.407 1.733-1.516zm1.497-2.182a.77.77 0 00-.777-.775.785.785 0 00-.793.775v.38c-2.254.18-3.788 1.514-3.788 3.445 0 2.038 1.227 3.029 3.86 3.715v3.553c-.992-.18-1.822-.596-2.67-1.209a.976.976 0 00-.594-.198.978.978 0 00-.993.992c0 .379.18.668.488.866a7.795 7.795 0 003.697 1.407v.51c0 .434.36.776.793.776a.77.77 0 00.777-.775v-.475c2.29-.217 3.84-1.533 3.84-3.517 0-1.93-1.172-3.03-3.913-3.715V14.8c.614.144 1.227.415 1.858.793.181.11.361.162.541.162a.992.992 0 001.01-.99c0-.434-.252-.705-.54-.867a6.566 6.566 0 00-2.796-.992v-.397zM30 29.34l1.747-1.998a1 1 0 011.506 1.318l-3.5 4a1 1 0 01-1.506 0l-3.5-4a1 1 0 011.506-1.318L28 29.34V23a1 1 0 012 0v6.339z"
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
const MdFee2Filled = withWrapper(Vector);
MdFee2Filled.groupName = "Payment";
export default MdFee2Filled;
