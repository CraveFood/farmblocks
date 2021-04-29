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
      d="M4 18h13.141l-1.817 6.82a.7.7 0 00.856.856l6.923-1.844a.7.7 0 00.315-.182l6.538-6.538a1 1 0 01.044.296V27.95A3.05 3.05 0 0126.95 31H7.05A3.05 3.05 0 014 27.95V18zm0-1v-1.95A3.05 3.05 0 017.05 12h15.882l-5 5H4zm2-2.5a.5.5 0 101 0 .5.5 0 00-1 0zm2 0a.5.5 0 101 0 .5.5 0 00-1 0zm2 0a.5.5 0 101 0 .5.5 0 00-1 0zm23.711-3.123l-.03-.032-4.057-4.057 1.299-1.299 4.087 4.088-1.299 1.3zm-1.413 1.413l-9.737 9.737-5.573 1.485 1.485-5.573 9.737-9.737 4.057 4.058.031.03z"
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
const MdCustomBrandFilled = withWrapper(Vector);
MdCustomBrandFilled.groupName = "Misc";
export default MdCustomBrandFilled;
