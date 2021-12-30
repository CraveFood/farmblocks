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
      d="M12.732 19.627a1 1 0 1 1 1.415 1.414l-2.121 2.122a3.498 3.498 0 0 0 0 4.949 3.498 3.498 0 0 0 4.949 0l4.95-4.95a3.502 3.502 0 0 0 0-4.95 1 1 0 1 1 1.414-1.414 5.502 5.502 0 0 1 0 7.779l-4.95 4.949a5.498 5.498 0 0 1-7.777 0 5.498 5.498 0 0 1 0-7.777l2.12-2.122Zm15.026.883a1 1 0 1 1-1.414-1.414l2.121-2.122a3.498 3.498 0 0 0 0-4.949 3.498 3.498 0 0 0-4.95 0l-4.949 4.95a3.502 3.502 0 0 0 0 4.95 1 1 0 1 1-1.414 1.414 5.502 5.502 0 0 1 0-7.779l4.95-4.949a5.498 5.498 0 0 1 7.777 0 5.498 5.498 0 0 1 0 7.777l-2.12 2.122Z"
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
const MdLink = withWrapper(Vector);
MdLink.groupName = "Misc";
export default MdLink;
