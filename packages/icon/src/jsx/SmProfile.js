import * as React from "react";
import PropTypes from "prop-types";
import { withWrapper } from "../Icon";

const Vector = React.forwardRef(({ size, color, ...props }, ref) => (
  <svg
    width={size}
    height={size}
    viewBox="2 2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    aria-hidden={!props["aria-label"]}
    {...props}
  >
    <path
      d="M15.617 16c1.918 0 3.207 1.016 3.881 2.61.38.897.502 1.768.502 2.39a1 1 0 01-1.993.117l-.013-.256a4.95 4.95 0 00-.037-.346 4.539 4.539 0 00-.3-1.126c-.36-.848-.922-1.327-1.85-1.383l-.19-.006H8.383l-.19.006c-.928.056-1.49.535-1.85 1.383-.147.35-.245.737-.3 1.126l-.03.247-.007.099-.013.256A1 1 0 014 21c0-.622.123-1.493.502-2.39.646-1.528 1.857-2.524 3.644-2.605L8.383 16h7.234zM18 9.5c0 .047-.003.094-.01.14-.162 2.998-2.387 4.36-5.902 4.36-3.47 0-5.782-1.297-6.06-4.126l-.021-.257L6 9.5v-3l.01-.147C6.186 3.367 8.527 2 12.089 2c3.422 0 5.621 1.29 5.885 4.124l.025.304L18 6.5v3zM12.088 4c-2.652 0-4 .782-4.084 2.539L8 6.717v2.566l.004.178C8.088 11.218 9.436 12 12.088 12c2.595 0 3.831-.75 3.908-2.535L16 9.283V6.717C16 4.8 14.77 4 12.088 4z"
      fill={color}
      fillRule="evenodd"
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
const SmProfile = withWrapper(Vector);
SmProfile.groupName = "Misc";
export default SmProfile;
