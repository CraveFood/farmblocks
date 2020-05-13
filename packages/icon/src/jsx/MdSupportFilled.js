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
      d="M10 26.81c-3.222-1.828-5-4.748-5-8.6C5 11.063 11.107 7 20 7s15 4.062 15 11.21C35 25.298 29.062 29 20 29c-.752 0-1.483-.026-2.19-.078l-6.192 4.864A1 1 0 0110 33v-6.19zm9.515-6.156c-.705 0-1.226.52-1.226 1.197v.029c0 .676.521 1.198 1.226 1.198.706 0 1.226-.522 1.226-1.198v-.029c0-.677-.52-1.197-1.226-1.197zm0-.93h.113c.408 0 .704-.324.76-.69l.043-.255c1.537-.31 2.778-1.043 2.778-2.833v-.028c0-1.874-1.382-2.918-3.411-2.918-1.24 0-2.185.395-2.933 1.015a.984.984 0 00-.365.762c0 .535.45.986.985.986.24 0 .466-.099.636-.226.506-.38 1.028-.563 1.634-.563.817 0 1.298.367 1.298 1v.029c0 .69-.566 1.071-1.791 1.225-.452.057-.718.381-.65.846l.143.96c.055.379.352.69.76.69z"
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
const MdSupportFilled = withWrapper(Vector);
MdSupportFilled.groupName = "Misc";
export default MdSupportFilled;
