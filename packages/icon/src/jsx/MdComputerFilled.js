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
      d="M16 29v-2h-5.95A3.05 3.05 0 017 23.95V23h26v.95A3.05 3.05 0 0129.95 27H25v2h1.5a1 1 0 010 2h-12a1 1 0 010-2H16zm-9-7V11.05A3.05 3.05 0 0110.05 8h19.9A3.05 3.05 0 0133 11.05V22H10.992v-6.5a.5.5 0 10-1 0V22H7z"
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
const MdComputerFilled = withWrapper(Vector);
MdComputerFilled.groupName = "Misc";
export default MdComputerFilled;
