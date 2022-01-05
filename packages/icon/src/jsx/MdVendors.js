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
      d="M18.5 30H22v-4.576c0-.796-.574-1.424-1.258-1.424H18.5v6Zm-1 0v-6h-2.243c-.684 0-1.257.628-1.257 1.424V30h3.5Zm5.5 0h5v-7.473l-3.394-6.615-6.53-2.851-6.407 2.855L8 22.544V30h5v-4.576C13 24.094 14 23 15.257 23h5.485C21.999 23 23 24.095 23 25.424V30Zm-1-17.408v-.868C22 8.55 24.699 6 28 6s6 2.55 6 5.724V30h1c1.333 0 1.333 2 0 2H5c-1.333 0-1.333-2 0-2h1v-7.714a1 1 0 0 1 .125-.485l3.957-7.147a1 1 0 0 1 .468-.429l7.043-3.138A1 1 0 0 1 18 11h.145a1 1 0 0 1 .4.084L22 12.592Zm2 .873 1.733.757a1 1 0 0 1 .49.46l3.667 7.147a1 1 0 0 1 .11.457V30h2V11.724C32 9.681 30.221 8 28 8s-4 1.68-4 3.724v1.741ZM19.5 19a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm1 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
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
const MdVendors = withWrapper(Vector);
MdVendors.groupName = "Business";
export default MdVendors;
