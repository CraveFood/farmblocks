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
      d="M24.987 16.401l-4.67 2.132-.006.003a.998.998 0 01-.843-.006l-9.305-4.33 1.256 13.107 7.831 4.21v-9.276a.75.75 0 111.5 0v9.18l7.831-4.12.903-9.406a5.937 5.937 0 01-4.497-1.494zm-.924-7.84a5.96 5.96 0 117.484 8.768L30.534 27.89a1 1 0 01-.534.924l-9.625 5.063a1 1 0 01-.966-.004L9.992 28.81a1 1 0 01-.526-.917l-1.458-15.21a.992.992 0 01.599-1.047L19.5 6.977a.997.997 0 01.782-.003l3.78 1.587zm-.85 1.812L19.9 8.983l-8.446 3.612 8.447 3.93 3.811-1.74A5.933 5.933 0 0123 11.959c0-.55.074-1.081.213-1.586zm7.44-.905l-2.359 3.753-.987-1.35a1 1 0 10-1.614 1.18l1.857 2.54a1 1 0 001.653-.059l3.144-5a1 1 0 10-1.694-1.064z"
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
const MdDelivered = withWrapper(Vector);
MdDelivered.groupName = "States";
export default MdDelivered;
