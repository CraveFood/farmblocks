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
      d="M25 27h5a.5.5 0 100-1h-5v1zm0-3h5a.5.5 0 100-1h-5v1zm0-3h7v10h-7 7V21h-7zm-1 12H7a1 1 0 01-1-1V7a1 1 0 011-1h11a1 1 0 011 1v3h5a1 1 0 011 1v8h8a1 1 0 011 1v12a1 1 0 01-1 1h-9zm1-3h5a.5.5 0 100-1h-5v1zM8 10h9V8H8v2zm7.007 17H10a1 1 0 000 2h5.007v-2zm1 0v2H21a1 1 0 000-2h-4.993zm-1-6H10a1 1 0 000 2h5.007v-2zm1 0v2H21a1 1 0 000-2h-4.993zm-1-6H10a1 1 0 000 2h5.007v-2zm1 0v2H21a1 1 0 000-2h-4.993z"
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
const MdBusinessesFilled = withWrapper(Vector);
MdBusinessesFilled.groupName = "Business";
export default MdBusinessesFilled;
