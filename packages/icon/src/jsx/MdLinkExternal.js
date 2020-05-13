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
      d="M23.586 15H15v10h10v-8.586l-4.293 4.293a1 1 0 01-1.414-1.414L23.586 15zM29 11h-5a1 1 0 010-2h6a1 1 0 011 1v6a1 1 0 01-2 0v-5zM14 27a1 1 0 01-1-1V14a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H14z"
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
const MdLinkExternal = withWrapper(Vector);
MdLinkExternal.groupName = "Misc";
export default MdLinkExternal;
