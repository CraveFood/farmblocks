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
      d="M16.002 12c.052-1.646 1.31-3 2.904-3h.143a3.593 3.593 0 0 1 3.543-3h4.816a3.593 3.593 0 0 1 3.543 3h.143C32.722 9 34 10.413 34 12.107V31a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V20a1 1 0 0 1 1-1h2v-2H7a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h9.002ZM16 14H8v1h8v-1Zm0 3h-6v2h6v-2Zm0 6h-5a.5.5 0 1 0 0 1h5v-1Zm0 2h-5a.5.5 0 1 0 0 1h5v-1Zm0 2h-5a.5.5 0 1 0 0 1h5v-1Zm9.5-1v5H30v-4a1 1 0 0 0-1-1h-3.5Zm-1 0H21a1 1 0 0 0-1 1v4h4.5v-5Zm0-3v-2H21a1 1 0 0 0 0 2h3.5Zm1 0H29a1 1 0 0 0 0-2h-3.5v2Zm3.386-14c-.235-.586-.808-1-1.478-1h-4.816c-.67 0-1.243.414-1.478 1h7.772ZM26 14.5v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1Z"
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
const MdHospitalsFilled = withWrapper(Vector);
MdHospitalsFilled.groupName = "Business";
export default MdHospitalsFilled;
