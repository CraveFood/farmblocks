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
      d="M29 11h-5a1 1 0 010-2h6a1 1 0 011 1v6a1 1 0 01-2 0v-5zm-3.384 2l-6.321 6.291a1 1 0 001.41 1.418L27 14.444V26a1 1 0 01-1 1H14a1 1 0 01-1-1V14a1 1 0 011-1h11.616z"
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
const MdLinkExternalFilled = withWrapper(Vector);
MdLinkExternalFilled.groupName = "Misc";
export default MdLinkExternalFilled;
