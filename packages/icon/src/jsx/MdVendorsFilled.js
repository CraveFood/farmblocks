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
      d="M34 30h1c1.333 0 1.333 2 0 2H5c-1.333 0-1.333-2 0-2h1v-7.714a1 1 0 01.125-.485l3.957-7.147a1 1 0 01.468-.429l7.043-3.138A1 1 0 0118 11h.145a1 1 0 01.4.084l7.188 3.138a1 1 0 01.49.46l3.667 7.147a1 1 0 01.11.457V30h.848v-8.16l-4.175-8.138-4.673-2C22.013 8.538 24.707 6 28 6c3.301 0 6 2.55 6 5.724V30zm-16.494-6.076H16a2 2 0 00-2 2V30h3.5v-6c0-.026.002-.051.006-.076zm.988 0c.004.025.006.05.006.076v6H22v-4.076a2 2 0 00-2-2h-1.506zM20 19a2 2 0 10-4 0 2 2 0 004 0z"
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
const MdVendorsFilled = withWrapper(Vector);
MdVendorsFilled.groupName = "Business";
export default MdVendorsFilled;
