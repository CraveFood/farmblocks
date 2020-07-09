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
      d="M12.732 19.627a1 1 0 111.415 1.414l-2.121 2.122a3.498 3.498 0 000 4.949 3.498 3.498 0 004.949 0l4.95-4.95a3.502 3.502 0 000-4.95 1 1 0 111.414-1.414 5.502 5.502 0 010 7.779l-4.95 4.949a5.498 5.498 0 01-7.777 0 5.498 5.498 0 010-7.777l2.12-2.122zm15.026.883a1 1 0 11-1.414-1.414l2.121-2.122a3.498 3.498 0 000-4.949 3.498 3.498 0 00-4.95 0l-4.949 4.95a3.502 3.502 0 000 4.95 1 1 0 11-1.414 1.414 5.502 5.502 0 010-7.779l4.95-4.949a5.498 5.498 0 017.777 0 5.498 5.498 0 010 7.777l-2.12 2.122z"
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
